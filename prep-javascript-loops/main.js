// create your loops here.
function whileLoop1() {
  const newArray = [];
  let n = 0;
  while (n < 10) {
    newArray.push(n);
    n++;
  }
  return newArray;
}
console.log('whileLoop1 output:', whileLoop1());

function whileLoop2() {
  const newArray = [];
  let n = 0;

  while (n < 20) {
    newArray.push(n);
    n += 2;
  }
  return newArray;
}
console.log('whileLoop2 output:', whileLoop2());

function forLoop1() {
  const newArray = [];
  for (let i = 0; i < 10; i++) {
    newArray.push(i);
  }
  return newArray;
}
console.log('forLoop1 output:', forLoop1());

function forLoop2() {
  for (let i = 100; i > 0; i--) {
    console.log('Time till explosion:', i);
  }
}
console.log(forLoop2());

function forInLoop1(object) {
  const propertyNames = [];

  for (const key in object) {
    propertyNames.push(key);
  }
  return propertyNames;
}
const exampleObject = {
  name: 'Cathy',
  age: 27,
  profession: 'Software Engineer',
};
console.log('forInLoop1 output:', forInLoop1(exampleObject));

function forInLoop2(object) {
  const newArray = [];
  for (const prop in object) {
    newArray.push(object[prop]);
  }
  return newArray;
}
console.log('forInLoop2 output:', forInLoop2(exampleObject));
