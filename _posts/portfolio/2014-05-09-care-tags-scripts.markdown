---
layout: portfolio-section
title:  "Care-tags Scripts"
date:   2014-05-09 10:23:50
categories: portfolio
depth: 0
description: "A collection of scripts for scraping data from care-tags.org, a PHPBB forum."
language: python
---
## Care-tags Scripts

A collection of **Python** scripts focusing on scraping data off [care-tags.org](http://care-tags.org/index.php), an online forum. It's open source and available on [GitHub](https://github.com/rjbman/care-tags_scripts). Both utilize the [Beautiful Soup](http://www.crummy.com/software/BeautifulSoup/) and [Requests](http://docs.python-requests.org/en/latest/) libraries.

{% for post in site.posts %}
{% if post.categories contains 'portfolio' and post.depth == 1 and post.parent == "Care-tags Scripts" %}
### [{{ post.title }}]({{ post.url }})
{{ post.description }}
{% endif %}
{% endfor %} 

### [Top Posts]() 
<!--TODO: Make top posts page-->
Finds the top posts (as judged by reputation) and posters across the entire forum.
