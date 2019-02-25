// Bad
a = 1;
var b = 2;
var c = 3,
    d = 4;

if (true) {
  c += 1;
}

// Good
const a = 1;
const b = 2;
let c = 3;
let d = 4;

if (true) {
  c += 1;
}