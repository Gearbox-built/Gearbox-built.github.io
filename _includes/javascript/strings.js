// Bad
const name = "Capt. Janeway";

// Good
const name = 'Capt. Janeway';

// Bad
function sayHi(name) {
  return 'How are you, ' + name + '?';
}

// Bad
function sayHi(name) {
  return ['How are you, ', name, '?'].join();
}

// Good
function sayHi(name) {
  return `How are you, ${name}?`;
}