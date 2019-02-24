{% assign base = section.topic %}
{% assign code = base | append: "/" | append: section.slug | append: ".php" %}
{% assign id = base | append: "-" | append: section.slug %}

<div class="section" id="{{ id }}">
<div class="col">
  {{ section.content }}
</div>
{% capture fileExists %}{% file_exists {{ "_includes/" | append: code }} %}{% endcapture %}
{% if fileExists=="true" %}
  <div class="col">
  {% highlight php %}{% include {{ code }} %}{% endhighlight %}
  </div>
{% endif %}
</div>