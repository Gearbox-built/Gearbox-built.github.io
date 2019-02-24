---
order: 50
---

### Commits

Please read Stephen Ball’s Steel City Ruby 2013 presentation, [Deliberate Git](http://rakeroutes.com/blog/deliberate-git/). It covers this topic very well.

Once you’ve read it, you’ll understand why you should:

* Commit small changes frequently. Only you see your local commits, so `WIP` is fine.
* Rebase local commits before pushing & pull requesting.
* Write commit subjects in the present tense and as a command.
* Describe what the code _change_ does, not what the code does.
* Explain why the change is necessary.
* Mention alternatives you considered and potential consequences of your solution.

When writing commits:

* Start with a capitalized word
* Wrap at 70 characters (tell your editor to do this for you)
* Spell correctly (optionally, install a precommit spell-checker hook)
* Include blank lines after the first line and between paragraphs in multi-line messages