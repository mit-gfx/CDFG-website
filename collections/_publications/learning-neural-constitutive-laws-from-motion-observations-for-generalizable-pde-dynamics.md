---
layout: publication
title: Learning Neural Constitutive Laws from Motion Observations for
  Generalizable PDE Dynamics
show_on_homepage: false
publication: arXiv 2023
publication_link: https://arxiv.org/pdf/2304.14369.pdf
authors: Pingchuan Ma, Peter Yichen Chen, Bolei Deng, Joshua B. Tenenbaum, Tao
  Du, Chuang Gan, Wojciech Matusik
featured_image: /assets/images/16993b9b-9afc-4c0b-afa1-599fe1a9c980.png
acknowlegement: We would like to thank Bohan Wang and Minghao Guo for the
  constructive discussion. This work was supported by MIT-IBM Watson AI Lab. Dr.
  Gan was supported by DSO grant DSOCO21072, and gift funding from MERL, Cisco,
  Sony, and Amazon.
date: 2023-07-05T18:04:29.890Z
---
We propose a hybrid neural network (NN) and PDE approach for learning generalizable PDE dynamics from motion observations. Many NN approaches learn an end-to-end model that implicitly models both the governing PDE and constitutive models (or material models). Without explicit PDE knowledge, these approaches cannot guarantee physical correctness and have limited generalizability. We argue that the governing PDEs are often well-known and should be explicitly enforced rather than learned. Instead, constitutive models are particularly suitable for learning due to their data-fitting nature. To this end, we introduce a new framework termed "Neural Constitutive Laws" (NCLaw), which utilizes a network architecture that strictly guarantees standard constitutive priors, including rotation equivariance and undeformed state equilibrium. We embed this network inside a differentiable simulation and train the model by minimizing a loss function based on the difference between the simulation and the motion observation. We validate NCLaw on various large-deformation dynamical systems, ranging from solids to fluids. After training on a single motion trajectory, our method generalizes to new geometries, initial/boundary conditions, temporal ranges, and even multi-physics systems. On these extremely out-of-distribution generalization tasks, NCLaw is orders-of-magnitude more accurate than previous NN approaches. Real-world experiments demonstrate our method's ability to learn constitutive laws from videos.