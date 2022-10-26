---
layout: publication
title: Fast Aquatic Swimmer Optimization with Differentiable Projective Dynamics
  and Neural Network Hydrodynamic Models
show_on_homepage: false
publication: ICML 2022
publication_link: /assets/images/fast-aquatic-swimmer-.pdf
authors: Elvis Nava, John Z Zhang, Mike Yan Michelis, Tao Du, Pingchuan Ma,
  Benjamin F. Grewe, Wojciech Matusik, Robert Kevin Katzschmann
featured_image: /assets/images/hydronet.jpg
acknowlegement: We are grateful for funding received by the ETH AI Center and
  the Defense Advanced Research Projects Agency.
date: 2022-10-24T15:12:20.855Z
---

Aquatic locomotion is a classic fluid-structure interaction (FSI) problem of interest to biologists and engineers. Solving the fully coupled FSI equations for incompressible Navier-Stokes and finite elasticity is computationally expensive. Optimizing robotic swimmer design within such a system generally involves cumbersome, gradient-free procedures on top of the already costly simulation. To address this challenge we present a novel, fully differentiable hybrid approach to FSI that combines a 2D direct numerical simulation for the deformable solid structure of the swimmer and a physics-constrained neural network surrogate to capture hydrodynamic effects of the fluid. For the deformable solid simulation of the swimmer’s body, we use state-of-the-art techniques from the field of computer graphics to speed up the finite-element method (FEM). For the fluid simulation, we use a U-Net architecture trained with a physics-based loss function to predict the flow field at each time step. The pressure and velocity field outputs from the neural network are sampled around the boundary of our swimmer using an immersed boundary method (IBM) to compute its swimming motion accurately and efficiently. We demonstrate the computational efficiency and differentiability of our hybrid simulator on a 2D carangiform swimmer. Due to differentiability, the simulator can be used for computational design of controls for soft bodies immersed in fluids via direct gradient-based optimization.