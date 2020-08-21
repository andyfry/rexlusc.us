---
title: Rex Luscus's Home
date: 2019-07-29
layout: layout.njk
---


<h1>Posts</h1>
<ul>
{% for post in collections['posts'] %}
<li>
    <a href={{post.url}}>
        <h2>{{post.data.title}}</h2>
        <span class=date><span class=label>Published: </span>{{post.date | date}}</span>
    </a>
</li>
{% endfor %}
</ul>


<h1>Campaign Files</h1>
<ul>
    <li><a href="/files/ToHellv22.0.pdf">To Hell ... and Back?</a></li>
</ul>