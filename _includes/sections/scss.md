{% if include.folder %}
  {% assign base = include.folder %}
{% else %}
  {% assign base = "css" %}
{% endif %}
{% assign standards = "standards/" | append: base | append: "/" | append: include.section | append: ".md" %}
{% assign code = base | append: "/" | append: include.section | append: ".scss" %}
{% assign id = base | append: "-" | append: include.section %}

<div class="section" id="{{ id }}">
<div class="col">
{% include {{ standards }} %}
</div>
{% capture fileExists %}{% file_exists {{ "_includes/" | append: code }} %}{% endcapture %}
{% if fileExists=="true" %}
  <div class="col">
  {% highlight scss %}{% include {{ code }} %}{% endhighlight %}
  </div>
{% endif %}
</div>