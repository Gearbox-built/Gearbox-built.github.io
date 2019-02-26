---
order: 100
---

### Argument Flag Values

Prefer string values to just `true` and `false` when calling functions.

Since PHP doesn’t support named arguments, the values of the flags are meaningless, and each time we come across a function call like the examples above, we have to search for the function definition. The code can be made more readable by using descriptive string values, instead of booleans.