{% assign base = section.topic %}
{% assign code = base | append: "/" | append: section.slug | append: ".html" %}
{% assign id = base | append: "-" | append: section.slug %}

<div class="section" id="{{ id }}">
<div class="col">
  {{ section.content }}
</div>
{% capture fileExists %}{% file_exists {{ "_includes/" | append: code }} %}{% endcapture %}
{% if fileExists=="true" %}
  <div class="col">
  {% highlight html %}{% include {{ code }} %}{% endhighlight %}
  </div>
{% endif %}
</div>