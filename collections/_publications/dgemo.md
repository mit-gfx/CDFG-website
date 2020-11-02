---
acknowlegement: We thank the anonymous reviewers for their helpful comments in revising the paper. This work is supported by National Science Foundation (grant No. 1815372). M. K. Luković would like to acknowledge support from the Schmidt Science Fellowship.
authors: Mina Konaković Luković*, Yunsheng Tian*, Wojciech Matusik
featured_image: /assets/images/dgemo.png
layout: publication
publication: NeurIPS
publication_link: /assets/files/DGEMO.pdf
supplementary_link: /assets/files/DGEMO_supplementary.pdf
title: 'Diversity-Guided Multi-Objective Bayesian Optimization With Batch Evaluations'
date: 2020-10-21 12:00:00 -0700
---

Many science, engineering, and design optimization problems require balancing the trade-offs between several conflicting objectives. The objectives are often black-box functions whose evaluations are time-consuming and costly. Multi-objective Bayesian optimization can be used to automate the process of discovering the set of optimal solutions, called Pareto-optimal, while minimizing the number of performed evaluations. To further reduce the evaluation time in the optimization process, testing of several samples in parallel can be deployed. We propose a novel multi-objective Bayesian optimization algorithm that iteratively selects the best batch of samples to be evaluated in parallel. Our algorithm approximates and analyzes a piecewise-continuous Pareto set representation. This representation allows us to introduce a batch selection strategy that optimizes for both hypervolume improvement and diversity of selected samples in order to efficiently advance promising regions of the Pareto front. Experiments on both synthetic test functions and real-world benchmark problems show that our algorithm predominantly outperforms relevant state-of-the-art methods.