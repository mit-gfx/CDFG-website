---
layout: publication
title: Automatic Co-Design of Aerial Robots Using a Graph Grammar
show_on_homepage: false
publication: IEEE IROS 2022
publication_link: /assets/images/ieee-xplore-full-text-pdf-.pdf
authors: Allan Zhao, Tao Du, Jie Xu, Josie Hughes, Juan Salazar, Pingchuan Ma,
  Wei Wang, Daniela Rus, and Wojciech Matusik
featured_image: /assets/images/Automatic_Co-Design_of_Aerial_Robots_Using_a_Graph_Grammar.jpg
acknowlegement: This work is supported by Defense Advanced Research Projects
  Agency (DARPA) grant No. FA8750-20-C-0075.
date: 2022-10-23T00:00:00.000Z
---
Unmanned aerial vehicles (UAVs) have broad applications including disaster response, transportation, photography, and mapping. A significant bottleneck in the development of UAVs is the limited availability of automatic tools for task-specific co-design of a UAV’s shape and controller. The development of such tools is particularly challenging as UAVs can take many forms, including fixed-wing planes, radial copters, and hybrid topologies, with each class of topology showing different advantages. In this work, we present a computational design pipeline for UAVs based on a graph grammar that can search across a wide range of topologies. Graphs generated by the grammar encode different topologies and component selections, while continuous parameters encode the dimensions and properties of each component. We further augment the shape representation with deformation cages, which allow expressing a variety of wing shapes. Each UAV design is associated with an LQR controller with tunable continuous parameters. To search over this complex discrete and continuous design space, we develop a hybrid algorithm that combines discrete graph search strategies and gradient-based continuous optimization methods using a differentiable UAV simulator. We evaluate our pipeline on a set of simulated flight tasks requiring dynamic motions, showing that it discovers novel UAV designs that outperform canonical UAVs typically made by engineers.
