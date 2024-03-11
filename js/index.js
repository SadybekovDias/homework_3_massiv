// Первое задание
// const yodaSays = ["on JavaScript", "programming ", "I like "];
// console.log(yodaSays[2]);
// console.log(yodaSays[1]);
// console.log(yodaSays[0]);

// ==========================
//Третье задание

// let loginQuestion = prompt('Логин пользователя');

// if (loginQuestion === 'admin') {
//     const variant = prompt('Пароль пользователя');
//     switch (variant) {
//         case 'BlackOverlord':
//             alert('Welcome!');
//             break;
//         case null:
//         case '':
//             alert('Wrong Password!');
//             break;
//         default:
//             break;
//     }
// } else if (loginQuestion === null || loginQuestion === '') { 
//     alert('Login canceled');
// } else {
//     alert('Unknown user');
// }

// ==========================
//Четвертое задание

// let drinks =  ['milk', 'beer', 'beer', 'milk', 'milk'];

// for (let i = 0; i < drinks.length; i++) {
//     if (drinks[i] === 'milk') {
//         console.log('Good');
//     } else if (drinks[i] === 'beer'){
//         console.log('bad');
//     }
// }

// ==========================
//Пятое задание

// const question = prompt('Введите символ:');
// const weight = 20;
// const height = 7;
// let text = '';

// for (let i = 0; i < height; i++) {
//     for (let j = 0; j < weight; j++) {
//         text += question;
        
//     }
//     text += '\n';
// }

// alert(text);

// ==========================
//Шестое задание

// let inHours = (prompt('Значение в часах'));

// if (isNaN(inHours)) {
//     console.log('Введите число');
// } else {
//     console.log(Math.floor(inHours / 3600));
// }

// ==========================
//Седьмое задание
// const isMath = Math.ceil(Math.random()*10);
// const isNumber = Math.ceil(Math.random()*10)
// const userAnswer = prompt(`what is ${isMath} * ${isNumber}?`);
// const userAsk = isMath * isNumber;

// if (parseInt(userAnswer) === userAsk) {
//     alert('You are correct');
// } else {
//     alert('You are wrong');
// }

// ==========================
//Восьмое задание

// let array = [59, 462, 72, 118, 483, 253, 555, 573, 108, 560];
// let newArray = [];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] === array[0] || array[i] === array[3] || array[i] === array[5] || array[i] === array[6] || array[i] === array[7] || array[i] === array[8] || array[i] === array[9]) {
//         newArray.push(array[i]);
//     }
// }
// console.log(newArray);

// ==========================
//Девятое задание

// const n = 1000;

// for (let i = 0; n / 2; i++) {
//     console.log(n);
// }

// ==========================
//Доп. Задание
// ==========================

// 1. Упражнение "Сравнение чисел"

// const Comprasion = prompt('Давайте сравним числа');

// if (Comprasion > 10) {
//     alert('первое число больше второго');
// } else if (Comprasion < 10) {
//     alert('первое число меньше второго');
// } else if (Comprasion == 10) {
//     alert('Числа равны');
// } else {
//     alert('Введите число');
// }

// ==========================
// 2. Упражнение "Сообщение в рамочке"



// ==========================
// 3. Упражнение "Количество жизни"