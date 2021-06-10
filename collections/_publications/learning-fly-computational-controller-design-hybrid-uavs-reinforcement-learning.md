---
layout: publication
title: "Learning to Fly: Computational Controller Design for Hybrid UAVs with
  Reinforcement Learning"
show_on_homepage: false
publication: SIGGRAPH
publication_link: /assets/files/l2fly.pdf
authors: Jie Xu, Tao Du, Michael Foshey, Beichen Li, Bo Zhu, Adriana Schulz,
  Wojciech Matusik
featured_image: /assets/images/learning_to_fly_itok=LAvaeIge.png
project_website: https://people.csail.mit.edu/jiex/papers/LearningToFly/index.html
acknowlegement: "We thank Ryan Gulland, Mohammed Al Jashmi, and Abdelgadir Balla
  for providing insightful ideas of hybrid UAVs designs. This work was supported
  by Air Force Research Laboratory's sponsorship of Julia: A Fresh Approach to
  Technical Computing and Data Processing (Sponsor Award ID FA8750-15-2-0272,
  MIT Award ID 024831-00003)."
date: 2019-01-01 12:00:00 -0700
---

Hybrid unmanned aerial vehicles (UAV) combine advantages of multicopters and fixed-wing planes: vertical take-off, landing, and low energy use. However, hybrid UAVs are rarely used because controller design is challenging due to its complex, mixed dynamics. In this paper, we propose a method to automate this design process by training a mode-free, model-agnostic neural network controller for hybrid UAVs. We present a neural network controller design with a novel error convolution input trained by reinforcement learning. Our controller exhibits two key features: First, it does not distinguish among flying modes, and the same controller structure can be used for copters with various dynamics. Second, our controller works for real models without any additional parameter tuning process, closing the gap between virtual simulation and real fabrication. We demonstrate the efficacy of the proposed controller both in simulation and in our custom-built hybrid UAVs. The experiments show that the controller is robust to exploit the complex dynamics when both rotors and wings are active in flight tests.