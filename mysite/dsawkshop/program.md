---
layout: default
title: Program
permalink: /program/
klasa: program
menu: 2
---

##Talks Programme

Talks Programme, June 18th to 19th, 2015

<table>
  <tbody>
  {% for wyklad in site.data.program %}
    <tr>
    <td>{% if wyklad.time %}{{ wyklad.time }}{% elsif wyklad.session %}<span style="font-size:18px; line-height:3">{{ wyklad.session }}</span>{% endif %}</td>
    <td>{% if wyklad.presenters %}<b>{{ wyklad.presenters }}</b> – {% endif %}{{ wyklad.description }}</td>
    </tr>
  {% endfor %}
  </tbody>
</table>