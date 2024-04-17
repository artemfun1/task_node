// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });

// let numbers
// rl.on('line', (line) => {
//     numbers = line.split(' ');
// }).on('close', () => {
//     const [a, b] = numbers
//     let result = +a + +b;
//     process.stdout.write(result.toString());
//     console.log(result)
// });

// const readline = require("readline");

// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// let numbers = 0;
// rl.on("line", line => {
// 	numbers += +line;
// }).on("close", () => {
// 	process.stdout.write(numbers.toString());
// });

//   const fs = require('fs');
//   let str = fs.readFileSync('input.txt', 'utf8')

//   const arr = str.split(' ');
// const A = +arr[0];
// const B = +arr[1];
// const result = A + B;
// fs.writeFileSync("output.txt", result,  "ascii")

// const fs = require("fs");
// let str = fs.readFileSync("./input.txt", "utf8");
// str = str.split('\n')
// const [jewels, stones] = str;
// let result = 0;
// for (let i = 0; i < stones.length; i++) {
// 	if (jewels.includes(stones.charAt(i))) {
// 		result++;
// 	}
// }
// fs.writeFileSync("output.txt", result.toString(), "ascii");

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin
// });

// let lines = [];
// rl.on('line', (line) => {
//     lines.push(line);
// }).on('close', () => {
//     const [jewels, stones] = lines
//     let result = 0;
//     for (let i = 0; i < stones.length; i++) {
//         if (jewels.includes(stones.charAt(i))) {
//             ++result;
//         }
//     }
//     process.stdout.write(result.toString());
// });

// const readline = require("readline");
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });
// let numbers = undefined;
// let arr = [];
// let toggleLine = true
// rl.on("line", line => {
// 	if (toggleLine) {
// 		numbers = line;
// 		toggleLine = false
// 	} else {
// 		arr = line.split("").filter(num => num !== " ");
// 	}
// }).on("close", () => {
// 	let start = 0;
// 	let end = 7;
// 	let answerArr = [];
// 	let answerNum = -1;
// 	countFive = 0;
// 	while (end !== +numbers + 1) {
// 		const testingArr = arr.slice(start, end);
// 		if (testingArr.includes("2", 0) || testingArr.includes("3", 0)) {
// 			start += 1;
// 			end += 1;
// 			continue;
// 		} else {
// 			for (let i = 0; i < testingArr.length; i++) {
// 				if (testingArr[i] === "5") {
// 					countFive += 1;
// 				}
// 			}
// 			answerArr.push(countFive);
// 			countFive = 0;
// 		}
// 		start += 1;
// 		end += 1;
// 	}
// 	if (answerArr.length > 0) {
// 		answerArr.sort((a, b) => a - b);
// 		answerNum = answerArr.pop();
// 	}
// 	process.stdout.write(answerNum.toString());
// });

// const readline = require("readline");
// const rl = readline.createInterface({
// 	input: process.stdin,
// 	output: process.stdout,
// });

// let firstArr = [];
// let secondArr = [];
// let toggleLine = true;
// rl.on("line", line => {
// 	if (toggleLine) {
// 		firstArr = line.split("").filter(num => num !== " ");
// 		toggleLine = false;
// 	} else {
// 		secondArr.push(line.split("").filter(num => num !== " "));
// 	}
// }).on("close", () => {
// 	let n_arr = []; // новый перевёрнутый массив
// 	let n_rows = secondArr[0].length; // количество новых строк
// 	let n_cols = secondArr.length; // количество новых столбцов
// 	for (let x = 0; x < n_rows; x++) {
// 		let row_arr = []; // это элемент из нового массива
// 		for (let y = n_cols - 1, z = 0; y >= 0; y--, z++) {
// 			row_arr[z] = secondArr[y][x];
// 		}
// 		n_arr[x] = row_arr;
// 	}

// 	if (firstArr[0] == 1) {
// 		process.stdout.write(secondArr.flat().join(""));
// 		return;
// 	}

// 	for (let i = 0; i < +firstArr[1]; i++) {
// 		process.stdout.write(n_arr[i].toString().replace(",", " ") + "\n");
// 	}
// });

const readline = require("readline");

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

let directories = [];

rl.on("line", line => {
	directories.push(line);
});

rl.on("close", () => {
	
	directories.sort(); 
	let result = [];

	for (let directory of directories) {
		let parts = directory.split("/");

		let level = parts.length - 1; 

		result.push("  ".repeat(level) + parts[parts.length - 1]); 
	}

	process.stdout.write(result.join("n")); 
});



