---
title: "Publications"
layout: gridlay
sitemap: false
permalink: /publications/
years: [2016, 2017, 2018, 2019, 2020, 2021]
---

<!-- <style>
.jumbotron{
    padding:3%;
    padding-bottom:10px;
    padding-top:10px;
    margin-top:10px;
    margin-bottom:30px;
}
</style> -->

<!-- <div class="jumbotron"> -->
## Publications

{% for member in site.data.pi %}

You can also check my
<a href="{{ member.orcid }}" target="_blank"> <i class="ai ai-orcid ai-1x"></i> ORCID</a>,
<a href="{{ member.scholar }}" target="_blank"> <i class="ai ai-google-scholar ai-1x"></i> Google Scholar</a>, and
<a href="{{ member.dblp }}" target="_blank"> <i class="ai ai-dblp ai-1x"></i> dblp</a> profiles.

{% endfor %}

<!-- Jump to: - [Preprints](#preprints) - [Journal articles](#journal-articles) - [Conference proceedings](#conference-proceedings) -->
<!-- </div> -->

<style>
    pre {
        white-space: pre-wrap;
        white-space: -moz-pre-wrap;
        white-space: -pre-wrap;
        white-space: -o-pre-wrap;
        word-wrap: break-word;
        width: 100%;
        overflow-x: auto;
    }
</style>
<script src="{{ "/assets/js/publications.js" | relative_url }}"></script>

<div class="jumbotron">
### Preprints
{% bibliography --query @unpublished %}
</div>

<div class="jumbotron">
### Journal articles
{% bibliography --query @article %}
</div>

<div class="jumbotron">
### Conference proceedings
{% bibliography --query @inproceedings %}
</div>

<div class="jumbotron">
### Theses
{% bibliography --query @phdthesis %}
</div>
