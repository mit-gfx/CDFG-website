---
layout: publication
title: Learning Material Parameters and Hydrodynamics of Soft Robotic Fish via
  Differentiable Simulation
show_on_homepage: false
publication: arXivLabs 2022
publication_link: /assets/images/soft-robotic-fish-.pdf
authors: John Z. Zhang, Yu Zhang, Pingchuan Ma, Elvis Nava, Tao Du, Philip Arm,
  Wojciech Matusik, Robert K. Katzschmann
featured_image: ""
acknowlegement: ""
date: 2022-10-25T14:50:47.212Z
---
The high dimensionality of soft mechanisms and the complex physics of fluid-structure interactions render the sim2real gap for soft robots particularly challenging. Our framework allows high fidelity prediction of dynamic behavior for composite bi-morph bending structures in real hardware to millimeter-accuracy. We address this gap with our differentiable simulation tool by learning the material parameters and hydrodynamics of our robots. We demonstrate an experimentally-verified, fast optimization pipeline for learning the material parameters and hydrodynamics from quasi-static and dynamic data via differentiable simulation. Our method identifies physically plausible Young’s moduli for various soft silicone elastomers and stiff acetal copolymers used in creation of our three different fish robot designs and is compatible with varying internal geometry of the actuators, such as number of air chambers. For these robots we provide a differentiable and more robust estimate of the thrust force than analytical models and we successfully predict deformation to millimeter accuracy in dynamic experiments under various actuation signals. Although we focus on a specific application for underwater soft robots, our framework is applicable to any pneumatically actuated soft mechanism. This work presents a prototypical hardware and simulation problem solved using our framework that can be extended straightforwardly to higher dimensional parameter inference, learning control policies, and computational design enabled by its differentiability.