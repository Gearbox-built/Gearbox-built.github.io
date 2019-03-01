// STRINGS
this.reviewScore = 9;

// Bad
const totalScore = this.reviewScore + '';

// Good
const totalScore = String(this.reviewScore);

// NUMBERS
const inputValue = '4';

// Bad
const val = new Number(inputValue);
const val = +inputValue;
const val = inputValue >> 0;
const val = parseInt(inputValue);

// Good
const val = Number(inputValue);
const val = parseInt(inputValue, 10);

// BOOLEANS
const age = 0;

// Bad
const hasAge = new Boolean(age);

// Good
const hasAge = Boolean(age);
const hasAge = !!age;