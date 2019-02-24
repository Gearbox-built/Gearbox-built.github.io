---
order: 20
---

### Selectors

* Use classes over generic element tag for optimum rendering performance.
* Prefer descriptive class names to descendent selectors.
* Avoid using several attribute selectors (e.g., `[class^="..."]`) on commonly occuring components. Browser performance is known to be impacted by these.
* Keep selectors short and strive to limit the number of elements in each selector to three.
* Scope classes to the closest parent **only** when necessary (e.g., when not using prefixed classes).
* **TODO:** Something about BEEEEEEEM

Additional reading:

* [Scope CSS classes with prefixes](http://markdotto.com/2012/02/16/scope-css-classes-with-prefixes/)
* [Stop the cascade](http://markdotto.com/2012/03/02/stop-the-cascade/)