// Bad
const foo = function () {
  // ...
};

// Good
function foo() {
  // ...
}

// Bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}

// OK
let test;
if (currentUser) {
  test = () => {
    console.log('Yup.');
  };
}

// Bad
[1, 2, 3].map(function (x) {
  return x * x;
});

// Good
[1, 2, 3].map((x) => {
  return x * x;
});

// Good
[1, 2, 3].map(x => x * x);