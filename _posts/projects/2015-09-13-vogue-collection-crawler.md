---
layout: projects
title:  "Vogue.com Collection Crawler"
image: /images/projects/vogue.png
categories: projects
description: "A script that goes through a vogue.com fashion collection slideshow and pulls all the slideshow image urls."
language: python
---
Created a short script built with [Beautiful Soup](http://www.crummy.com/software/BeautifulSoup/) and
[Requests](http://docs.python-requests.org/en/latest/) libraries. Iterates through [vogue.com](http://www.vogue.com/)
(formerly style.com) fashion collections and pulls all collection images into a list of urls for each of the images,
intended for use uploading to imgur or similar hosting services.

There is a branch called "auto-imgur-upload" that automates that step and instead prints out a link to the imgur album
created off the collection. It wasn't merged in based on conversations with some primary users.

###### [Available on Github](https://github.com/rbonick/vogue-dot-com-collection-crawler)