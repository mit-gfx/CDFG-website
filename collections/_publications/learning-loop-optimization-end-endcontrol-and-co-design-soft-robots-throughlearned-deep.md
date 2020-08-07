---
acknowlegement: 'We thank Alexander Amini for insightful discussions on convolutional variational autoencoders and starter code.   We thank Liane Makatura for help in drawing explanatory figures.  We thank Buttercup Foshey (and of course Michael Foshey) for moral support during this work. This work was supported by NSF grant No. 1138967, the Unity Global Graduate Fellowship, IARPA grant No. 2019-19020100001, and The MIT EECS David S. Y. Wong Fellowship.'
authors: Andrew Spielberg, Allan Zhao, Tao Du, Yuanming Hu, Daniela Rus, Wojciech Matusik
featured_image: /assets/images/system_diagram_new_itok=zm2F_o3y.png
layout: publication
show_on_homepage: true
publication: NeurIPS 2019
publication_link: /assets/files/learning_in_the_loop.pdf
title: 'Learning-In-The-Loop Optimization: End-To-EndControl And Co-Design of Soft Robots ThroughLearned Deep Latent Representations'
date: 2019-01-01 12:00:00 -0700
---

Soft robots have continuum solid bodies that can deform in an infinite number of ways. Controlling soft robots is very challenging as there are no closed form solutions.  We present a learning-in-the-loop co-optimization algorithm in which a latent state representation is learned as the robot figures out how to solve the task. Our solution marries hybrid particle-grid-based simulation with deep, variational convolutional autoencoder architectures that can capture salient features of robot dynamics with high efficacy. We demonstrate our dynamics-aware feature learning algorithm on both 2D and 3D soft robots, and show that it is more robust and faster converging than the dynamics-oblivious baseline.  We validate the behavior of our algorithm with visualizations of the learned representation.