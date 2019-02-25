---
order: 30
---

### Comparison Operators & Equality

Use `===` and `!==` over `==` and `!=`.

Conditional statements such as the if statement evaulate their expression using coercion with the `ToBoolean` abstract method and always follow these simple rules:

* Objects evaluate to `true`
* Undefined evaluates to `false`
* Null evaluates to `false`
* Booleans evaluate to the value of the boolean
* Numbers evaluate to false if `+0`, `-0`, or `NaN`, otherwise `true`
* Strings evaluate to false if an empty string `''`, otherwise `true`
* Use shortcuts when possible.