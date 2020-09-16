---
acknowlegement: 'We are grateful to anonymous reviewers for their valuable feedback. This work was supported by IARPA grant no. 2019-19020100001 and NSF grant no. 1644558. M.K.L. would like to acknowledge support from the Schmidt Science Fellowship.'
authors: Allan Zhao, Jie Xu, Mina Konakovi&cacute; Lukovi&cacute;, Josephine Hughes, Andrew Spielberg, Daniela Rus, Wojciech Matusik
featured_image: /assets/images/robogrammar-rep-image.jpg
layout: publication
show_on_homepage: true
publication: SIGGRAPH Asia
publication_link: /assets/files/robogrammar.pdf
title: 'RoboGrammar: Graph Grammar for Terrain-Optimized Robot Design'
date: 2019-01-01 12:00:00 -0700
---

We present RoboGrammar, a fully automated approach for generating optimized robot structures to traverse given terrains. In this framework, we represent each robot design as a graph, and use a graph grammar to express possible arrangements of physical robot assemblies. Each robot design can then be expressed as a sequence of grammar rules. Using only a small set of rules our grammar can describe hundreds of thousands of possible robot designs. The construction of the grammar limits the design space to designs that can be fabricated. For a given input terrain, the design space is searched to find the top performing robots and their corresponding controllers. We introduce Graph Heuristic Search -- a novel method for efficient search of combinatorial design spaces. In Graph Heuristic Search, we explore the design space while simultaneously learning a function that maps incomplete designs (e.g., nodes in the combinatorial search tree) to the best performance values that can be achieved by expanding these incomplete designs. Graph Heuristic Search prioritizes exploration of the most promising branches of the design space. To test our method we optimize robots for a number of challenging and varied terrains. We demonstrate that RoboGrammar can successfully generate nontrivial robots that are optimized for a single terrain or a combination of terrains.