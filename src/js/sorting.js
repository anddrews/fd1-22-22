const array = [9, 4, 3, 11, -3, 0];
// [-3, 4, 3, 11, 9, 0]
// [-3, 0, 3, 11, 9, 4]
//
// [-3, 0, 3, 4, 9, 11]
// [-3, 0, 3, 4, 9, 11]
const item = {
    price: 100,
    weight: 30
}
function comparator(a, b) {
    if (a.weight < b.weight) {
        return 1;
    }

    if (a > b) {
        return -1;
    }

    return 0;
}
console.log(array.sort(comparator));

for (let j = 0; j < array.length - 1; j++) {
    for(let i = j + 1; i < array.length; i++) {
        if(array[i] < array[j]) {
            const tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;
        }
    }
}
// console.log(array);

// ---*---
// --***--
// -*****-
// *******

console.log('' + '-' + '-' + '-' + '*' + '-'+ '-' + '-');
console.log('' + '-' + '-' + '*' + '*' + '*'+ '-' + '-');
console.log('' + '-' + '*' + '*' + '*' + '*'+ '*' + '-');
console.log('' + '*' + '*' + '*' + '*' + '*'+ '*' + '*');

for(let i = 0; i < 4; i++) {
    let str = '';
    for(let j = 0; j < 7; j++) {
        if (j <= 3 + i && j >= 3 - i) {
            str = str + '*';
        } else {
            str = str + '-';
        }
        // str = str + '-';
        console.log('cond_start:' ,3 - i, 'cond_fin:' ,3 + i, 'ind:', j, str);
    }
}

