if ([0]) {
  // true
  // An array is an object, objects evaluate to true
}

// Bad
if (name !== '') {
  // ...stuff...
}

// Good
if (name) {
  // ...stuff...
}

// Bad
if (collection.length > 0) {
  // ...stuff...
}

// Good
if (collection.length) {
  // ...stuff...
}