// ...........pre-increment...................
let a = 10;
let b = 5;
let c = ++b;
let d = c + ++a;
console.log(d, c);
// ...........post-increment...................
let i = 20;
let x = 10;
let y = i + x++;
// console.log(y);
// ...........pre and post-increment...................

let numOne = 100;
let numTwo = 200;
// numTwo--;
console.log(numTwo);
let numThree = 300;
let some = numOne + ++numTwo + numThree++;
console.log(some);
let sub = numOne + --numTwo ;
console.log(sub);
console.log(some)
// minus pre and post increment
let p = 200;
let q = 120;
let r = 224;
let pqr = p + --q - r
console.log(pqr);
// Apply arithmetic peration on-01.............
let numberOne = "10";
let convertedNumOne = parseInt(numberOne);
// console.log(convertedNumOne);
let numberTwo = "2";
let convertedNumTwo = parseInt(numberTwo);
// console.log(convertedNumTwo);
let plus = convertedNumOne + convertedNumTwo;
let minus = convertedNumOne - convertedNumTwo;
let multiplication = convertedNumOne * convertedNumTwo;
let division = convertedNumOne / convertedNumTwo;
let modulas = convertedNumOne % convertedNumTwo;
let greterThen = convertedNumOne > convertedNumTwo;

// console.log(plus,minus,multiplication,division,modulas,greterThen);

// Apply arithmetic peration on-02.............

let stringOne = "ten";
let stringTwo = "two";
let stringPlus = stringOne + stringTwo;
let stringMinus = stringOne - stringTwo;
let stringMultiplication = stringOne * stringTwo;
// console.log(stringPlus,stringMinus,stringMultiplication);
