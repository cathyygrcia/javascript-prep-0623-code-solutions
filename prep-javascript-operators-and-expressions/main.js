const number1 = 3;
const number2 = 5;
const product = number1 * number2;
console.log('Value of product:', product);
console.log('Type of product:', typeof product);

const charge = 6;
const payment = 2;
const amountRemaining = charge - payment;
console.log('Value of amountRemainig:', amountRemaining);
console.log('Type of amountRemainig:', typeof amountRemaining);

const tests = 4;
const assignments = 7;
const final = 1;
const grade = tests + assignments + final / 3;
console.log('Value of grade:', grade);
console.log('Type of grade:', typeof grade);

const firstName = 'Cathy';
const lastName = 'Garcia';
const fullName = firstName + ' ' + lastName;
console.log('Value of fullName:', fullName);
console.log('Type of fullName:', typeof fullName);

const pH = 5;
const isAcidic = pH < 7;
console.log('Value of isAcidic:', isAcidic);
console.log('Type of isAcidic:', typeof isAcidic);

const numberOfSoldiers = 100;
const isSparta = numberOfSoldiers === 300;
console.log('Value of isSparta:', isSparta);
console.log('Type of isSparta:', typeof isSparta);

let nickName = fullName;
nickName = nickName += ' is the GOAT';
console.log('Value of nickName:', nickName);
console.log('Type of nickName:', typeof nickName);
