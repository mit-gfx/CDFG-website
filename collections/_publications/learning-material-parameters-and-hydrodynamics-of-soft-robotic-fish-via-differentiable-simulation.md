---
layout: publication
title: "Learning Material Parameters and Hydrodynamics of Soft Robotic Fish via Differentiable Simulation"
authors: John Z. Zhang, Yu Zhang, Pingchuan Ma, Elvis Nava, Tao Du, Philip Arm, Wojciech Matusik, Robert K. Katzschmann
show_on_homepage: false
featured_image: /assets/images/learning-material-parameters-and-hydrodynamics-of-soft-robotic-fish-via-differentiable-simulation.png
publication: arXiv
publication_link: https://arxiv.org/pdf/2109.14855
date: 2021-12-20 12:00:00 -0700
---
The high dimensionality of soft mechanisms and the complex physics of fluid-structure interactions render the sim2real gap for soft robots particularly challenging. Our framework allows high fidelity prediction of dynamic behavior for composite bi-morph bending structures in real hardware to accuracy near measurement uncertainty. We address this gap with our differentiable simulation tool by learning the material parameters and hydrodynamics of our robots. We demonstrate an experimentally-verified, fast optimization pipeline for learning the material parameters and hydrodynamics from quasi-static and dynamic data via differentiable simulation. Our method identifies physically plausible Young's moduli for various soft silicone elastomers and stiff acetal copolymers used in creation of our three different fish robot designs. For these robots we provide a differentiable and more robust estimate of the thrust force than analytical models and we successfully predict deformation to millimeter accuracy in dynamic experiments under various actuation signals. Although we focus on a specific application for underwater soft robots, our framework is applicable to any pneumatically actuated soft mechanism. This work presents a prototypical hardware and simulation problem solved using our framework that can be extended straightforwardly to higher dimensional parameter inference, learning control policies, and computational design enabled by its differentiability.
