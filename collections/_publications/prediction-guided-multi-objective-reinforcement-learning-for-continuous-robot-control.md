---
layout: publication
title: Prediction-Guided Multi-Objective Reinforcement Learning for Continuous
  Robot Control
show_on_homepage: false
publication: Proceedings of the 37th International Conference on Machine Learning (ICML)
authors: Jie Xu, Yunsheng Tian, Pingchuan Ma, Daniela Rus, Shinjiro Sueda,
  Wojciech Matusik
acknowlegement: We thank the anonymous reviewers for their helpful comments in
  revising the paper. This work is supported by Intelligence Advanced Research
  Projects Activity (grant No. 2019-19020100001), Defense Advanced Research
  Projects Agency (grant No. N66001-15-C-4030), and the National Science
  Foundation (grant No. CMMI-1644558).
date: 2020-07-01T17:20:00.000Z
---
Many real-world control problems involve conflicting objectives where we desire a dense and high-quality set of control policies that are optimal for different objective preferences (called Pareto-optimal). While extensive research in multi-objective reinforcement learning (MORL) has been conducted to tackle such problems, multi-objective optimization for complex continuous robot control is still under-explored. In this work, we propose an efficient evolutionary learning algorithm to find the Pareto set approximation for continuous robot control problems, by extending a state-of-the-art RL algorithm and presenting a novel prediction model to guide the learning process. In addition to efficiently discovering the individual policies on the Pareto front, we construct a continuous set of Pareto-optimal solutions by Pareto analysis and interpolation. Furthermore, we design seven multi-objective RL environments with continuous action space, which is the first benchmark platform to evaluate MORL algorithms on various robot control problems. We test the previous methods on the proposed benchmark problems, and the experiments show that our approach is able to find a much denser and higher-quality set of Pareto policies than the existing algorithms