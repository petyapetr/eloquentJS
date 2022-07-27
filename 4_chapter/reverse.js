// tests
console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
const arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]

function reverseArray(arr) {
	let newArr = []
	for (i = arr.length - 1; i >= 0; i--) {
		newArr.push(arr[i])
	}
	return newArr
}

function reverseArrayInPlace(arr) {
	const n = Math.floor(arr.length / 2)
	for (i = 0; i < n; i++) {
		const temp = arr[arr.length - 1 -i]
		arr[arr.length - 1 - i] = arr[i]
		arr[i] = temp
	}
	return arr
}