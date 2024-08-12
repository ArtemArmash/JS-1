let a = parseFloat(prompt("Введіть діапазон від A:"));
let b = parseFloat(prompt("Введіть діапазон до B:"));

let sum = 0;
for (let i = a; i <= b; i++) {
    sum += i;
}

console.log(`Сума чисел від ${a} до ${b} дорівнює: ${sum}`);


let num1 = parseInt(prompt("Введіть перше число:"));
let num2 = parseInt(prompt("Введіть друге число:"));

const gcd = (a, b) => {
    while (b !== 0) {
        if (a > b) {
            a = a - b;
        } else {
            b = b - a;
        }
    }
    return a;
}

let result = gcd(num1, num2);
console.log(`Найбільший спільний дільник чисел ${num1} і ${num2}: ${result}`);

let number1 = parseInt(prompt("Введіть число:"));
let divisors = [];

for (let i = 1; i <= number1; i++) {
    if (number1 % i === 0) {
        divisors.push(i);
    }
}

console.log(`Дільники числа ${number1}: ${divisors.join(", ")}`);

let number2 = prompt("Введіть число:");
let Count = number2.length;

if (number2[0] === '-') {
    Count--;
}

console.log(`Кількість цифр у числі ${number2}: ${Count}`);


let positiveCount = 0, negativeCount = 0, zeroCount = 0;
let evenCount = 0, oddCount = 0;

for (let i = 0; i < 10; i++) {
    let num = parseFloat(prompt(`Введіть число ${i + 1}:`));

    if (num > 0) positiveCount++;
    else if (num < 0) negativeCount++;
    else zeroCount++;

    if (num % 2 === 0) evenCount++;
    else oddCount++;
}

console.log(`Додатних чисел: ${positiveCount}`);
console.log(`Від'ємних чисел: ${negativeCount}`);
console.log(`Нулів: ${zeroCount}`);
console.log(`Парних чисел: ${evenCount}`);
console.log(`Непарних чисел: ${oddCount}`);


do {
    let num3 = parseFloat(prompt("Введіть перше число:"));
    let num4 = parseFloat(prompt("Введіть друге число:"));
    let operator = prompt("Введіть операцію (+, -, *, /):");
    let result;

    switch (operator) {
        case '+':
            result = num3 + num4;
            break;
        case '-':
            result = num3 - num4;
            break;
        case '*':
            result = num3 * num4;
            break;
        case '/':
            result = num3 / num4;
            break;
        default:
            console.log("Невірний оператор!");
            continue;
    }

    console.log(`Результат: ${num3} ${operator} ${num4} = ${result}`);
} while (confirm("Хочете розв’язати ще один приклад?"));


let number3 = prompt("Введіть число:");
let shift = parseInt(prompt("На скільки цифр змістити?"));

shift = shift % number3.length;

let shiftedNumber = number3.slice(shift) + number3.slice(0, shift);
console.log(`Результат зміщення: ${shiftedNumber}`);