---
acknowlegement: ''
authors: Haixiang Liu*, Yuanming Hu*, Bo Zhu, Wojciech Matusik, Eftychios Sifakis
featured_image: /assets/images/narrowband_topopt_itok=x_PyUNAv.jpg
layout: publication
publication: ACM SIGGRAPH ASIA 2018
publication_link: /assets/files/narrowband_topopt.pdf
title: Narrow-Band Topology Optimization on a Sparsely Populated Grid
date: 2018-01-01 12:00:00 -0700
---

A variety of structures in nature exhibit sparse, thin, and intricate features. It is challenging to investigate these structural characteristics using conventional numerical approaches since such features require highly refined spatial resolution to capture and therefore they incur a prohibitively high computational cost. We present a novel computational framework for high-resolution topology optimization that delivers leaps in simulation capabilities, by two orders of magnitude, from the state-of-the-art approaches. Our technique accommodates computational domains with over one billion grid voxels on a single shared-memory multiprocessor platform, allowing automated emergence of structures with both rich geometric features and exceptional mechanical performance. To achieve this, we track the evolution of thin structures and simulate its elastic deformation in a dynamic narrow-band region around high-density sites to avoid wasted computational effort on large void regions. We have also designed a mixed-precision multigrid-preconditioned iterative solver that keeps the memory footprint of the simulation to a compact size while maintaining double-precision accuracy. We have demonstrated the efficacy of the algorithm through optimizing a variety of complex structures from both natural and engineering systems.