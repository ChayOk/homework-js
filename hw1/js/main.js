//2
let a1 = 5 % 3,
a2 = 3 % 5,
a3 = 5 + '3',
a4 = '5' - 3,
a5 = 75 + 'кг',
a6 = 785 * 653,
a7 = 100 / 25,
a8 = 0 * 0,
a9 = 0 / 2,
a10 = 89 / 0,
a11 = 98 + 2,
a12 = 5 - 98,
a13 = (8 + 56 * 4) / 5,
a14 = (9 - 12) * 7 / (5 + 2),
a15 = + "123",
a16 = 1 || 0,
a17 = false || true,
a18 = true > 0;

console.log('a1:', a1, 'a2:', a2, 'a3:', a3, 'a4:', a4, 'a5:', a5, 'a6:', a6, 'a7:', a7, 'a8:', a8, 'a9:', a9, 'a10:', a10, 'a11:', a11, 'a12:', a12, 'a13:', a13, 'a14:', a14, 'a15:', a15, 'a16:', a16, 'a17:', a17, 'a18:', a18 + '\n');
console.log('Type:', '\n', 'a1:', typeof a1, 'a2:', typeof a2, 'a3:', typeof a3, 'a4:', typeof a4, 'a5:', typeof a5, 'a6:', typeof a6, 'a7:', typeof a7, 'a8:', typeof a8, 'a9:', typeof a9, 'a10:', typeof a10, 'a11:', typeof a11, 'a12:', typeof a12, 'a13:', typeof a13, 'a14:', typeof a14, 'a15:', typeof a15, 'a16:', typeof a16, 'a17:', typeof a17, 'a18:', typeof a18 + '\n');

// 4
let h = 10;
let VCilindra = Math.PI * Math.pow((a7/2), 2) * h;

console.log(VCilindra + ' куб.м.' + '\n');
document.write(VCilindra + ' куб.м.' + '<br><br>');

// 3
let width = 10;
let height = 23;
let SPryam = width * height;
console.log(SPryam + ' см2' + '\n');

// 5
let r = 5;
let SKruga = Math.PI * Math.pow(r, 2);
console.log(SKruga + ' см2' + '\n');

// 6
let a = 5;
let b = 7;
h = 10;
let STrap = (a+b)/2 * h;
console.log(STrap + ' см2' + '\n');

// 7
let S = 2000000;
let p = 10 / 1200;
let n = 60;
let payInMonth = S * p / (1 - Math.pow(1 + p, -n));
let Pereplata = (payInMonth * n) - S;
console.log(Pereplata.toFixed(2) + ' руб.' + '\n');

// 8
a = 8;
b = 3;
// a+2(x-b)=16
// b(x+15)=a+6x
// x+2x+ax+bx=23780
let x1 = (16-a+2*b)/2;
console.log('eq1: x = ' + x1 + '\n');

let x2 = (a-15*b) / (b - 6);
console.log('eq2: x = ' + x2 + '\n');

let x3 = 23780 / (3 + a + b);
console.log('eq3: x = ' + x3 + '\n');