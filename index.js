// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin
// });

// let numbers
// rl.on('line', (line) => {
//     numbers = line.split(' ');
// }).on('close', () => {
//     const [a, b] = numbers
//     let result = +a + +b;
//     process.stdout.write(result.toString());
// });

//   const fs = require('fs');
//   let str = fs.readFileSync('input.txt', 'utf8')

//   const arr = str.split(' ');
// const A = +arr[0];
// const B = +arr[1];
// const result = A + B;
// fs.writeFileSync("output.txt", result,  "ascii")

const fs = require("fs");
let str = fs.readFileSync("./input.txt", "utf8");
str = str.split('\n')
const [jewels, stones] = str;
let result = 0;
for (let i = 0; i < stones.length; i++) {
	if (jewels.includes(stones.charAt(i))) {
		result++;
	}
}
fs.writeFileSync("output.txt", result.toString(), "ascii");
