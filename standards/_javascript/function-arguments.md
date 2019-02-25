---
order: 120
---

### Function Arguments

* Never name a parameter `arguments`. This will take precedence over the `arguments` object that is given to every function scope.
* Never use `arguments`, opt to use rest syntax `...` instead.
* Use default parameter syntax rather than mutating function arguments.
* Use `Object#assign` or `jQuery#extend` to set default object values.