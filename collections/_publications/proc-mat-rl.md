---
layout: publication
title: "Procedural Material Generation with Reinforcement Learning"
show_on_homepage: false
publication: SIGGRAPH Asia 2024
authors: Beichen Li, Yiwei Hu, Paul Guerrero, Miloš Hašan, Liang Shi, Valentin Deschaintre, Wojciech Matusik
featured_image: /assets/images/proc-mat-rl.png
date: 2024-09-16 00:00:00 -0700
---

Modern 3D content creation heavily relies on procedural assets. In particular, procedural materials are ubiquitous in the industry, but their manipulation remains challenging. Previous work conditionally generates procedural graphs that match a given input image. However, the parameter generation step limits how accurately the generated graph matches the input image, due to a reliance on supervision with scarcely available procedural data. We propose to improve parameter prediction accuracy for image-conditioned procedural material generation by leveraging reinforcement learning (RL) and present the first RL approach for procedural materials. RL circumvents the limited availability of procedural data, the domain gap between real and synthetic materials, and the need for end-to-end differentiable loss functions. Given a target image, we retrieve a procedural material and use an RL-trained transformer model to predict a set of parameters that reconstruct the target image as closely as possible. We show that using RL significantly improves parameter prediction to match a given target image compared to supervised methods on both synthetic and real target images.
