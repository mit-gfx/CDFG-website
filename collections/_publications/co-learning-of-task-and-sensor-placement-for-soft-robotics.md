---
layout: publication
title: Co-Learning of Task and Sensor Placement for Soft Robotics
show_on_homepage: false
publication: "IEEE: Robotics Automation Letters"
publication_link: https://ieeexplore.ieee.org/document/9345345
authors: Andrew Spielberg, Alexander Amini, Lillian Chin, Wojciech Matusik, Daniela Rus
featured_image: /assets/images/co-learning-of-task-and-sensor.png
date: 2021-09-16T19:13:13.669Z
---
Unlike rigid robots which operate with compact degrees of freedom, soft robots must reason about an infinite dimensional state space. Mapping this continuum state space presents significant challenges, especially when working with a finite set of discrete sensors. Reconstructing the robot's state from these sparse inputs is challenging, especially since sensor location has a profound downstream impact on the richness of learned models for robotic tasks. In this work, we present a novel representation for co-learning sensor placement and complex tasks. Specifically, we present a neural architecture which processes on-board sensor information to learn a salient and sparse selection of placements for optimal task performance. We evaluate our model and learning algorithm on six soft robot morphologies for various supervised learning tasks, including tactile sensing and proprioception. We also highlight applications to soft robot motion subspace visualization and control. Our method demonstrates superior performance in task learning to algorithmic and human baselines while also learning sensor placements and latent spaces that are semantically meaningful.