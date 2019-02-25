// Bad
function nope(name, options, arguments) {
  // ...
}

// Good
function yup(name, options, args) {
  // ...
}

// Bad
function concatenateAll() {
  const args = Array.prototype.slice.call(arguments);
  return args.join('');
}

// Good
function concatenateAll(...args) {
  return args.join('');
}

// Bad
function handleThings(options) {
  // No! We shouldn't mutate function arguments.
  // Double bad: if opts is falsy it'll be set to an object which may
  // be what you want but it can introduce subtle bugs.
  this.options = options || {};
  // ...
}

// Good
function handleThings(options = {}) {
  this.options = Object.assign({}, {
    valueA: 'AAA', // defaults
  }, options);
}