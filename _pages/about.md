---
title: "About"
layout: gridlay
sitemap: false
permalink: /about/
---

## About

{% for member in site.data.pi %}
<div class="jumbotron">
<div class="row">
<div class="col-lg-4" style="text-align: center;">
  <img src="{{ site.url }}{{ site.baseurl }}/images/{{ member.photo }}" width="100%" style="max-width:300px"/>
</div>
<div class="col-lg-8 col-sm-8 col-xs-12">
  <h3>{{ member.name }}</h3>
  <h4><i>{{ member.info }}</i></h4>

  {% if member.email %}<a href="mailto:{{ member.email }}" target="_blank"><i class="fa fa-envelope-square fa-3x"></i></a> {% endif %}
  <!-- {% if member.cv %}<a href="{{ site.url }}{{ site.baseurl }}/{{ member.cv }}" target="_blank"><i class="ai ai-cv-square ai-3x"></i></a> {% endif %} -->
  {% if member.linkedin %} <a href="{{ member.linkedin }}" target="_blank"><i class="fa fa-linkedin-square fa-3x"></i></a> {% endif %}
  {% if member.scholar %} <a href="{{ member.scholar }}" target="_blank"><i class="ai ai-google-scholar-square ai-3x"></i></a> {% endif %}
  {% if member.orcid %} <a href="{{ member.orcid }}" target="_blank"><i class="ai ai-orcid-square ai-3x"></i></a> {% endif %}
  {% if member.dblp %} <a href="{{ member.dblp }}" target="_blank"><i class="ai ai-dblp-square ai-3x"></i></a> {% endif %}
  {% if member.semantic %} <a href="{{ member.semantic }}" target="_blank"><i class="ai ai-semantic-scholar-square ai-3x"></i></a> {% endif %}
  {% if member.github %} <a href="{{ member.github }}" target="_blank"><i class="fa fa-github-square fa-3x"></i></a> {% endif %}
  <!-- {% if member.researchgate %} <a href="{{ member.researchgate }}" target="_blank"><i class="ai ai-researchgate-square ai-3x"></i></a> {% endif %} -->


  <ul style="overflow: hidden">
  {% if member.number_educ == 1 %}
  <li> {{ member.education1 | replace: "-","&#8211;"}} </li>
  {% endif %}
  {% if member.number_educ == 2 %}
  <li> {{ member.education1 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education2 | replace: "-","&#8211;"}} </li>
  {% endif %}
  {% if member.number_educ == 3 %}
  <li> {{ member.education1 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education2 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education3 | replace: "-","&#8211;"}} </li>
  {% endif %}
  {% if member.number_educ == 4 %}
  <li> {{ member.education1 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education2 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education3 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education4 | replace: "-","&#8211;"}} </li>
  {% endif %}
  {% if member.number_educ == 5 %}
  <li> {{ member.education1 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education2 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education3 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education4 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education5 | replace: "-","&#8211;"}} </li>
  {% endif %}
  {% if member.number_educ == 6 %}
  <li> {{ member.education1 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education2 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education3 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education4 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education5 | replace: "-","&#8211;"}} </li>
  <li> {{ member.education6 | replace: "-","&#8211;"}} </li>
  {% endif %}
  </ul>
</div>
</div>
</div>
{% endfor %}

<div class="jumbotron">
### Short Bio

I am assistant professor at <a href="https://urv.cat" target="_blank">Universitat Rovira i Virgili</a> (Tarragona, Spain) in the Department of Computer Engineering and Mathematics (DEIM).
<!-- I am a researcher at <a href="https://bsc.es">Barcelona Supercomputing Center</a> (Barcelona, Spain) in the Department of Computer Sciences and the Data-Centric Computing team. -->

My research interests span all aspects of distributed systems, software architectures, and middleware.
My focus goes deeply into large-scale applications and cloud computing services, including data analytics and machine learning.
I'm always looking for new ways to make the cloud easy.
I believe the cloud should hide all the pain of managing complex systems and let users play with simple lego blocks, like if they were in their homes tinkling with their laptop.
But that laptop has the power of a supercomputer.

I received my Ph.D. in 2022 with an International Distinction at <a href="https://urv.cat" target="_blank">URV</a> in the Computer Science and Mathematics of Security programme.
During my Ph.D., I joined IBM Research Europe (Zurich, Switzerland).
I also worked as a postdoctoral researcher at <a href="https://bsc.es" target="_blank">Barcelona Supercomputing Center</a> (Barcelona, Spain) in the Department of Computer Sciences and the Data-Centric Computing team.
I obtained my B.S. in Computer Engineering at URV in 2017 and a M.S. in Computational Engineering and Mathematics at <a href="https://www.uoc.edu/" target="_blank">UOC</a> in 2018.
I've been involved with research since 2016, when I joined the <a href="https://cloudlab.urv.cat" target="_blank">CloudLab</a> research group at URV.
<!-- At the university, I've assisted teaching Advanced Programming Techniques and Distributed Systems. -->

</div>


<div class="jumbotron">
### Experience

- (Jun 2025 - Present) **Assistant Professor** @ Universitat Rovira i Virgili (DEIM)
- (Oct 2024 - May 2025) **Researcher** @ Barcelona Supercomputing Center (Data-Centric Computing)
- (Dec 2022 - Sep 2024) **Researcher** @ Universitat Rovira i Virgili (CloudLab)
- (Mar 2022 - May 2022) **PhD Internship** @ IBM Research (Zurich)
- (Oct 2018 - Dec 2022) **PhD Candidate** @ Universitat Rovira i Virgili (CloudLab)
- (Apr 2016 - Sep 2018) **Research Assistant** @ Universitat Rovira i Virgili (CloudLab)

</div>



{% if site.data.grants %}
<div class="jumbotron">
### Grants
<ul>
{% for grant in site.data.grants %}
 <li> {{ grant.name }} </li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if site.data.awards %}
<div class="jumbotron">
### Awards
<ul>
{% for award in site.data.awards %}
 <li> {{ award.name | replace: "-","&#8211;"}} </li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if site.data.people %}
<div class="jumbotron">
### Students and mentoring
<ul>
{% for student in site.data.people %}
 <li> {{ student.name }}, {{student.location}} ({{student.degree}}, {{student.year}}) </li>
{% endfor %}
</ul>
</div>
{% endif %}

{% if site.data.funders %}
<div class="jumbotron">
  <h4>Sponsors</h4>
  <div style='display:block; text-align:center; margin-left:auto; margin-right:auto;'>
 {% for funder in site.data.funders %}<a href="{{ funder.url }}" target="_blank"><img src='{{ site.url }}{{ site.baseurl }}/images/{{ funder.image }}' style='max-height: 80px; max-width: 200px; margin: 1%'/></a>{% endfor %}
  </div>
</div>
{% endif %}
