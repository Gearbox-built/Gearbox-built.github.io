### Merging

So your pull request has been peer-reviewed and approved – nice work! Now it's time to merge your changes into master.

You want to use a fast-forward merge (`git merge --ff-only`). Merging this way prevents "merge bubbles" where commit messages are created that say that a branch has been merged. This is called a recursive merge and it muddies up the commit history.