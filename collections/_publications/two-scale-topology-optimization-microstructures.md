---
acknowlegement: This research is supported in part by the Defense Advanced Research Projects Agency (DARPA) and Space and Naval Warfare Systems Center Pacific (SSC Pacific) under Contract No 66001-15-C-4030.
authors: Bo Zhu, Melina Skouras, Desai Chen, Wojciech Matusik
featured_image: assets/images/two_scaled_topo_itok=L0fkySN9.png
layout: publication
project_website: http://people.csail.mit.edu/boolzhu/projects/topo.htm
publication: ACM Transactions on Graphics (to be presented at SIGGRAPH 2017)
publication_link: assets/files/two_scale_topo.pdf
title: Two-Scale Topology Optimization with Microstructures
date: 2017-01-01 12:00:00 -0700
---

In this paper we present a novel two-scale framework to optimize the structure and the material distribution of an object given its functional specifications. Our approach utilizes multi-material microstructures as low-level building blocks of the object. We start by precomputing the material property gamut – the set of bulk material properties that can be achieved with all material microstructures of a given size. We represent the boundary of this material property gamut using a level set field. Next, we propose an efficient and general topology optimization algorithm that simultaneously computes an optimal object topology and spatially-varying material properties constrained by the precomputed gamut. Finally, we map the optimal spatially-varying material properties onto the microstructures with the corresponding properties in order to generate a high-resolution printable structure. We demonstrate the efficacy of our framework by designing, optimizing, and fabricating objects in different material property spaces on the level of a trillion voxels, i.e several orders of magnitude higher than what can be achieved with current systems.