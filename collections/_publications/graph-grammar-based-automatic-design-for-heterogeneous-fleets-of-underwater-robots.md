---
layout: publication
title: Graph Grammar-Based Automatic Design for Heterogeneous Fleets of
  Underwater Robots
show_on_homepage: true
publication: "IEEE ICRA "
publication_link: https://www.dropbox.com/s/t046rry9fuvsjtd/ICRA22_2050_FI.pdf?dl=0
authors: Allan Zhao, Jie Xu, Juan Salazar, Wei Wang, Pingchuan Ma, Daniela Rus,
  and Wojciech Matusik
featured_image: /assets/images/d0ead643-85a3-4a74-afbb-08eb56bae3d1_4_5005_c.jpeg
acknowlegement: This work is supported by Defense Advanced Research Projects
  Agency (DARPA) grant No. FA8750-20-C-0075.
date: 2022-03-29T13:18:08.900Z
---
Autonomous underwater vehicles (AUVs) are specialized robots that are commonly used for seafloor surveying and ocean water sampling. Computational design approaches have emerged to reduce the effort required to design both individual AUVs as well as fleets. As the number and scale of underwater missions increases beyond the capabilities of a single vehicle, fleet level design will become more important. Depending on the mission, the optimal fleet may consist of multiple distinct types of AUVs designed to a variety of specifications. Moreover, the AUVs may differ in both continuous parameters (such as battery capacity) and discrete parameters (such as number and model of thrusters).

In this work, we present a computational pipeline for designing these heterogeneous AUV fleets. Using a novel shape design space based on a graph grammar and deformation cages, we can express a variety of AUV architectures with different topologies, component selections, and dimensions. We search this space using a combination of discrete graph search and gradient-based continuous optimization, enabled by a differentiable AUV simulator. Finally, we formulate heterogeneous fleet design as a modified knapsack problem, and solve it using an efficient backtracking-based algorithm.

We evaluate our pipeline on a simulated mission with nonuniform design requirements---surveying a section of seafloor with varying depth---and show that the best heterogeneous fleet outperforms the best fleet composed of a single vehicle type.