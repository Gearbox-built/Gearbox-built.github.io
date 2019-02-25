---
order: 110
---

### Functions

* Use function declarations instead of function expressions.
  * Function declarations are named, so they're easier to identify in call stacks. Also, the whole body of a function declaration is hoisted, whereas only the reference of a function expression is hoisted. This rule makes it possible to always use Arrow Functions in place of function expressions.
* Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead. Browsers will allow you to do it, but they all interpret it differently.
* When you must use function expressions (as when passing an anonymous function), use arrow function notation. It creates a version of the function that executes in the context of `this`, which is usually what you want, and is a more concise syntax.
* If the function body fits on one line and there is only a single argument, feel free to omit the braces and parentheses, and use the implicit return.