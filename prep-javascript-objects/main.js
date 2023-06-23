const person = {
  firstName: 'Cathy',
  lastName: 'Garcia',
  hobby: 'Running',
};
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's full name is:", fullName);

person.job = 'Software Engineer';
console.log("The person's current job is:", person.job);

person['previousJob'] = 'Receptionist';
console.log("The person's previous job was:", person['previousJob']);

console.log(person);
