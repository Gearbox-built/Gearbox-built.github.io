{% if include.folder %}
  {% assign base = include.folder %}
{% else %}
  {% assign base = "git" %}
{% endif %}
{% assign standards = "standards/" | append: base | append: "/" | append: include.section | append: ".md" %}
{% assign code = base | append: "/" | append: include.section | append: ".txt" %}
{% assign id = base | append: "-" | append: include.section %}

<div class="section" id="{{ id }}">
<div class="col">
{% include {{ standards }} %}
</div>
{% capture fileExists %}{% file_exists {{ "_includes/" | append: code }} %}{% endcapture %}
{% if fileExists=="true" %}
  <div class="col">
  {% highlight bash %}{% include {{ code }} %}{% endhighlight %}
  </div>
{% endif %}
</div>