---
layout: publication
title: Accelerated Policy Learning with Parallel Differentiable Simulation
show_on_homepage: true
publication: ICLR
authors: Jie Xu, Viktor Makoviychuk, Yashraj Narang, Fabio Ramos, Wojciech
  Matusik, Animesh Garg, Miles Macklin
featured_image: /assets/images/image.png
acknowlegement: We thank the anonymous reviewers for their helpful comments in
  revising the paper. The majority of this work was done during the internship
  of Jie Xu at NVIDIA, and we thank Tae-Yong Kim for his mentorship. This work
  is also partially supported by Defense Advanced Research Projects Agency
  (FA8750-20-C-0075).
project_website: https://short-horizon-actor-critic.github.io/
publication_link: https://openreview.net/forum?id=ZSKRQMvttc
date: 2022-03-29T16:47:41.413Z
---
Deep reinforcement learning can generate complex control policies, but requires large amounts of training data to work effectively. Recent work has attempted to address this issue by leveraging differentiable simulators. However, inherent problems such as local minima and exploding/vanishing numerical gradients prevent these methods from being generally applied to control tasks with complex contact-rich dynamics, such as humanoid locomotion in classical RL benchmarks. In this work we present a high-performance differentiable simulator and a new policy learning algorithm (SHAC) that can effectively leverage simulation gradients, even in the presence of non-smoothness. Our learning algorithm alleviates problems with local minima through a smooth critic function, avoids vanishing/exploding gradients through a truncated learning window, and allows many physical environments to be run in parallel. We evaluate our method on classical RL control tasks, and show substantial improvements in sample efficiency and wall-clock time over state-of-the-art RL and differentiable simulation-based algorithms. In addition, we demonstrate the scalability of our method by applying it to the challenging high-dimensional problem of muscle-actuated locomotion with a large action space, achieving a greater than reduction in training time over the best-performing established RL algorithm.