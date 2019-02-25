---
order: 20
---

### Variables

* Use `const` for all of your references; avoid using `var`.
* This ensures that you can't reassign your references (mutation), which can lead to bugs and difficult to comprehend code.
* If you must mutate references, use `let` instead of `var`.
* `let` is block-scoped rather than function-scoped like `var`.
* Note that both `let` and `const` are block-scoped.
* Use one `const`/`let` declaration per variable.
* Group all your `const`s and then group all your `let`s.
* This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.