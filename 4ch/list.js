// console.log(arrayToList([10, 20, 30]))
// console.log(listToArray(arrayToList([10, 20, 30])))
// console.log(listToArrayCycle(arrayToList([100, 200, 300])))
// console.log(prepend(10, prepend(20, null)))

// // tests for nth
// console.log(nth(arrayToList([10, 20, 30]), 1))
// // -> 20
// console.log(nth(arrayToList([10, 20, 30]), 4))
// // -> undefined

// tests for nthRecursion
console.log(nthRecursion(arrayToList([10, 20, 30]), 0))
// -> 10
console.log(nthRecursion(arrayToList([10, 20, 30]), 1))
// -> 20
console.log(nthRecursion(arrayToList([10, 20, 30]), 4))
// -> undefined

// мое решение с бородой какой-то
function arrayToList(arr) {
	let list = {}
	for (i = arr.length - 1; i >= 0; i--) {
		let currentState = { value: list.value, rest: list.rest }

		let rest = i == arr.length - 1 ? null : currentState
		list.value = arr[i]
		list.rest = rest
	}
	return list
}

// решение из учебника
/* function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
} */

// моя реализация через вспомогательную функцию
function listToArray(obj) {
	let arr = []
	goDeeper(obj, arr)
	return arr
}
function goDeeper(obj, arr) {
	if (obj.rest !== null) {
		arr.push(obj.value)
		goDeeper(obj.rest, arr)
	} else { arr.push(obj.value) }
	return arr
}

// реализация по примеру через цикл 
function listToArrayCycle(list) {
	const arr = []
	for (node = list; node; node = node.rest) {
		arr.push(node.value)
	}
	return arr
}

function prepend(element, list) {
	let newList = {value: element, rest: list}
	return newList
}

// реализация из примера по циклу
function nth(list, num) {
	for (let node = list, i = 0; node; (node = node.rest) && i++) {
		if (i === num) return node.value
	}
	return undefined
}

// рекурсивный вариант nth

function nthRecursion(list, num) {
	if (num === 0) {
		return list.value
	} else if (num > 0 && list.rest) {
		// return nthRecursion(list.rest, num - 1); // работает

		//return nthRecursion(list.rest, num -= 1); // работает

		/* num--;
		return nthRecursion(list.rest, num); // работает */

		// return nthRecursion(list.rest, --num); // работает

		return nthRecursion(list.rest, num--) // не работает
	} else {
		return undefined
	}
}