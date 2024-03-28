// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// function area(a, b) {
//     return a * b;
// }
//
// console.log(area(4, 5));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
// function areaCircle(r) {
//     return Math.PI*Math.pow(r, 2);
// }
//
// console.log(areaCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// function areaCylinder(h, r) {
//     return (2 * Math.PI * r * h) + (2 * Math.PI * Math.pow(r, 2));
// }
//
// console.log(areaCylinder(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент
// const numbers = [2, 3, 4, 5, 6, 7]
//
// function foo(array) {
//     for (const arrayElement of array) {
//         console.log(arrayElement);
//     }
// }
//
// console.log(foo(numbers));

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
//
// function createText(text) {
//     document.write(`<div>${text}</div>`)
// }
//
// createText('Hello World')

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
//
// function createText(text) {
//     document.write(`<ul>
//    <li>${text}</li>
//    <li>${text}</li>
//    <li>${text}</li>
// </ul>`)
// }
//
// createText('hello')

// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом,
// який є числовим (тут використовувати цикл)
//
// function createText(text, n) {
//     document.write(`<ul>`)
//     for (let i = 0; i < n; i++) {
//         document.write(`
//            <li>${text}</li>
//     `)
//     }
//     document.write(`</ul>`)
// }
//
// createText('hello',5)

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// function array(arr) {
//     document.write(`<ul>`)
//     for (let i = 0; i < arr.length; i++) {
//         document.write(`<li>
//         ${arr[i]}
//     </li>`)
//     }
//     document.write(`</ul>`)
// }
//
//
// array([1, 2, 'hello', true])

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
//
// const users = [
//     {id:1 ,name: 'Andrii', age: 30},
//     {id:2 ,name: 'Nata', age: 27},
//     {id:3 ,name: 'Ira', age: 28},
//     {id:4 ,name: 'Masha', age: 25},
// ]
// function writer(arr) {
//     for (const user of arr) {
//         document.write(`<div>
//             <p>id: ${user.id}</p>
//             <p>Name: ${user.name}</p>
//             <p>age: ${user.age}</p>
// </div>`)
//     }
// }
//
// writer(users);


// - створити функцію яка повертає найменьше число з масиву
//
// const arr = [-15, 1, 4, 5, 6, -5, -7, -10];
//
// function foo(arrNumbers) {
//     let num = arrNumbers[0];
//     for (const number of arrNumbers) {
//         if (num > number) {
//             num = number;
//         }
//
//     }
//     return (num);
// }
//
// console.log(foo(arr));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
//
// const numbers = [1, 2, 10, 12];
//
// function sum(arr) {
//     let sum = 0;
//     for (const arrElement of arr) {
//         sum = sum + arrElement;
//     }
//     return (sum);
// }
//
// console.log(sum(numbers));

// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]
//
// function swap(arr, index1, index2) {
//     let one = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = one;
//     return(arr)
// }
//
// console.log(swap([11, 22, 33, 44], 0, 1));

// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
//
// function exchange(sumUAH,currencyValues,exchangeCurrency){
//     if (exchangeCurrency === currencyValues[0].currency) {
//         return (sumUAH/currencyValues[0].value)
//     }
//     if (exchangeCurrency === currencyValues[1].currency) {
//         return (sumUAH/currencyValues[1].value)
//     }
//
// }
//
// console.log(exchange(10000, [{currency: 'USD', value: 40}, {currency: 'EUR', value: 42}], 'USD'));
