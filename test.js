// 'use strict';

//                                          ЗАДАНИЯ НА СОБЕСЕДОВАНИЯ
// 0, '', null, undefined, NaN      -   false значения

// Какое будет выведено значение: let x = 5; alert( x++ ); ?
// let x = 5;
// alert( x++ );  //5

// Чему равно такое выражение: [ ] + false - null + true ?
// console.log([] + false - null + true); // NaN  /строка плюс любые данные это строка

// Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
// let y = 1; 
// let x = y = 2; 
// alert(x);   //2

// Чему равна сумма [ ] + 1 + 2?
// console.log([ ] + 1 + 2); // '12'

// Что выведет этот код: alert( '1'[0] );
// alert( '1'[0] );  //1

// Чему равно 2 && 1 && null && 0 && undefined ?
// console.log(2 && 1 && null && 0 && undefined);   //null      /оператор && запинается на лжи, || на правде

// Есть ли разница между выражениями? !!( a && b ) и (a && b)?
// console.log(!!( 1 && 2 ) === (1 && 2));  //false

// Что выведет этот код: alert( null || 2 && 3 || 4 ); 
// alert( null || 2 && 3 || 4 );   //3   /приоритет && выше чем ||

// a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
// const a = [1, 2, 3]; 
// const b = [1, 2, 3];
// console.log(a == b);    //false, это два разных хранилища

// Что выведет этот код: alert( +'Infinity' ); ?
// alert( +'Infinity' );   //Infinity   числовой тип дпнных

// Верно ли сравнение: 'Ёжик' > 'яблоко'?
// console.log('Ёжик' > 'яблоко');   //false  потому что нужно смотреть по алфавиту и в больше идет нижний регистр

// Чему равно 0 || '' || 2 || undefined || true || falsе ?
// console.log(0 || '' || 2 || undefined || true || falsе);    //2




// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage('abrakadabra');

//                                         /callback функции
// function learnJS (lang,callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок!');

// }

// learnJS('Javascript', done);

//                                               /Обекты
// const options = {         //обьект
//     name: 'test',         //свойства  key
//     width: 1024,
//     height: 10240,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log('test');
//     }
// }
// // options.makeTest();

// const {border, bg} = options.colors;
//   console.log(border);



// // console.log(Object.keys(options).length);

// //console.log (options.name);

// //delete options.name;

// //console.log(options);

// // for (let key in options) {
// //     console.log(`Свойство ${key} имеет значение ${options[key]} `);

// // }

// // let counter = 0;
// // for (let key in options) {
// //     if (typeof(options[key]) === 'object') {
// //         for (let i in options[key]) {
// //             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
// //         }
// //     } else {
// //         console.log(`Свойство ${key} имеет значение ${options[key]}`);
// //         // counter++;
// //     }
// // }
// // console.log(counter);

//                                             //Массивы
// const arr = [1, 2, 3, 6, 7];

// // console.log(arr.length);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// })

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
// const products = str.split(', ');
// console.log(products);

// products.sort();

// console.log(products.join('; '));



// const arr = [1, 32, 23, 56, 7];     // сортирует по возрастанию
// arr.sort(compareNum);
// console.log(arr);
// function compareNum(a, b) {
//     return a - b;
// }


