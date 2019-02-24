---
layout: default
---

{::options parse_block_html="true" /}

{% comment %}
  TODO: Update to HTML for nesting
{% endcomment %}

{% assign collections = site.collections | sort: "order" %}
{% for collection in collections %}
{% if collection.label != 'posts' %}
{% assign topic = collection.label %}
{: .heading #{{ topic }}}
## {{ topic }}
{% assign sections = site.[topic] | sort: "order" %}
{% for section in sections %}
  {% assign layout = "sections/" | append: section.language | append: ".md" %}
  {% include {{ layout }} folder=section.language %}
{% endfor %}
{% endif %}
{% endfor %}