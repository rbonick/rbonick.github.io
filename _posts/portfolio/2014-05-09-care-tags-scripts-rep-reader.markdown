---
layout: portfolio-section
title:  "Rep Reader"
date:   2014-05-09 10:23:50
categories: portfolio
depth: 1
parent: "Care-tags Scripts"
description: "Reads a user's reputation, and displays a graph of who has given them reputation."
language: python
---

## Rep Reader
###### The **RepReader** class handles retrieval of the actual stats, and returns them in a format that is very simple to display.

#### RepReader.receivedrep
* Logs in using [Requests](http://docs.python-requests.org/en/latest/), so that the script is able to visit the user's reputation page. 
* Parses this page for the overall number of reputation, then visits each page (as determined by the overall number and knowledge of how many are on each page). 
    * For each page, reads in who gave the rep and whether it was positive or negative. 
* Returns a list of [username, positive rep given, negative rep given]

#### RepReader.mostrepped
* Logs in using [Requests](http://docs.python-requests.org/en/latest/), so that the script is able to visit the user's reputation page. 
* Parses this page for the overall number of reputation, then visits each page (as determined by the overall number and knowledge of how many are on each page). 
    * For each page, reads in the post number and the reputation given.
* Finds the post number with the highest net reputation
* Goes to that post and stores the post text.
* Returns a dictionary containing:
    * *posttext* = The text for the highest post, as saved earlier
    * *netrep* = The net reputation for the highest post
    * *url* = The url for the highest post