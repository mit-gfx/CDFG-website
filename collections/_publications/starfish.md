---
acknowlegement: This work was supported by NSF grant No. EFRI-1830901, IARPA grant No. 2019-19020100001, and DARPA grant No. FA8750-20-C-0075.
authors: Tao Du*, Josie Hughes*, Sebastien Wah, Wojciech Matusik, Daniela Rus
featured_image: /assets/images/starfish.jpg
layout: publication
project_website: http://people.csail.mit.edu/taodu/starfish/index.html
publication: IEEE RA-L/RoboSoft
publication_link: https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9392257
title: Underwater Soft Robot Modeling and Control with Differentiable Simulation
date: 2021-04-13 12:00:00 -0700
---

Underwater soft robots are challenging to model and control because of their high degrees of freedom and their intricate coupling with water. In this paper, we present a method that leverages the recent development in differentiable simulation coupled with a differentiable, analytical hydrodynamic model to assist with the modeling and control of an underwater soft robot. We apply this method to Starfish, a customized soft robot design that is easy to fabricate and intuitive to manipulate. Our method starts with data obtained from the real robot and alternates between simulation and experiments. Specifically, the simulation step uses gradients from a differentiable simulator to run system identification and trajectory optimization, and the experiment step executes the optimized trajectory on the robot to collect new data to be fed into simulation. Our demonstration on Starfish shows that proper usage of gradients from a differentiable simulator not only narrows down its simulation-to-reality gap but also improves the performance of an open-loop controller in real experiments.