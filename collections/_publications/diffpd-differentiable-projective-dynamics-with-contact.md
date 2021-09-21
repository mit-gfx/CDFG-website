---
layout: publication
title: "DiffPD: Differentiable Projective Dynamics with Contact"
show_on_homepage: false
publication: CoRR
publication_link: https://arxiv.org/pdf/2101.05917.pdf
authors: Tao Du, Kui Wu, Pingchuan Ma, Sebastien Wah, Andrew Spielberg, Daniela
  Rus, Wojciech Matusik
featured_image: /assets/images/diffpd-2021.png
date: 2021-09-21T12:49:23.746Z
---
We present a novel, fast differentiable simulator for soft-body learning and control applications. Existing differentiable soft-body simulators can be classified into two categories based on their time integration methods: Simulators using explicit time-stepping scheme require tiny time steps to avoid numerical instabilities in gradient computation, and simulators using implicit time integration typically compute gradients by employing the adjoint method and solving the expensive linearized dynamics. Inspired by Projective Dynamics (PD), we present Differentiable Projective Dynamics (DiffPD), an efficient differentiable soft-body simulator based on PD with implicit time integration. The key idea in DiffPD is to speed up backpropagation by exploiting the prefactorized Cholesky decomposition in forward PD simulation. In terms of contact handling, DiffPD supports two types of contacts: a penalty-based model describing contact and friction forces and a complementarity-based model enforcing non-penetration conditions and static friction. We evaluate the performance of DiffPD and observe it is 4-19 times faster compared to the standard Newton’s method in various applications including system identification, inverse design problems, trajectory optimization, and closed-loop control. We also apply DiffPD in a real-to-sim example with contact and collisions and show its capability of reconstructing a digital twin of real-world scenes.