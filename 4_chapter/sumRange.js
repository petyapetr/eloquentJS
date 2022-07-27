console.log(`Range from 1 to 10: ${range(1, 10)}`);
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(`Range with a step-fullfilment from 1 to 10 with a step of 2: ${range(1, 10, 2)}`);
// → [1, 3, 5, 7, 9]
console.log(`Reverse range with a step-fullfilment from 5 to 2: ${range(5, 2, -1)}`);
// → [5, 4, 3, 2]
console.log(`Summary of a simple range: ${sum(range(1, 10))}`)
// → 55

// мое решение черз костыли с определением шага
/* function range(start, end, step) {
	const arr = []
	if (!step) step = 1
	if (start > end) {
		if (!step) step = -1
		for (i = start; i >= end; i += step) {
			arr.push(i)
		}
	} else {
		for (i = start; i <= end; i += step) {
			arr.push(i)
		}
	}

	return arr
}

function sum(arr) {
	let sum = 0
	for (item of arr) {
		sum += item
	}
	return sum
} */

// решение из учебника с лаконичным условным ветвлением через оператор ?
function range(start, end, step = start < end ? 1 : -1) {
	let arr = []
	if (step > 0) {
		for (i = start; i <= end; i += step)
		arr.push(i)
	}
	if (step < 0) {
		for (i = start; i >= end; i += step)
		arr.push(i)
	}
	return arr
}

function sum(arr) {
	let total = 0
	for (item of arr) total += item
	return total
}