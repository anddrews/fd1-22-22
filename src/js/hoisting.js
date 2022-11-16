greeting();
var boo = 'boo';
console.log(boo);



// console.log(foo);

let foo = 'foo';

function greeting() {
    console.log('Hello world', boo);
    // greeting();  - recursion
}

// tmp();

const tmp = function fnExpression () {
    console.log('tmp');
    // fnExpression(); - recursion
}

tmp();
// fnExpression();

var smth = 'SMTH';

greeting();

(function () {
    console.log('IIFE', smth);
})();

const sum = function (a, b) {
    return a + b;
}

const diff = function (a, b) {
    return a - b;
}

const print = function (a, b) {
    return `${a} ${b}`;
}

const calculate = function (a, b, fn) {
    console.log('some preparation');
    const num1 = a * 2;
    const num2 = b * 2;

    return function() {
        const result = fn(num1, num2);
        console.log(result);
    }
}

calculate(1, 2, sum);
calculate(1, 2, diff);
calculate(1, 2, print);

const t = calculate(1, 2, sum);

t();
// console.log(t);
t();

const y = calculate(3, 8, diff);

y();



