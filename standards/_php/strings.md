---
order: 70
---

### Strings

Use single and double quotes when appropriate. If you’re not evaluating anything in the string, use single quotes. You should almost never have to escape quotes in a string, because you can just alternate your quoting style.

Text that goes into attributes in Wordpress should be run through `esc_attr()` so that single or double quotes do not end the attribute value and invalidate the HTML and cause a security issue. See [Data Validation](http://codex.wordpress.org/Data_Validation) in the Codex for further details.