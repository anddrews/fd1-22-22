// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat deserunt expedita quasi dolorem illum saepe quia! Nihil laudantium minima natus maxime amet ipsam numquam saepe! Repellat beatae nulla impedit!

// hello, 2
// lohellolo
function backToFront(str, count) {
    // const strArr = str.split('');
    const subStr = str.slice(-count);

    // console.log(subArr.concat(strArr).concat(subArr).join(''));
    // console.log(subArr,strArr, subArr);
    console.log(`${subStr}${str}${subStr}`);
    console.log(subStr + str + subStr);
};

// backToFront('hello', 2);


// start = 10 finish = 15

function sumInRange(start, finish) {
    let result = 0;

    for(let i = start; i <= finish; i++) {
        result += i;
    }

    console.log(result);  
}

sumInRange(10, 12);

// console.log(test);