---
layout: publication
title: Efficient Tactile Simulation with Differentiability for Robotic Manipulation
show_on_homepage: false
publication: CoRL 2022
publication_link: https://openreview.net/forum?id=6BIffCl6gsM&referrer=%5BAuthor%20Console%5D(%2Fgroup%3Fid%3Drobot-learning.org%2FCoRL%2F2022%2FConference%2FAuthors%23your-submissions)
authors: Jie Xu, Sangwoon Kim, Tao Chen, Alberto Rodriguez Garcia, Pulkit
  Agrawal, Wojciech Matusik, Shinjiro Sueda
featured_image: /assets/images/add52899-307c-40a0-99df-dcf9593e63ba.png
acknowlegement: ""
date: 2022-10-18T18:14:01.231Z
---
Efficient simulation of tactile sensors can unlock new opportunities for learning tactile-based manipulation policies in simulation and then transferring the learned policy to real systems, but fast and reliable simulators for dense tactile normal and shear force fields are still under-explored. We present a novel approach for efficiently simulating both the normal and shear tactile force field covering the entire contact surface with an arbitrary tactile sensor spatial layout. Our simulator also provides analytical gradients of the tactile forces to accelerate policy learning. We conduct extensive simulation experiments to showcase our approach and demonstrate successful zero-shot sim-to-real transfer for a high-precision peg-insertion task with high-resolution vision-based GelSlim tactile sensors.