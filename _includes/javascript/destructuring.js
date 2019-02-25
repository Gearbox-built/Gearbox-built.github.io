// ARRAY DESTRUCTURING
const arr = [1, 2, 3, 4];

// Bad
const first = arr[0];
const second = arr[1];

// Good
const [first, second] = arr;


// OBJECT DESTRUCTURING
// Bad
function getFullName(user) {
  const firstName = user.firstName;
  const lastName = user.lastName;

  return `${firstName} ${lastName}`;
}

// Good
function getFullName(obj) {
  const { firstName, lastName } = obj;
  return `${firstName} ${lastName}`;
}

// Best
function getFullName({ firstName, lastName }) {
  return `${firstName} ${lastName}`;
}


// MULTIPLE RETURN VALUES
// Bad
function processInput(input) {
  return [left, right, top, bottom];
}

// the caller needs to think about the order of return data
const [left, __, top] = processInput(input);

// Good
function processInput(input) {
  return { left, right, top, bottom };
}

// the caller selects only the data they need
const { left, right } = processInput(input);