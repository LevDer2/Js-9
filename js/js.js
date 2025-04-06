// Завдання 1
// Напиши функцію logItems(array), яка отримує масив і використовує цикл for, який для кожного елемента масиву буде виводити в консоль повідомлення в форматі [номер елемента] - [значення елемента].
// Нумерація повинна починатися з 1. Наприклад, для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено '1 - Mango', а для індексу 2 виведе '3 - Ajax'.

// function logItems(array) {
//     // console.log(array);
//     for (let i = 0; i < array.length; i += 1) {
//         // console.log(array[i]);
//         console.log(`${i + 1}, ${array[i]}`);
        
//     }
// }
// console.log(logItems(['Mango', 'Poly', 'Ajax']));


// Завдання 2
// Напиши скрипт підрахунку вартості гравіювання прикрас. Для цього створи функцію calculateEngravingPrice(message, pricePerWord) приймаючу рядок (в рядку будуть тільки слова і прогалини) і ціну гравіювання одного слова, і повертає ціну гравіювання всіх слів в рядку.
// function calculateEngravingPrice(message, pricePerWord) {
//     // console.log(message);
//     const del = message.split(" ");
//     // console.log(del);
    
//     const by = del.length;
//     // console.log(by);
//     console.log(`Cost one word ${pricePerWord} cost your row ${by * pricePerWord}`);
    
//     // console.log(pricePerWord);
//     return `Cost one word ${pricePerWord} cost your row ${by * pricePerWord}`; 
// }

// console.log(calculateEngravingPrice("Its my life and its now or never", 20));

// Завдання 3

// Напиши функцію findLongestWord(string), яка приймає параметром довільний рядок (в рядку будуть тільки слова і прогалини) і повертає найдовше слово в цьому рядку.

// function findLongestWord(string) {
//     // console.log(string);
//     const res = string.split(" ")
//     // console.log(res);
//     let some = res[0]
//     // console.log(some);
    
//     for (let i = 0; i <= res.length; i++) {
//         // console.log(res[i]);
//         if (res[i] > some) {
//             some = res[i]
//         }
        
//     }
//     return some;
// }

// console.log(findLongestWord("I dont understand this theme"));


// Завдання 4
// Напиши функцію formatString(string) яка приймає рядок і форматує його якщо необхідно.
// Якщо довжина рядка не перевищує 40 символів, функція повертає її в початковому вигляді.
// Якщо довжина більше 40 символів, то функція обрізає рядок до 40-ка символів і додає в кінець рядка три крапки '...', після чого повертає укорочену версію.

// function formatString(string) {
// let message = "";
// if (string.length < 40) {
//     message = string
// } else {
//     message = string.slice(0, 40) + "..."
// }
// return message
// }

// console.log(formatString("qwertytyrewuewhfdjhfqwertytyrewuewhfdjhfggg"));


// Завдання 5
// Напиши функцію checkForSpam(message), приймаючу 1 параметр message — рядок. Функція перевіряє її на вміст слів spam і sale. Якщо знайшли заборонене слово, то функція повертає true, якщо заборонених слів немає функція повертає false. Слова в рядку можуть бути в довільному регістрі.

// function checkForSpam(message) {
// console.log(message);
// const lower = message.toLowerCase()
// console.log(lower);
// if (lower.includes("sale") || lower.includes("spam")) {
//     return true
// } else {
//     return false
// }
// }

// console.log(checkForSpam("Lev Nazer not spam"));


// Завдання 6
// Напиши скрипт з наступним функціоналом:
// При завантаженні сторінки користувачеві пропонується в prompt ввести число. Введення зберігається в змінну input і додається в масив чисел numbers.
// Операція введення числа користувачем і збереження в масив триває до тих пор, пір, поки користувач не натисне Cancel в prompt.
// Після того як користувач припинив введення натиснувши Cancel, якщо масив не порожній, необхідно порахувати суму всіх елементів масиву і записати її в змінну total. Використовуй цикл for або for...of. Після чого в консоль виведи рядок 'Загальна сума чисел дорівнює [сума]'.
// 🔔 Робити перевірку того, що користувач ввів саме число, а не довільний набір символів, не обов'язково. Якщо хочеш, в разі некоректного введення, показуй alert з текстом 'Було введено не число, попробуйте ще раз', при цьому результат promptзаписувати в масив чисел не потрібно, після чого знову користувачеві пропонується ввести число в prompt.

let input;
const numbers = [];
let total = 0;