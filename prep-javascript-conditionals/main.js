/* Your JS goes in this file */
const age = 27;

function isAdult(age) {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
}
console.log(isAdult(age));

const student1Score = 55;

function didStudentPass(score) {
  if (score >= 70) {
    return true;
  } else {
    return false;
  }
}
console.log(didStudentPass(student1Score));

const student2Score = 75;

function gradeCalculator(score) {
  if (score < 60) {
    return 'F';
  } else if (score < 70) {
    return 'D';
  } else if (score < 80) {
    return 'C';
  } else if (score < 90) {
    return 'B';
  } else if (score < 100) {
    return 'A';
  } else {
    return 'A++';
  }
}
console.log(gradeCalculator(student2Score));

const season = 'Winter';

function seasonMessenger(season) {
  if (season === 'Summer') {
    return 'Its a hot day';
  } else if (season === 'Spring') {
    return 'The flowers are blooming';
  } else if (season === 'Autumn') {
    return 'The leaves are changing colors';
  } else if (season === 'Winter') {
    return 'its cold today';
  } else {
    return 'please enter a valid season';
  }
}
console.log(seasonMessenger(season));

const dayOfTheWeek = 'Monday';

function dayDetector(dayOfTheWeek) {
  if (dayOfTheWeek === 'Saturday' || dayOfTheWeek === 'Sunday') {
    return 'Have a good weekend!';
  } else {
    return 'Its a weekday!';
  }
}
console.log(dayDetector(dayOfTheWeek));
