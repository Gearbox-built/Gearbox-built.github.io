### @include vs @extend

First, some basics:

* The **@extend** directive tells Sass that one selector should inherit the styles of another selector.
* The **@include** directive takes the name of a mixin and optionally arguments to pass to it, and includes the styles defined by that mixin into the current rule.

#### When to use @extend

This should be your first plan of attack. Using an @extend limits customizability but produces a more efficient CSS file. Smaller is better.

#### When to use @include

If you need to overwrite declarations of an @extend or need to pass values to it then you'll want to set up a mixin and use @include instead. Mixins are powerful and are generally used to accomplish complicated or labor-intensive tasks. Some examples:

* wrapping content in another class / query (IE, retina, etc)
* [placeholders](http://bourbon.io/docs/#placeholder)
* avoiding browser prefixes new CSS3 properties, such as:
    * [animations](http://bourbon.io/docs/#animation)
    * [transitions](http://bourbon.io/docs/#transitions)
    * [flexbox](http://bourbon.io/docs/#flexbox)