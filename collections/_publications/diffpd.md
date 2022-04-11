---
layout: publication
title: "DiffPD: Differentiable Projective Dynamics"
show_on_homepage: false
publication: ACM Transactions on Graphics
authors: Tao Du, Kui Wu, Pingchuan Ma, Sebastien Wah, Andrew Spielberg, Daniela
  Rus, Wojciech Matusik
featured_image: /assets/images/diff_pd.jpeg
acknowlegement: "We thank Desai Chen, David I. W. Levin, Bo Zhu, and Eftychios
  Sifakis for their feedback and suggestions on this article. The duck and cow
  mesh models in Figures 5, 6, and 14 are obtained from Keenan Crane’s 3D model
  repository \\[Crane 2020] under the CC0 1.0 Universal license. This work is
  sponsored by Defense Advanced Research Projects Agency (DARPA) under Grant No.
  FA8750-20-C-0075, Intelligence Advanced Research Projects Activity (IARPA)
  under Grant No. 2019-19020100001, and National Science Foundation (NSF) Award
  2106962: Computational Design of Complex Fluidic Systems."
project_website: https://people.csail.mit.edu/taodu/diffpd/index.html
publication_link: https://dl.acm.org/doi/full/10.1145/3490168
date: 2022-04-01T13:16:07.013Z
---
We present a novel, fast differentiable simulator for soft-body learning and control applications. Existing differentiable soft-body simulators can be classified into two categories based on their time integration methods: Simulators using explicit time-stepping scheme require tiny time steps to avoid numerical instabilities in gradient computation, and simulators using implicit time integration typically compute gradients by employing the adjoint method and solving the expensive linearized dynamics. Inspired by Projective Dynamics (PD), we present Differentiable Projective Dynamics (DiffPD), an efficient differentiable soft-body simulator based on PD with implicit time integration. The key idea in DiffPD is to speed up backpropagation by exploiting the prefactorized Cholesky decomposition in forward PD simulation. In terms of contact handling, DiffPD supports two types of contacts: a penalty-based model describing contact and friction forces and a complementarity-based model enforcing non-penetration conditions and static friction. We evaluate the performance of DiffPD and observe it is 4-19 times faster compared to the standard Newton’s method in various applications including system identification, inverse design problems, trajectory optimization, and closed-loop control. We also apply DiffPD in a real-to-sim example with contact and collisions and show its capability of reconstructing a digital twin of real-world scenes.
