# Code Guide

Code Guide is a project for documenting standards for developing flexible, durable, and sustainable HTML and CSS. It comes from years of experience writing code on projects of all sizes. It's not the end-all be-all, but it's a start.

**[Start reading ☞](http://mdo.github.io/code-guide)**

---

## Prerequisites

### Jekyll

We use Jekyll for the site build process. Thus, Jekyll must be installed globally to make changes.

#### Why Jekyll build instead of [GitHub Pages](https://help.github.com/en/articles/using-jekyll-as-a-static-site-generator-with-github-pages) build?

GitHub Pages does not support the use of third-party/custom Jekyll plugins. We leverage a `file_exists` plugin to allow our site build to maintain some amount of magic under the hood.

#### Install Jekyll

https://jekyllrb.com/docs/installation/

## Build & Deploy

Before your changes can be reflected and deployed, you must rebuild using Jekyll:

#### Switch to master
```
git checkout master
git pull origin master
```

#### Build
```
jekyll build
```

#### Deploy
```
git add -A
git commit -am "Compiled!"
git push origin master
```

## License

Released under MIT by, and copyright 2014, @mdo.

## Thanks

Heavily inspired by [Idiomatic CSS](https://github.com/necolas/idiomatic-css) and the [GitHub Styleguide](http://github.com/styleguide).

:heart:
