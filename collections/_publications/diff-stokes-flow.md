---
acknowlegement: Tao Du, Kui Wu, and Andrew Spielberg would like to thank Buttercup Foshey (and also Michael Foshey) for moral support during this work. Wojciech Matusik acknowledges the funding support from IARPA under grant 2019-19020100001. Bo Zhu acknowledges the funding supports from Neukom Institute CompX Faculty Grant, Burke Research Initiation Award, NSF 1919647, and Toyota TEMA North America Inc. Eftychios Sifakis acknowledges the funding supports from NSF IIS-2008584, CCF-1812944, and IIS-1763638.
authors: Tao Du, Kui Wu, Andrew Spielberg, Wojciech Matusik, Bo Zhu, Eftychios Sifakis
featured_image: /assets/images/diff_stokes_flow.png
layout: publication
project_website: https://people.csail.mit.edu/taodu/stokes/stokes.html
publication: Siggraph Asia
publication_link: /assets/files/diff_stokes_flow.pdf
title: Functional Optimization of Fluidic Devices with Differentiable Stokes Flow
date: 2020-09-01 12:00:00 -0700
---

We present a method for performance-driven optimization of fluidic devices. In our approach, engineers provide a high-level specification of a device using parametric surfaces for the fluid-solid boundaries. They also specify desired flow properties for inlets and outlets of the device. Our computational approach optimizes the boundary of the fluidic device such that its steady-state flow matches desired flow at outlets. In order to deal with computational challenges of this task, we propose an efficient, differentiable Stokes flow solver. Our solver provides explicit access to gradients of performance metrics with respect to the parametric boundary representation. This key feature allows us to couple the solver with efficient gradient-based optimization methods. We demonstrate the efficacy of this approach on designs of five complex 3D fluidic systems. Our approach makes an important step towards practical computational design tools for high-performance fluidic devices.