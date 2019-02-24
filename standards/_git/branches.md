---
order: 40
---

### Branches and Pull Requests

**Never commit directly to master.** Instead, create small branches for each and every topic you work on (such as a feature or bug fix), and create a pull request into master when the branch is complete.

_The exception to this rule is [version commits and tags](#git-tagging)._

#### Naming

* Name branches as concisely as possible, separated by **underscores**.
* Don't use version numbers

#### Long-Running Branches

If your branch cannot be named as a specific function/feature/bug then you can create a long-running branch with a name like `multiple_fixes`.

When using this method, it's important that the commits are _clear_ and minimal (see [Commits](#git-comments)).