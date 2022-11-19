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
   return undefined;
   // return num * 2;
}

// arr.forEach(double);
// const newArr = [];
// for(let i = 0; i < arr.length; i++) {
//    if (i === 3) {
//       continue;
//    }
//    newArr[i] = arr[i] * 2;
// }

function filter(item) {
   return item === 5;
}

function sort(a, b) {
   if (a > b) {
      return -1;
   }

   if (a < b) {
      return 1;
   }

   return 0;
}

function find(item) {
   return item === 5;
}

console.log(arr);
const arrMap = arr.map(doubleMap);
console.log(arr.filter(filter));
// console.log(arr.sort(sort));
console.log(arr.find(find));
console.log(arr.slice(1, 3));
console.log(arr.splice(-2, 10,'d', 'd', 'd'))
console.log(arr);


// console.log(arrMap);
// console.log(arr === arrMap);
// console.log(arr);

