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

// Bad
const val = +inputValue;

// Bad
const val = inputValue >> 0;

// Bad
const val = parseInt(inputValue);

// Good
const val = Number(inputValue);

// Good
const val = parseInt(inputValue, 10);


// BOOLEANS
const age = 0;

// Bad
const hasAge = new Boolean(age);

// Good
const hasAge = Boolean(age);

// Good
const hasAge = !!age;