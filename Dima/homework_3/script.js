// LESSON#3 //

//#1 vivedet 52;

//#2 vivedet 52;

//#3 vivedet 52;

//#4 vivedet 7;

//#5 vivedet 10;

//#6 vivedet 3;

//#7 vivedet 2.5;

//#8 vivedet 1;

//#9 vivedet NaN;

//#10 vivedet 5s2;

//#11 vivedet -7;

//#12 vivedet 7;

//#13 vivedet 7;

//#14 vivedet 31;


// const a = [1, 2, 3];
// console.log(a);

// let num = 38;
// let str = String(num);
// let sum = Number(str[0]) + Number(str[1]);
// if (num < 10 || num > 99) {
//     console.log('vvedi drugoe pidor');
// } else {
//     if (sum <= 9) {
//         console.log('summa menshe tvoih ozhidaniy');
//     } else {
//         console.log('summa dvuznacna')
//     }
// }

// let age = 19;
// let adult;
//
// if (age >= 18) {
//     adult = true;
// } else {
//     adult = false;
// }
//
// console.log(adult);

// Упрощенный вариант предыдущего написания!!!! Спросить у Игоря:
// let age = 19;
// let adult;
//
// adult = age >= 18 ? 'da': 'net';
//
// console.log(adult);


// let num = 31;
//
// if (num % 2 === 0) {
//     console.log('chetnoe')
// } else {
//     console.log('nechetnoe')
// }


// let num = 27;
//
// if (num % 3 === 0) {
//     console.log('delitsya')
// } else {
//     console.log('ne delitsya, ostatok: ' + num % 3)
// }


// let num = 129;
// let str = String(num);
// let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
// console.log(sum);


// let num = 5;
// switch (num) {
//     case 1:
//         console.log(1);
//         break;
//     case 2:
//         console.log(2);
//         break;
//     case 3:
//         console.log(3);
//         break;
//     case 4:
//         console.log(4);
//         break;
//     default:
//         console.log('введите другое значение');
//         break;
// }


// let num = 1;
// console.log(num >= 0 ? 1: -1);


// let a = 2 * (3 - 1);
// let b = 6 - 2;
// console.log(a === b);


// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// console.log(a > b);

//
// let a = 2 ** 4;
// let b = 4 ** 2;
// console.log(a !== b ? 'ne ravny': 'ravny');

// let i = 11;
// while (i <= 33) {
// console.log(i);
// i++;
// }

// let i = 30;
// while (i >= 0) {
// console.log(i);
// i--;
// }


// for (let i = 100; i <= 100; i --) {
//     console.log(i);
// }

// let result = 0;
// for (i = 1; i <= 20; i++) {
//     result = result * i;
// }


// Умножить все четные числа на 2, а все не четные на 3
//
// const arr = [1, 2, 4, 5, 7, 21, 3, 4, 34, 12];
//
// for (let i = 0; i <= arr.length - 1; i++) {
//     if (arr[i] % 2 === 0) {
//         arr[i] = arr[i] * 2;
//     } else {
//         arr[i] = arr[i] * 3;
//     }
// }
// console.log(arr);


// const arr = [1, 2, 4, 5, 7, 21, 3, 4, 34, 12];
//
// for (let i = 0; i <= arr.length - 1; i++) {
//     let e = arr[i] % 2;
//     e === 0 ? arr[i] * 3 : arr[i] * 2;
// }
// console.log(arr);


// let result = 0;
// for (let i = 0; i <= 99; i++) {
//     if (i % 2 !== 0) {
//         result += i;
//     }
// }
// console.log(result);


// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i <= arr.length - 1; i++) {
//     let elem = Number(String(arr[i])[0]);
//     if (elem === 1 || elem === 2 || elem === 5) {
//         console.log(arr[i]);
//     }
// }


// let arr = [10, 20, 30, 50, 235, 3000];
// let obr = [];
// for (let i = 0; i <= arr.length - 1; i++) {
//     obr[i] = arr[(arr.length - 1) - i];
// }
// console.log(obr);


// let arr = [10, 20, 30, 50, 235, 3000];
// let obr = arr.reverse();
// console.log(obr);

// let arr = [0, 1, 4, 3, 7, 5, 0, 12, 8];
// for (let i = 0; i <= arr.length - 1; i++) {
//     if (i === arr[i]) {
//         console.log(arr[i]);
//     }
// }


// let arr = [123, 'wq', '23e', 2345, '23', 244, 'df', 'ewr', 23, 63];
// let arrStr = [];
// let arrNum = [];
// for (let i = 0; i <= arr.length - 1; i++) {
//     if (typeof arr[i] === 'string') {
//         arrStr.push(arr[i]);
//     }
//     if (typeof arr[i] === 'number') {
//         arrNum.push(arr[i]);
//     }
// }
// console.log(arrStr);
// console.log(arrNum);


// let arr = [123, 'wq', '23e', 2345, '23', 244, 'df', 'ewr', 23, 63];
// let obj = {};
// for (let i = 0; i <= arr.length - 1; i++) {
//     obj[arr[i]] = arr[i];
// }
// console.log(obj);

// let arr = [1, 2, 3, 4, 5];
// let summ = 0;
// for (let elem of arr) {
//     summ = summ + elem;
// }
// console.log(summ);

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let summ = 0;
// for (let key in obj) {
//     summ = summ + obj[key];
// }
// console.log(summ);

// for (let i = 0, j = 0; i <= 9; i++, j += 2) {
//     console.log(i, j);
// }

// let arr = [1, 2, 4, 5, 3, 'fs', 3];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === 3) {
//         console.log(i);
//         break;
//     }
// }

// let str = '';
//
// for (let i = 0; i < 5; i++) {
//     str += 'x';
//     console.table(str);
// }


// let first = 0;
// let second = 1;
// let third = 2;
//
// for (let i = 1; i <= 10; i++) {
//     let sum = first + second + third;
//     first = second;
//     second = third;
//     third = sum;
//     console.log(sum);
// }


// let arr = [1, 2, 3, 6, 10, 11, 21, 22, 15, 6, 9, 0];
// let result = 'нет';
// for (let i = 0; i <= arr.length - 1; i++) {
//        if (arr[i] === 5) {
//            result = 'да';
//     }
// }
// console.log(result);


// let num = 5;
// let fuck = 1;
// for (let i = num; i >= 1; i--) {
//     fuck = fuck * i;
// }
// console.log(fuck);


// let arr = [[1, 2], [3, 4], [5, 6]];
// let summ = 0;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr[i].length; j++) {
//         summ += (arr[i])[j];
//     }
// }
// console.log(summ);


// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let summ = 0;
// for (let subArr of arr) {
//     for (let subSubArr of subArr) {
//         for (let elem of subSubArr) {
//             summ += elem;
//         }
//     }
// }
// console.log(summ);


// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 5; j++) {
//         arr[i].push(j + 1);
//     }
// }
// console.log(arr);


// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 4; j++) {
//         arr[i].push('x');
//     }
// }
// console.log(arr);


// let arr = [];
// for (let i = 0; i < 3; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//         for (let k = 0; k < 5; k++) {
//             arr[i][j].push(k + 1);
//         }
//     }
// }
// console.log(arr);


// let arr = [];
// let count = 1;
// for (let i = 0; i < 2; i++) {
//     arr[i] = [];
//     for (let j = 0; j < 2; j++) {
//         arr[i][j] = [];
//         for (let k = 0; k < 2; k++) {
//             arr[i][j].push(count);
//             count ++;
//         }
//     }
// }
// console.log(arr);


// let obj = {
//     key1: {
//         key1: 1,
//         key2: 2,
//         key3: 3,
//     },
//     key2: {
//         key1: 4,
//         key2: 5,
//         key3: 6,
//     },
//     key3: {
//         key1: 7,
//         key2: 8,
//         key3: 9,
//     },
// }
// let summ = 0;
// for (const key in obj) {
//     for (const keysec in obj[key]) {
//         summ += obj[key][keysec];
//     }
// }
// console.log(summ);


// let obj = {
//     1: {
//         1: 'a1',
//         2: 'a2',
//         3: 'a3',
//     },
//     2: {
//         1: 'b1',
//         2: 'b2',
//         3: 'b3',
//     },
//     3: {
//         1: 'c1',
//         2: 'c2',
//         3: 'c3',
//     },
// }
// console.log(obj[1][2]);


// let obj = {
//     key1: {a: 1, b: 2, c: {d: 3, e: 4}, f: 5},
//     key2: {g: 6, h: 7}
// }
// let summ = 0;
//
// for (const keyfirst in obj) {
//     for (const keysecond in obj[keyfirst]) {
//         if (typeof (obj[keyfirst][keysecond] === 'object')) {
//             for (const keythird in obj[keyfirst][keysecond]) {
//                 summ += obj[keyfirst][keysecond][keythird];
//             }
//         } if (typeof obj[keyfirst][keysecond] === 'number') {
//             summ += obj[keyfirst][keysecond];
//         }
//     }
// }
// console.log(summ);


// let affairs = {
//     '2018': {
//         11: {
//             29: ['дело111', 'дело112', 'дело113'],
//             30: ['дело121', 'дело122', 'дело123'],
//         },
//         12: {
//             30: ['дело211', 'дело212', 'дело213'],
//             31: ['дело221', 'дело222', 'дело223'],
//         },
//     },
//     '2019': {
//         12: {
//             29: ['дело311', 'дело312', 'дело313'],
//             30: ['дело321', 'дело322', 'дело323'],
//             31: ['дело331', 'дело332', 'дело333'],
//         }
//     },
// }
//
// let year = "2018";
// let month = 12;
// let day = 31;
// console.log(affairs[year][month][day]);


// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//     },
// ];
//
// console.log(employees[0]['salary'] + employees[1]['salary']);


// let students = {
//     'boys':  ['Коля', 'Вася', 'Петя'],
//     'girls': ['Даша', 'Маша', 'Лена'],
// };
//
// console.log(students.boys[1] + ' ' + students.girls[2]);


// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//     },
// ];
//
// for (const employee of employees) {
//     console.log(employee.name + ' - ' + employee.salary);
// }


// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//     },
// ];
// let summ = 0;
// for (const employee of employees) {
//     summ += employee.salary;
// }
// console.log(summ);


// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//         age: 28,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//         age: 29,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//         age: 30,
//     },
//     {
//         name: 'name4',
//         salary: 600,
//         age: 31,
//     },
//     {
//         name: 'name5',
//         salary: 700,
//         age: 32,
//     },
// ];
// let summ = 0;
// for (const employee of employees) {
//     if (employee.age >= 30) {
//         summ += employee.salary;
//     }
// }
// console.log(summ);


// let employees = [
//     {
//         name: 'name1',
//         salary: 300,
//         dismissed: false,
//     },
//     {
//         name: 'name2',
//         salary: 400,
//         dismissed: true,
//     },
//     {
//         name: 'name3',
//         salary: 500,
//         dismissed: false,
//     },
//     {
//         name: 'name4',
//         salary: 600,
//         dismissed: true,
//     },
//     {
//         name: 'name5',
//         salary: 700,
//         dismissed: false,
//     },
// ];
// for (const employee of employees) {
//     if (!employee.dismissed) {
//         console.log(employee.name + ' - ' + employee.salary)
//     }
// }


// let data = {
//     1: [
//         'data11',
//         'data12',
//         'data13',
//     ],
//     2: [
//         'data21',
//         'data22',
//         'data23',
//     ],
//     3: [
//         'data31',
//         'data32',
//         'data33',
//         'data34',
//         'data35',
//     ],
//     4: [
//         'data41',
//         'data42',
//     ],
// };
//
// for (const dataKey in data) {
//     for (const dataKeyElement of data[dataKey]) {
//         console.log(dataKeyElement);
//     }
// }


// let data = [
//     {
//         1: 'data11',
//         2: 'data12',
//         3: 'data13',
//         4: 'data14',
//     },
//     {
//         1: 'data21',
//         2: 'data22',
//         3: 'data33',
//     },
//     {
//         1: 'data31',
//         2: 'data32',
//     },
// ];
// for (const datum of data) {
//     for (const datumKey in datum) {
//         console.log(datum[datumKey]);
//     }
// }


// let data = [
//     {
//         1: [
//             'data111',
//             'data112',
//             'data113',
//         ],
//         2: [
//             'data121',
//             'data122',
//             'data123',
//         ],
//     },
//     {
//         1: [
//             'data211',
//             'data212',
//             'data213',
//         ],
//         2: [
//             'data221',
//             'data222',
//             'data223',
//             'data224',
//         ],
//         3: [
//             'data231',
//             'data232',
//             'data233',
//             'data234',
//             'data235',
//         ],
//     },
//     {
//         1: [
//             'data411',
//             'data412',
//             'data413',
//         ],
//         2: [
//             'data421',
//         ],
//     },
// ];
// for (const datum of data) {
//     for (const datumKey in datum) {
//         for (const Element of datum[datumKey]) {
//                 console.log(Element);
//         }
//     }
// }


// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(245));

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let summ = 0;
// for (let i = 0; i < arr.length; i++) {
//     summ += Math.pow(arr[i], 3);
// }
// console.log(summ);


// let str = 'html css javascript';
// let arr = str.split('');
// console.log(arr);


// let str = '12345';
// let summ = 0;
// for (let i = 0; i < str.length; i++) {
//     summ += +str[i];
// }
// console.log(summ);


// let arr = [1, 2, 3, 4, 5];
//
// arr.shift();
// console.log(arr);


// let arr = ['a', 'b', 'c', 'd', 'e'];
//
// let del = arr.splice(2, 1, '1', '2', '3');
// console.log(arr);
// console.log(del);


// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(3));


// let str = 'london';
// let result = str[0].toUpperCase() + str.slice(1, -1) + str[str.length - 1].toUpperCase();
// console.log(result);


// let str = 'london';
// let result = str[0].toUpperCase() + str[1].toUpperCase() + str.slice(2);
// console.log(result);


// let str = 'London';
// let result = str.toLowerCase();
// console.log(result);


// let str = 'word1 word2 word3';
// let a = str.split(' ');
// let str1 = '';
// for (const string of a) {
//     str1 += string[0].toUpperCase()  + string.slice(1, string.length) + ' ';
// }
// console.log(str1);


// let str = 'var_test_text';
// let a = str.split('_');
// let str1 = '';
// for (const string of a) {
// str1 += string[0].toUpperCase() + string.slice(1);
// }
// console.log(str1[0].toLowerCase() + str1.slice(1));


// let str = '12345';
// let a = str.split('').reverse().join('');
// console.log(a);


// console.log(Math.pow(2, 10));

// console.log(Math.sqrt(245));

// console.log(Math.round(Math.sqrt(379)));
// console.log(Math.ceil(Math.sqrt(379)));
// console.log(Math.floor(Math.sqrt(379)));
// console.log((Math.sqrt(379)).toFixed(3));
// console.log((Math.sqrt(379)).toPrecision(3));

// console.log(Math.floor(Math.random()*100));

// let arr = [];
// for (let i = 0; i < 10; i++) {
// arr.push(Math.floor(Math.random()*10));
// }
// console.log(arr);

// let a = -18.2;
// let b = 239.3421;
// console.log(Math.abs(a - b));

// let str = 'я учу javascript!';
// console.log(str.substr(2, 3));
// console.log(str.substring(2, 5));
// console.log(str.slice(2, 5));

// let str = 'abcde';
// console.log(str.indexOf('c'));


// function func() {
//     console.log('Димass Машиноboy');
// }
// func()
//
// function func2() {
//     let summ = 0;
//     for (let i = 1; i <= 100; i++) {
//         summ += i;
//     }
//     console.log(summ);
// }
// func2()


// function func(arr) {
//     let sum = 0;
//     for (const elem of arr) {
//         sum += elem * elem;
//     }
//     return sum;
// }
//
// console.log(func([1, 2, 3]));


// function getDigitsSum (num) {
//     let sum = 0;
//     let a = String(num);
//     for (let i = 0; i < a.length; i++) {
//         sum += Number(a[i]);
//     }
//     return sum;
// }
//
// console.log(getDigitsSum(1233));


// function getDevisors(num) {
//     let arr = [];
//     for (let i = 0; i <= num; i++) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
//
// console.log(getDevisors(24));


// function reverseStr(str) {
//     return str.split('').reverse().join('');
// }
//
// console.log(reverseStr('1 2- == 34'));


// function delElem(a, arr) {
//     const arrTest = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== a) {
//             arrTest.push(arr[i]);
//         }
//     }
//     return arrTest;
// }
//
// console.log(delElem(2, [1, 2, 'asd', 2, 4, 'sd']));


// function func(num) {
//     let arr = [];
//     for (let i = 1; i <= num; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
//
// console.log(func(5));


// function func(num1, num2) {
//     let arr = [];
//     for (let i = num1; i <= num2; i++) {
//         arr.push(i);
//     }
//     return arr;
// }
//
// console.log(func(2, 9));


// function func(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[(i - 1)] === arr[i]) {
//             return true;
//         }
//     }
//     return false;
// }
//
// console.log(func([1, 2, 5, 3, 4, 5]));


// function func(a, b) {
//     return a > b;
// }
//
// console.log(func(2,1));


// function func(a, b) {
//     return a === b;
// }
//
// console.log(func(1,2));


// let result = [];
// let arr = [1524, 1321, 4563, 7144, 2879];
//
// for (let elem of arr) {
//     if (checkDigitsPairsSum(elem)) { // используем нашу функцию
//         result.push(elem);
//     }
// }
//
// console.log(result);
//
// function checkDigitsPairsSum(num) {
//     let str = String(num);
//     let sum1 = Number(str[0]) + Number(str[1]);
//     let sum2 = Number(str[2]) + Number(str[3]);
//
//     return sum1 === sum2
// }


// const result = [];
// for (let i = 1; i <= 100 ; i++) {
//     if (isPrime(i)){
//         result.push(i);
//     }
// }
// console.log(result);
//
// function isPrime(num) {
//     for (let i = 2; i < num; i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//
//     return true;
// }


// let nums = [123, 456, 789];
//
// let result = [];
// for (let num of nums) {
//     result.push(reverseItem(num))
// }
//
// console.log(result);
//
// function reverseItem(item) {
//     return String(item).split('').reverse().join('');
// }


// let nums = [12, 24, 35, 14];
//
// for (let num of nums) {
//     console.log(num + ': ' + getDivisors(num).join(', '));
// }
//
// function getDivisors(num) {
//     let result = [];
//
//     for (let i = 2; i < num; i++) {
//         if (num % i == 0) {
//             result.push(num);
//         }
//     }
//
//     return result;
// }


// function getSum(arr) {
//     let sum = 0;
//
//     for (let elem of arr) {
//         sum += Number(elem);
//     }
//     return sum;
// }
//
// function getDigits(num) {
//     return String(num).split('');
// }
//
// console.log(getSum(getDigits(1234)));


// let arr = [12, 1233, 34, 53, 98, 189, 3, 23, 97];
// let arr2 = [];
//
// for (const Elem of arr) {
//     if (sumCompare(sumOfElem(Elem))) {
//         arr2.push(Elem);
//     }
// }
// console.log(arr2);
//
// function sumOfElem(num) {
//     let sum = 0;
//     let str = String(num);
//     for (let i = 0; i < str.length; i++) {
//         sum += Number(str[i]);
//     }
//     return sum;
// }
//
// function sumCompare(sum) {
//     return sum >= 1 && sum <= 9;
// }


// function isFreindly(num1, num2) {
//     let sum1 = getSum(getOwnDivisors(num1));
//     let sum2 = getSum(getOwnDivisors(num2));
//     return sum1 === num2 && sum2 === num1;
// }
//
// function getOwnDivisors(num) {
//     let arr = [];
//     for (let i = 0; i < num; i++) {
//         if (num % i === 0) {
//             arr.push(i);
//         }
//     }
//     return arr;
// }
//
// function getSum(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum += arrElement;
//     }
//     return sum;
// }
//
// function getFriendly() {
//     let arr1 = [];
//     for (let i = 1; i <= 3000; i++) {
//         for (let j = i + 1; j <= 3000; j++) {
//             if (isFreindly(i, j)) {
//                 arr1.push([i, j]);
//                 break
//             }
//         }
//     }
//     return arr1;
// }
//
// console.log(getFriendly());
//
// function getOwnDivisors(num) {
//     let sum = 0;
//     for (let i = 0; i < num; i++) {
//         if (num % i === 0) {
//             sum += i
//         }
//     }
//
//     return sum;
// }



// function getFriendlyNumbers() {
//     const arr = [];
//     let i = 0;
//
//     while (i < 3000) {
//         const number1 = getOwnDivisors(i);
//         const number2 = getOwnDivisors(number1);
//
//         if (number1 !== number2) {
//             if (i === number2) {
//                 arr.push([number2, number1]);
//                 i = number1 + 1
//             }
//         }
//
//         i++
//     }
//
//     return arr
// }
//
// console.log(getFriendlyNumbers());



// function getPerfect() {
//     let arrOfSought = [];
//     for (let i = 1; i <= 1000 ; i++) {
//         if (i === sumOfDevisors(getDevisors(i))) {
//             arrOfSought.push(i);
//         }
//     }
//     return arrOfSought;
// }
//
// console.log(getPerfect());
//
// function getDevisors(num) {
//     let arrDev = [];
//     for (let i = 1; i < num ; i++) {
//         if (num % i === 0) {
//             arrDev.push(i);
//         }
//     }
//     return arrDev;
// }
//
// function sumOfDevisors(arrDev) {
//     let sumOfDev = 0;
//     for (const arrElement of arrDev) {
//         sumOfDev += arrElement;
//     }
//     return sumOfDev;
// }


// const arr1 = [1, 9, 'asd', 4, 8];
// const arr2 = [3, 4, 'asd', 6, 7, 1];
//
// function arrCompare(arr1, arr2) {
//     const result = [];
//     for (const arr1Element of arr1) {
//         if (ElemOfArr(arr1Element, arr2)) {
//             result.push(arr1Element);
//         }
//     }
//     return result;
// }
//
// console.log(arrCompare(arr1,arr2));
//
// function ElemOfArr(elem, arr) {
//     return arr.includes(elem);
// }


// const arr1 = [1, 9, 'asd', 4, 8];
// const arr2 = [3, 4, 'asd', 6, 7, 1];
//
// function arrCompare(arr1, arr2) {
//
//     let result1 = (ElemInArr(arr1,arr2));
//     let result2 = (ElemInArr(arr2,arr1));
//
// return result1.concat(result2);
// }
//
// console.log(arrCompare(arr1,arr2));
//
// function ElemOfArr(elem, arr) {
//     return !arr.includes(elem);
// }
//
// function ElemInArr (arrFirst, arrSecond) {
//     const result = [];
//     for (const elem of arrFirst) {
//         if (ElemOfArr(elem, arrSecond)) {
//             result.push(elem);
//         }
//     }
//     return result;
// }


// let num1 = 39;
// let num2 = 52;
//
// function NOD(num1, num2) {
//     return Math.max.apply(null,(devisorsComp(devisorsOfNum(num1), devisorsOfNum(num2))));
// }
//
// console.log(NOD(num1, num2));
//
// function devisorsOfNum(num) {
//     arrOfDev = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             arrOfDev.push(i);
//         }
//     }
//     return arrOfDev;
// }
//
// function devComp(elem, arr) {
//     return arr.includes(elem);
// }
//
// function devisorsComp(arr1, arr2) {
//     let result = [];
//     for (const elem of arr1) {
//         if (devComp(elem, arr2)) {
//             result.push(elem);
//         }
//     }
//     return result;
// }


// let num1 = 13;
// let num2 = 23;
//
// function NOD(num1, num2) {
//     if (Math.max.apply(null,(devisorsComp(devisorsOfNum(num1), devisorsOfNum(num2)))) === 1){
//     return 'vzaimno prostie'
//     } else {
//         return 'hui tebe'
//     }
// }
//
// console.log(NOD(num1, num2));
//
// function devisorsOfNum(num) {
//     arrOfDev = [];
//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             arrOfDev.push(i);
//         }
//     }
//     return arrOfDev;
// }
//
// function devComp(elem, arr) {
//     return arr.includes(elem);
// }
//
// function devisorsComp(arr1, arr2) {
//     let result = [];
//     for (const elem of arr1) {
//         if (devComp(elem, arr2)) {
//             result.push(elem);
//         }
//     }
//     return result;
// }


// function getRandom(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
//
// function randomElem(arr) {
//     return arr[getRandom(0, arr.length - 1)];
// }
//
// let arr = [1, 3, 4, 5, 7, 2, 8, 'asf', '23'];
// console.log(randomElem(arr));


// function getRandom(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
//
// function randomElem(arr) {
//     return arr[getRandom(0, arr.length - 1)];
// }
//
// function sumOfRandom(num = 3) {
//     let sum = 0;
//     for (let i = 1; i <= num; i++) {
//         sum += randomElem(arr);
//     }
//     return sum;
// }
//
// let arr = [1, 3, 4, 5, 7, 2, 8];
//
// console.log(sumOfRandom(3));


// let arr = [0, 1, 2, 3, 4];
//
// function getRandomInt(min, max) {
//     return Math.round(Math.random() * (max - min) + min);
// }
//
// function shuffle(arr, length) {
//     let result = [];
//     for (let i = 0; i < length ; i++) {
//         result.push(arr.splice(getRandomInt(0, arr.length - 1), 1)[0]);
//     }
//     return result;
// }
//
// console.log(shuffle(arr, 3));