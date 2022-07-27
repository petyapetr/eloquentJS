// // Построение треугольника в цикле
// let a = '#';
// while (a.length <= 7) {
// 	console.log (a);
// 	a = a + '#';
// }	

// // FizzBuzz
// // первый вариант решения этой задачи
// for (i = 1; i<=100; i++) {
// 	if (i % 3 === 0) {
// 		if (i % 5 === 0) console.log('FizzBuzz');
// 		else console.log('Fizz');
// 	}	else if (i % 5 === 0) 
// 		console.log('Buzz');
// 	else console.log(i)
// }

// // правильное решение из учебника
// for (i = 1; i <= 100; i++) {
// 	let output = '';
// 	if (i % 3 === 0) output += 'Fizz';
// 	if (i % 5 === 0) output += 'Buzz';
// 	console.log(output || i)
// }

// Шахматная доска

// // мой вариант решения
// let chessBoard = '';
// let width = 20, height = 8;

// // цикл создает восемь линий
// for (y = 0; y < height; y++) {
// 	// цикл наполняет их значениями
// 	if (y % 2 === 0) {
// 		let str = '';
// 		for (x = 0; x < width; x++) {
// 			if (str.endsWith('#') || !str) str += ' ';
// 			else str += '#';
// 		};
// 		chessBoard = chessBoard + str + '\n'
// 	} else {
// 		let str = '';
// 		for (x = 0; x < width; x++) {
// 			if (str.endsWith(' ') || !str) str += '#';
// 			else str += ' ';
// 			chessBoard = chessBoard + str + '\n';
// 		}
// 	}
// }
// console.log(chessBoard)

// лаконичный вариант через четные и нечетные кординаты
let width = 30, height = 6, board = ''
for (y = 0; y < height; y++) {
	for (x = 0; x < width; x++) {
		if ((x + y) % 2 === 0) board += ' '
		else board += '#'
	}
	board += '\n'
}
console.log(board)