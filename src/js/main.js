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

const el = document.querySelector('h1');
el.innerText = tmp;
el.style.backgroundColor = 'red';
el.classList.add('some-class');
// console.log(tmp);
// sum(10, 15);





