---
layout: layout.njk
collection: posts
eleventyExcludeFromCollections: true
---

<h1>Posts</h1>

<ul>
{% for post in collections[collection] %}
<li>
    <a href={{post.url}}>
        <h2>{{post.data.title}}</h2>
        <span class=date><span class=label>Published: </span>{{post.date | date}}</span>
    </a>
</li>
{% endfor %}
</ul>