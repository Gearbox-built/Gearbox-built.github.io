---
order: 20
---

### Blade Syntax

* Use soft tabs with two spaces
* For layouts that differ greatly from standard pages (landing pages etc.), create a new layout in the `/resources/views/layouts` directory and reference it using the Blade `@extends` directive.
* Avoid using PHP in blade templates wherever possible. While there is a `@php` directive available it is preferred to do one of the following:
  1. Add a method to the relevant controller for post type functionality
  2. Create a custom blade directive referencing a helper function for code patterns that are frequently reused.
* Create smaller template partials for any discrete sections of the website. This helps keep things DRY and makes the project easier to navigate.