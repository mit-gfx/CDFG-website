---
acknowlegement: ''
authors: Yuanming Hu, Jiancheng Liu*, Andrew Spielberg*, Joshua B. Tenenbaum, William T. Freeman, Jiajun Wu, Daniela Rus, Wojciech Matusik
featured_image: /assets/images/chain_queen_0_itok=kmYndvNR.png
layout: publication
publication: ICRA 2019
publication_link: /assets/files/chain_queen_0.pdf
title: 'ChainQueen: Differentiable Physical Simulation for Soft Robotics'
date: 2019-01-01 12:00:00 -0700
---

Physical simulators have been widely used in robot planning and control. Among them, differentiable simulators are particularly favored, as they can be incorporated into gradient-based optimization algorithms that are efficient in solving inverse problems such as optimal control and motion planning. Simulating deformable objects is, however, more challenging compared to rigid body dynamics. The underlying physical laws of deformable objects are more complex, and the resulting systems have orders of magnitude more degrees of freedom and therefore they are significantly more computationally expensive to simulate. Computing gradients with respect to physical design or controller parameters is typically even more computationally challenging. In this paper, we propose a real-time, differentiable hybrid Lagrangian-Eulerian physical simulator for deformable objects, ChainQueen, based on the Moving Least Squares Material Point Method (MLS-MPM). MLS-MPM can simulate deformable objects including contact and can be seamlessly incorporated into inference, control and co-design systems. We demonstrate that our simulator achieves high precision in both forward simulation and backward gradient computation. We have successfully employed it in a diverse set of control tasks for soft robots, including problems with nearly 3,000 decision variables.