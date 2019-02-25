// Bad
const items = new Array();

// Good
const items = [];

// Bad
items[items.length] = 'abracadabra';

// Good
items.push('abracadabra');

// Bad
const len = items.length;
const itemsCopy = [];
let i;

for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}

// Good
const itemsCopy = [...items];

// Good
const foo = document.querySelectorAll('.foo');
const nodes = Array.from(foo);