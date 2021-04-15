---
acknowlegement: We thank the anonymous reviewers for their helpful comments in revising the paper. This work is supported by Intelligence Advanced Research Projects Agency (grantNo. 2019-19020100001),  and Defense Advanced ResearchProjects Agency (grant No. FA8750-20-C-0075).
authors: Jie Xu, Andrew Spielberg, Allan Zhao, Daniela Rus, Wojciech Matusik
featured_image: /assets/images/moghs_teaser.jpg
layout: publication
project_website: http://moghs.csail.mit.edu
publication: ICRA
publication_link: https://people.csail.mit.edu/jiex/papers/MOGHS/paper.pdf
title: Multi-Objective Graph Heuristic Search for Terrestrial Robot Design
date: 2021-04-14 12:00:00 -0700
---

We present methods for co-designing rigid robots over control and morphology (including discrete topology) over multiple objectives.  Previous work has addressed problems in single-objective robot co-design or multi-objective control. However, the joint multi-objective co-design problem is extremely important for generating capable, versatile, algorithmically designed robots. In this work, we present Multi-Objective Graph Heuristic Search, which extends a single-objective graph heuristic search from previous work to enable a highly efficient multi-objective search in a combinatorial design topology space.  Core to this approach, we introduce a new universal, multi-objective heuristic function based on graph neural networks that is able to effectively leverage learned information between different task trade-offs. We demonstrate our approach on six combinations of seven terrestrial locomotion and design tasks, including one three-objective example. We compare the captured Pareto fronts across different methods and demonstrate that our multi-objective graph heuristic search quantitatively and qualitatively outperforms other techniques.