console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16, 5], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

// with method `some`
function every(array, test) {
	return !array.some(item => !test(item))
}

// with cycle
/* function every(arr, test) {
	let result = true
	arr.forEach(item => {
		if (!test(item)) result = false
	})

	return result
} */