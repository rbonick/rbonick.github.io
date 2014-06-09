---
layout: portfolio-section
title:  "Top Posts"
date:   2014-05-09 10:23:50
categories: portfolio
depth: 1
parent: "Care-tags Scripts"
description: "Finds the top posts (as judged by reputation) and posters across the entire forum."
language: python
---

## Top Posts
The Top Posts subfolder contains scripts that parse the site and pull the top users for several different sorting categories, as well as top posts for the site. The top posts for the site are sorted into two sections, one for the "Best of WAYWT" [What Are You Wearing Today?] thread and the other for all other threads.

The main.py file calls all the scripts listed below and outputs the results to a text file in a format suitable for a care-tags forum post (to display the current results at a regular basis).

--------------------
#### TopPosts
###### The **TopPosts** class handles retrieval of the top posts (as sorted by reputation). It makes a distinction between the WAYWT thread and the rest of the threads, and returns a list of tuples containing the post url, poster, and the post's reputation. There are a few helper functions as well that trawl the site for all sub-forums, all threads, and all posts for a particular thread.

#### TopPosts.gettopposts
Utilizes the helper functions to retrieve all threads and parse them in order to populate a sorted (by reputation) list of posts, then returns the requested number of highest repped posts. It has an exclusion list so that it does not read the WAYWT thread for this function.

#### TopPosts.gettopwaywt
Utilizes the helper function to retrieve all WAYWT posts in the Best of WAYWT thread and put them into a sorted list of tuples containing the post url, poster, and the post's reputation. The requested number of highest posts is then returned. It is (currently) specific to the Best of WAYWT thread.

--------------------
#### TopMembers
###### The **TopMembers** class handles retrieval of top users under various sorting methods, and returns an parameter-specified list of users.

#### TopMembers.\_\_populate\_list
While a helper function, this does the bulk of the work for all the public facing functions. When called, it first checks to see if it has already ran, and if so simply returns. Otherwise, it parses the members pages and stores the results in a list of dictionaries containing each user's username, post count, reputation, and reputation per post.
