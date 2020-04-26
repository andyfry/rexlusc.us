---
title: Rex Luscus's Files
date: 2019-07-29
layout: layout.njk
---

![D&D Logo](/images/Dnd_Bug.png#small "D&D Logo")
# To Hell ... and Back?
<ul>
{% for entry in ToHell %}
<li>
    <a href="/files/ToHell{{entry.version}}.pdf">Version {{entry.version}}</a>
</li>
{% endfor %}
</ul>
