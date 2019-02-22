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

{% include sections/css.md section="syntax" %}
{% include sections/css.md section="declaration-order" %}
{% include sections/html.md section="import" folder="css" %}
{% include sections/css.md section="media-queries" %}
{% include sections/css.md section="prefixed-properties" %}
{% include sections/css.md section="single-declarations" %}
{% include sections/css.md section="shorthand" %}
{% include sections/scss.md section="nesting" %}
{% include sections/scss.md section="operators" %}
{% include sections/css.md section="comments" %}
{% include sections/css.md section="classes" %}
{% include sections/css.md section="selectors" %}
{% include sections/css.md section="organization" %}
{% include sections/css.md section="editor-prefs" %}