---
acknowlegement: We thank Tae-Hyun Oh for his insightful suggestions and constructive feedback on Krylov subspace methods. We also thank all reviewers for their comments. We thank Buttercup Foshey (and Michael Foshey) for her emotional support during this work. This work is supported by the Intelligence Advanced Research Projects Activity under grant 2019-19020100001, the Defense Advanced Research Projects Agency under grant N66001-15-C-4030, and the National Science Foundation under grant CMMI-1644558.
authors: Pingchuan Ma*, Tao Du*, Wojciech Matusik
featured_image: assets/images/cpmtl.png
layout: publication
project_website: http://cpmtl.csail.mit.edu/
publication: ICML
publication_link: https://arxiv.org/abs/2006.16434
title: Efficient Continuous Pareto Exploration in Multi-Task Learning
date: 2020-06-30 12:00:00 -0700
---

Tasks in multi-task learning often correlate, conflict, or even compete with each other. As a result, a single solution that is optimal for all tasks rarely exists. Recent papers introduced the concept of Pareto optimality to this field and directly cast multi-task learning as multi-objective optimization problems, but solutions returned by existing methods are typically finite, sparse, and discrete. We present a novel, efficient method that generates locally continuous Pareto sets and Pareto fronts, which opens up the possibility of continuous analysis of Pareto optimal solutions in machine learning problems. We scale up theoretical results in multi-objective optimization to modern machine learning problems by proposing a sample-based sparse linear system, for which standard Hessian-free solvers in machine learning can be applied. We compare our method to the stateof-the-art algorithms and demonstrate its usage of analyzing local Pareto sets on various multitask classification and regression problems. The experimental results confirm that our algorithm reveals the primary directions in local Pareto sets for trade-off balancing, finds more solutions with different trade-offs efficiently, and scales well to tasks with millions of parameters.
