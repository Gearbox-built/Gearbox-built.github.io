---
order: 140
---

### Classes

* Always use `class`. Avoid manipulating `prototype` directly.
* Use `extends` for inheritance. It is a built-in way to inherit prototype functionality without breaking `instanceof`.
* It's okay to write a custom `toString()` method, just make sure it works successfully and causes no side effects.
* Accessor functions for properties are not required.
  * If you do make accessor functions use `getVal()` and `setVal('hello')`.
  * If the property is a boolean, use `isVal()` or `hasVal()`.
  * It's okay to create `get()` and `set()` functions, but be consistent.