// console.log(getLuckyTickets())
//
// function getLuckyTickets() {
//     let result = [];
//     for (let i = 1001; i <= 999999; i++) {
//         if (isLucky(i)) {
//             result.push(normalizeNum(i));
//         }
//     }
//     return result;
// }
//
// function isLucky(num) {
//     let str = normalizeNum(num);
//
//     return Number(str[0]) + Number(str[1]) + Number(str[2]) === Number(str[3]) + Number(str[4]) + Number(str[5]);
// }
//
// function normalizeNum(num) {
//     let str = String(num);
//     if (str.length === 4) {
//         str = '00' + str;
//     }
//     if (str.length === 5) {
//         str = '0' + str;
//     }
//     return str;
// }


// function isLucky(num) {
//     let str = num;
//     let sum1 = 0;
//     let sum2 = 0;
//     if (str.length % 2 === 0) {
//         for (let i = 0; i < str.length / 2; i++) {
//             sum1 += Number(str[i]);
//         }
//         for (let i = str.length / 2; i < str.length; i++) {
//             sum2 += Number(str[i]);
//         }
//         return sum1 === sum2;
//
//     } else {
//         return false;
//     }
// }
//
// function normalizeNum(num, digitsAmount) {
//     let str = String(num);
//     for (let i = str.length; i < digitsAmount; i++) {
//         str = '0' + str;
//     }
//     return str;
// }
//
// function getLuckyTickets(digits) {
//     let result = [];
//     for (let i = 1; i <= 999999; i++) {
//         if ((String(i).length <= digits) && (isLucky(normalizeNum(i, digits)))) {
//             result.push(normalizeNum(i, digits));
//         }
//         if (String(i).length > digits) {
//             break
//         }
//     }
//     return result;
// }
//
// console.log(getLuckyTickets(6));


// let arr = [
//     function() {return 1},
//     function() {return 2},
//     function() {return 3},
// ];
// console.log(arr[0]() + arr[1]() + arr[2]());


// const obj = {
//     sum: function (arr) {
//         let sum = 0;
//         for (const elem of arr) {
//             sum += elem;
//         }
//         return sum;
//     },
//     sqrCount: function (arr) {
//         let sum = 0;
//         for (const elem of arr) {
//             sum += elem ** 2;
//         }
//         return sum;
//     },
//     cubeCount: function (arr) {
//         let sum = 0;
//         for (const elem of arr) {
//             sum += elem ** 3;
//         }
//         return sum;
//     }
// }
// console.log(obj.sum([1, 2, 3]));
// console.log(obj.sqrCount([1, 2, 3]));
// console.log(obj.cubeCount([1, 2, 3]));


// test(
//     function() {return 1;},
//     function() {return 2;}
// );
// function test(fn1, fn2) {
//     fn1();
//     fn2();
// }


// let math = {
//     square: function(num) {return num * num},
//     cube: function(num) {return num * num * num},
// };
//
// for (const mathKey in math) {
//     console.log(math[mathKey](5));
// }


// function test(arr, func) {
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = func(arr[i]);
//     }
//     return console.log(arr);
// }
//
// test([1, 2, 3], function (num) {
//     return num ** 3;
// });


// function func(num1, num2) {
//     function square(num) {
//         return num * num;
//     }
//     function cube(num) {
//         return num ** 3;
//     }
//
//     return square(num1) + cube(num2);
// }
//
// console.log(func(2, 3));


// let result = each([1, 2, 3, 4, 5], function(num, pos) {
//     return num*pos;
// });
// function each(arr, callback) {
//     let result = [];
//     let pos = 0;
//
//     for (let elem of arr) {
//         result.push( callback(elem, pos) ); // вызываем функцию-коллбэк
//         pos++;
//     }
//
//     return result;
// }
//
// console.log(result);


// let result = filter([1, -2, 3, 4, 5], function (elem) {
//     if (elem > 0) {
//         return true;
//     }
// });
//
// console.log(result);
//
// function filter(arr, callback) {
//     let result = [];
//     let pos = 0;
//
//     for (let elem of arr) {
//         if (callback(elem) === true) {
//             result.push(elem);
//         }
//         pos++;
//     }
//
//     return result;
// }


// let result = every([11, 2, 3, 4, 5], function(elem) {
//     if (elem > 0) {
//         return true;
//     } else {
//         return false;
//     }
// });
//
// console.log(result);
//
// function every(arr, callback) {
//     let result = true;
//
//     for (let elem of arr) {
//         if (callback(elem) !== true) {
//             return false;
//         }
//     }
//
//     return result;
// }


// let result = alternate(
//     ['a', 'b', 'c', 'd', 'e'],
//     function(elem) {
//         return elem + '!';
//     },
//     function(elem) {
//         return elem + '?';
//     },
// );
//
// console.log(result);
//
// function alternate(arr, callback1, callback2) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             result.push(callback1(arr[i]));
//         } else {
//             result.push(callback2(arr[i]));
//         }
//     }
//     return result;
// }


// let result = every([1, 2, 3, -4, 5], elem => elem > 0);
//
// function every(arr, callback) {
//     let result = true;
//
//     for (let elem of arr) {
//         if (callback(elem) !== true) {
//             return false;
//         }
//     }
//
//     return result;
// }
// console.log(result);


// let result = every([1,2,3,4,5], (elem, index) => elem * index > 10);
// console.log(result);
//
// function every(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i));
//     }
//     return result;
// }


// function func(obj) {
//     console.log(obj);
//
//     for (let key in obj) {
//         func(obj[key]);
//     }
// }
//
// func({a: 1, b: 2, c: 3, d: 4, e: 5});


// function getSum(arr) {
//     let sum = arr.shift() ** 2;
//
//     if (arr.length !== 0) {
//         sum += getSum(arr);
//     }
//
//     return sum;
// }
// console.log(getSum([1, 2, 3]));


// function func(obj) {
//     for (const key in obj) {
//         if (typeof(obj[key]) === 'object') {
//             func(obj[key]);
//         } else {
//             console.log(obj[key]);
//         }
//     }
// }
//
// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});


// let arr1 = [];
// function func(arr) {
//
//     for (let elem of arr) {
//         if (typeof(elem) === 'object') {
//             func(elem);
//         } else {
//             arr1.push(elem);
//         }
//     }
//
// }
//
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);
// console.log(arr1);


// function func(obj) {
//     let sum = 0;
//     for (const key in obj) {
//         if (typeof obj[key] === 'object') {
//             sum += func(obj[key]);
//         } else {
//             sum += obj[key];
//         }
//     }
//     return sum;
// }
//
// console.log(func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}));


// function func(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'object') {
//             arr[i] = func(arr[i]);
//         } else {
//             arr[i] = arr[i] ** 2;
//         }
//     }
//     return arr;
// }
// console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));


// let arr = [9, 16, 25];
// let result = arr.map(elem => Math.sqrt(elem));
//     console.log(result);


// let arr = ['asd', 'qsd'];
// let result = arr.map(elem => elem + '!');
// console.log(result);


// let arr = ['asd', 'qsd'];
// let result = arr.map(elem => elem.split('').reverse().join(''));
// console.log(result);


// let arr = ['123', '456', '567'];
// let result = (arr.map(elem => elem.split('')));
// console.log(result);


// let arr = [1, 2, 3, 4, 5];
// let result = arr.map((elem, index) => elem * index);
// console.log(result);


// let arr = [1, 2, 3, 4, 5];
// arr.forEach(elem => console.log(elem ** 2));


// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
//
// arr.forEach(function(elem) {
//     sum += elem;
// });
//
// console.log(sum);


// let arr = [-1, 2, -3, -4, 5];
// console.log(arr.filter(elem => elem > 0));


// let arr = [-1, 12, 3, -4, 5, 6, 7, -8];
// console.log(arr.filter(elem => elem > 0 && elem < 10));


// let arr = [-1, 12, 3, -4, 5, 6, 7, -8];
// console.log(arr.filter((elem, index) => elem * index >= 30));


// let arr = ['safdaf', 'asda', 'dasdas'];
// console.log(arr.filter(elem => elem.length >= 5));


// let arr = [[-1, 12], 3, [-4, 5, 6], 7, -8];
// console.log(arr.filter(elem => typeof (elem) !== 'object'));


// let arr = [-1, 12, 3, -4, 5, 6, 7, -8];
// console.log(arr.filter(elem => elem < 0).length);


// let arr = [2, 4, 6, 8];
// console.log(arr.every(elem => elem % 2 === 0));


// let arr = [2, 4, 6, 8];
// console.log(arr.every((elem, index) => elem * index < 30));


// let arr = [-1, -2, -1, -4, -5];
// console.log(arr.some(elem => elem > 0));


// let arr = [-1, -2, -1, 2, -8];
// console.log(arr.some((elem, index) => elem * index > 30));


// function reverseWords(str) {
//     let result = [];
//     for (const strElement of str.split(' ')) {
//         result.push(strElement.split('').reverse().join(''));
//     }
//     return console.log(result.join(' '));
// }
// reverseWords("This is an example!")

// function reverseWords(str) {
//     let result = str.split(' ').map(function (elem) {
//         return elem.split('').reverse().join('');
//     });
//     return result.join(' ');
// }
// reverseWords("This is an example!");


// function func(num1, num2, num3,
//               num4, num5) {
//     return num1 + num2 + num3 + num4
//         + num5;
// }
//
// console.log(func(...[1, 2, 3, 4, 5]));


// function func(...nums) {
//     let sum = 0;
//     nums.forEach(function (elem) {
//         sum += elem;
//     });
//     return sum / nums.length;
// }
// func(1,2,3,4);


// let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);
//
// function unite(...arrs) {
//     return arrs;
// }


// function merge(...arrs) {
//     return [].concat(...arrs);
// }
//
// let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]);
// console.log(result);


// function merge(arr1, arr2, arr3, arr4) {
//     return [].concat(arr1, arr2, arr3, arr4);
// }
//
// console.log(merge([1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]));


// function func(...arrs) {
//     let result = [];
//     let arr = [].concat(...arrs);
//     arr.forEach(function (elem, index) {
//         if (arr.includes(elem) && arr.indexOf(elem) !== index && !result.includes(elem)) {
//             result.push(elem);
//         }
//     });
//     return result;
// }
//
// console.log(func([1, 2, 3, 3], [4, 5, 3], [1, 3, 5, 8], [6, 2, 8]));


