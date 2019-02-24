---
layout: default
---

{::options parse_block_html="true" /}

{% comment %}
<div class="section" id="golden-rule">
  <div class="col">
    <h2>Golden rule</h2>
    <p>Enforce these, or your own, agreed upon guidelines at all times. Small or large, call out what's incorrect. For additions or contributions to this Code Guide, please <a href="https://github.com/mdo/code-guide/issues/new">open an issue on GitHub</a>.</p>
  </div>
  <div class="col">
    <blockquote>
      <p>Every line of code should appear to be written by a single person, no matter the number of contributors.</p>
    </blockquote>
  </div>
</div>
{% endcomment %}



{: .heading #html}
## HTML

{% include sections/html.md section="syntax" %}
{% include sections/html.md section="doctype" %}
{% include sections/html.md section="lang" %}
{% include sections/html.md section="ie-compatibility-mode" %}
{% include sections/html.md section="encoding" %}
{% include sections/html.md section="style-script" %}
{% include sections/html.md section="practicality" %}
{% include sections/html.md section="attribute-order" %}
{% include sections/html.md section="boolean-attributes" %}
{% include sections/html.md section="reducing-markup" %}
{% include sections/html.md section="javascript" %}



{: .heading #css}
## CSS

{% include sections/scss.md section="syntax" %}
{% include sections/scss.md section="selectors" %}
{% include sections/scss.md section="nesting" %}
{% include sections/scss.md section="variables" %}
{% include sections/scss.md section="includes-extends" %}
{% include sections/scss.md section="comments" %}
{% include sections/scss.md section="media-queries" %}
{% include sections/scss.md section="single-declarations" %}
{% include sections/scss.md section="shorthand" %}
{% include sections/scss.md section="classes" %}
{% include sections/scss.md section="organization" %}
{% include sections/scss.md section="maintainability" %}
{% include sections/scss.md section="declaration-order" %}

{% comment %}
{% include sections/html.md section="import" folder="css" %}
{% include sections/scss.md section="prefixed-properties" %}
{% include sections/scss.md section="operators" %}
{% endcomment %}

{% include sections/scss.md section="editor-prefs" %}



{: .heading #liquid}
## Liquid

{% include sections/liquid.md section="intro" %}
{% include sections/liquid.md section="syntax" %}
{% include sections/liquid.md section="whitespace" %}
{% include sections/liquid.md section="variables" %}
{% include sections/liquid.md section="debugging" %}



{: .heading #php}
## PHP

{% include sections/php.md section="intro" %}
{% include sections/php.md section="basics" %}
{% include sections/php.md section="namespace" %}
{% include sections/php.md section="methods" %}
{% include sections/php.md section="control" %}
{% include sections/php.md section="closures" %}



{: .heading #git}
## Git

{% include sections/git.md section="intro" %}
{% include sections/git.md section="repos" %}
{% include sections/git.md section="setup" %}
{% include sections/git.md section="branches" %}
{% include sections/git.md section="commits" %}
{% include sections/git.md section="pushing" %}
{% include sections/git.md section="merging" %}
{% include sections/git.md section="tagging" %}