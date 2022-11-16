// varibles

var variable;

// variable = 10;
// console.log(variable);
// variable = 'Hello worl"d';
// variable = "Hello world's";
// console.log(variable);
// variable = true;
// console.log(variable);
// variable = null;
// console.log(variable);
// variable = undefined;
// console.log(variable);
variable = {
    property: 10,
    tmp: 'Hello World',
    boo: {
        tmp: 'Nested tmp'
    },
    foo: function(arg) {}
};
// console.log('foo property', variable.foo);
variable.foo = 'foo';

// console.log('foo property', variable.foo);
// console.log(variable.boo.tmp);
// console.log(variable['tmp']);
variable = [1, 'Second array item', true, {}];
// console.log(variable[1]);

// console.log(variable);

// let vrb;

// vrb = 10;
// console.log(vrb);

// const boo = 10;
// console.log(boo);
// boo = 20;
// console.log(boo);

function sum(num1, num2) {
    const result = num1 + num2;
    return result;
    console.log('after return');
}

const tmp = sum(3, 5);

// true/false

const num = 2;

// if (num > 10) {
//     console.log('num is bigger than 10');
// } else if (num > 5) {
//     console.log('num is bigger than 5');
// } else if (num > 4) {
//     console.log('num is bigger than 4');
// } else {
//     console.log('num is smaller or equal than 5');
// }

// switch (num) {
//     case 1: {
//         console.log('1');
//         break;
//     }

//     case 2: {
//         console.log('2');
//         break;
//     }

//     default: {
//         console.log('default');
//     }
// }

for (let i = 0; i < 15; i = i + 1) {
    if (i === 2) {
        continue;
    }

    if (i > 4) {
        break;
    }
    console.log(i);
}

let i = 5;

while (i > 3) {
    console.log('smth');
    i = i - 3;
}

let t = 2;

do {
    console.log('do while', t);
    t = t - 1;
} while ( t > 0);


// let boo = 0;
// boo++;
// console.log('boo', boo);
// boo++;
// console.log('boo', boo);
// boo++;
// console.log('boo', boo);

// for (let i = 0; i < 5; i += 10) {
//     console.log(i);
// }

// a > b 
// 5 == '5' 
// 5 !== '5'
// console.log(tmp);
// sum(10, 15);


let str = 'Some string';

// ['S', 'o', 'm', 'e', ' ', 's', 't', 'r', 'i', 'n', 'g']
str.length;
str[3] === 'e';

const arr = [0, 2, 3, 6, 7, 88, 32, 53.3, 54];

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
    }
}

for (let i = 1; i < arr.length; i+= 2) {
    console.log(arr[i]);
}


var variable = 10;

function foo() {
    let boo = 10000;
    console.log(variable);
    function tmp() {
        function fff() {
            let boo = 30;
            console.log(variable);
            console.log(boo);
        }

        fff();
    }

    tmp();
}

foo();

// console.log(boo);