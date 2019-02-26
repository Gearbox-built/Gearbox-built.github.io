---
order: 90
---

### Regular Expressions

Perl compatible regular expressions ([PCRE](http://php.net/pcre), `preg_` functions) should be used in preference to their POSIX counterparts. Never use the `/e` switch, use `preg_replace_callback` instead.

It’s most convenient to use single-quoted strings for regular expressions since, contrary to double-quoted strings, they have only two metasequences: `\'` and `\\`.