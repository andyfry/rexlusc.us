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


<h1>Campaign: To Hell...and Back?</h1>

{% for entry in ToHell %}
<div class=entry>
    <h2>Session {{entry.session}}</h2>
    <span class=date><span class=label>Date: </span>{{entry.date | date}}</span>
    <a href="/files/ToHell{{entry.version}}.pdf">Download</a>
</div>
{% endfor %}