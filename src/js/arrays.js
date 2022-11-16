const arr = [1, 2, 3, 4, 5];

const matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] * 2;
// }


function print(num, index, arr) {
    console.log(num, index, arr);
}

function double(num, index, arr) {
   arr[index] = num * 2;
}

function doubleMap(num, index, arr) {
   return num * 2;
}

arr.forEach(double);

const arrMap = arr.map(doubleMap);

console.log(arr);
console.log(arrMap);
console.log(arr);




function add(num1, num2) {
   return num1 + num2;
};

// function addTwo(num) {
//    return add(2, num);
// }

// function addFive(num) {
//    return add(5, num);
// }


function addNumber(num) {
   const param = num;

   return function(num2) {
      return add(param, num2);
   }
}

function sum(num) {
   return function (r) {
      if (r) {
         return sum(r + num);
      } else {
         return num;
      }
   }
}

const tmp = sum(1)(2)(3)(4)();
console.log(tmp);

let addTwo = addNumber(2);
let addFive = addNumber(5);

console.log(addTwo(4));
console.log(addFive(6));

