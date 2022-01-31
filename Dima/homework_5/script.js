// let date = new Date();
//
// function addZero(num){
//     if (num > 0 && num < 10) {
//         return '0' + num;
//     } else {
//         return num;
//     }
// }
// console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':'
//     + addZero(date.getSeconds()) + ' ' + addZero(date.getDate()) + '.'
//     + (addZero(date.getMonth() + 1)) + '.' + addZero(date.getFullYear()));


// let str = '2025-12-13';
// let result = str.split('-').reverse().join('.');
// console.log(result);


// let date = new Date();
// console.log(kogdaBlyatVyhodnye(date.getDay()));
//
// function whatAFuckingDay(num) {
//     if (num === 0 || num === 6) {
//         return 'vihodnoy, suka'
//     } else {
//         return 'idi huyach na rabotku'
//     }
// }
//
// function kogdaBlyatVyhodnye(num) {
//     if (num > 0 && num < 6) {
//         return 7 - num;
//     } else {
//         return 'segodnya vihodnye, dolboeb'
//     }
// }
//
// console.log(Date.now());


// let months = [
//     'янв', 'фев', 'мар', 'апр', 'май', 'июн',
//     'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// let date = new Date();
// let month = date.getMonth();
// console.log(months[month]);


// let date = new Date(2021, 7, 8);
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср',
//     'чт', 'пт', 'сб'];
//
// console.log(days[day]);


// let date = new Date() ;
// let datenow = new Date(2000, 0, 10 );
// console.log(date.getHours());


// let a = new Date();
// let b = new Date(a.getFullYear(), a.getMonth(), 1);
// console.log(b.getDay());


// let now = new Date();
// let counter = 0;
//
// for (let year = 2000; year <= now.getFullYear(); year++) {
//     let date = new Date(2000 + year, 0, 1);
//     if (date.getDay() === 0 || date.getDay() === 6) {
//         counter += 1;
//     }
// }
// console.log(counter);


// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
//
// console.log(now - date);


// function sumDigPow(a, b) {
//     let result = [];
//     for (let i = a; i <= b; i++) {
//         let arr = String(i).split('');
//         let summ = 0;
//         for (let j = 0; j < arr.length; j++) {
//             summ += arr[j] ** (j + 1);
//         }
//         if (summ === i) {
//             result.push(i);
//         }
//     }
//     return console.log(result);
// }
//
// sumDigPow(10, 10);


// Функция, которая строит таблицу из одномерного массива,
// преобразовывая его в двумерный и заполняя пустые ячейки членами.

// let elem = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
// let col = 5;
// let symbol = '.!.';
// elem.append(createTable(convertArr(arr, col, symbol)));
// console.log(arr);
//
// function createTable(arr) {
//     let table = document.createElement('table');
//     for (let elArr of arr) {
//         let tr = document.createElement('tr')
//         for (let elem of elArr) {
//             let td = document.createElement('td');
//             td.innerHTML = elem;
//             tr.appendChild(td);
//         }
//         table.appendChild(tr);
//     }
//     return table;
// }
//
// function convertArr(arr, col, symbol) {
//     let result = [];
//     while (arr.length > 0) {
//         result.push(arr.splice(0, col));
//     }
//     let a = result[0].length - result[result.length - 1].length;
//     for (let i = 0; i < a; i++) {
//         result[result.length - 1].push(symbol);
//     }
//     return result;
// }

let arr = [1, 2, 3, 4, 5, 6];

let result = arr.reduce(function(sum, elem) {
  return sum + elem;
}, 0);

console.log(result);