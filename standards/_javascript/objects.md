---
order: 130
---

### Objects

* Use the literal syntax for object creation.
* Don't use [reserved words](http://es5.github.io/#x7.6.1) as keys. It won't work in IE8\. ([More info](https://github.com/airbnb/javascript/issues/61)). Use readable synonyms instead.
* Use computed property names when creating objects with dynamic property names. They allow you to define all the properties of an object in one place.
* Use object method shorthand.
* Use property value shorthand. Group your shorthand properties at the beginning of your object declaration.
* Use dot notation when accessing properties. Use subscript notation [] when accessing properties with a variable.