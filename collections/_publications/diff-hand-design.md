---
acknowlegement: We thank the anonymous reviewers for their helpful comments in revising the paper. Toyota Research Institute (TRI), Defense Advanced Research Projects Agency (FA8750-20-C-0075), and the National Science Foundation (CAREER1846368) provided funds to support this work.
authors: Jie Xu, Tao Chen, Lara Zlokapa, Michael Foshey, Wojciech Matusik, Shinjiro Sueda, Pulkit Agrawal
featured_image: /assets/images/diffhand_representative.jpg
layout: publication
project_website: http://diffhand.csail.mit.edu
publication: RSS
publication_link: https://people.csail.mit.edu/jiex/papers/DiffHand/paper.pdf
title: An End-to-End Differentiable Framework for Contact-Aware Robot Design
date: 2021-07-09 12:00:00 -0700
---

The current dominant paradigm for robotic manipulation involves two separate stages: manipulator design and control. Because the robot's morphology and how it can be controlled are intimately linked, joint optimization of design and control can significantly improve performance. Existing methods for co-optimization are limited and fail to explore a rich space of designs. The primary reason is the trade-off between the complexity of designs that is necessary for contact-rich tasks against the practical constraints of manufacturing, optimization, contact handling, etc. We overcome several of these challenges by building an end-to-end differentiable framework for contact-aware robot design. The two key components of this framework are: a novel deformation-based parameterization that allows for the design of articulated rigid robots with arbitrary, complex geometry, and a differentiable rigid body simulator that can handle contact-rich scenarios and computes analytical gradients for a full spectrum of kinematic and dynamic parameters. On multiple manipulation tasks, our framework outperforms existing methods that either only optimize for control or for design using alternate representations or co-optimize using gradient-free methods.