// // Минимум
// function min(a, b) {
// 	if (a === b) {
// 		return console.log('They are equal')
// 	}
// 	let result
// 	if (a < b) result = a
// 	else result = b
// 	return console.log(result) 
// }

// min(4,5)
// min (3,3)
// min(8,6)

// // Рекурсия
// function isEven(num){
// 	if (num === 0) return true
// 	if (num === 1) return false
// 	if (num < 0) return isEven(num+2)
// 	return isEven(num-2)
// }

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??

// Считаем бобы
function countBs(str) {
	let counter = 0
	for (let i = 0; i < str.length; i++) {
		if (str[i] === "B") counter++
	}
	return counter
}
console.log(countBs('BBC'))

function countChar(str, letter) {
	let counter = 0
	for (let i = 0; i < str.length; i++) {
		if (str[i] === letter) counter++
	}
	return counter
}
console.log(countChar("kakkerlak", "k"))

function refactorCountBs(str) {
	return countChar(str, 'B')
}
console.log(refactorCountBs('BBC'))