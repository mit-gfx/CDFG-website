---
show_on_homepage: true
acknowlegement: We thank Yue Wang for the valuable discussion on the Wasserstein barycentric interpolation. We also thank the anonymous reviewers for their constructive comments. This work is supported by Intelligence Advanced Research Projects Agency (grant No. 2019-19020100001) and Defense Advanced Research Projects Agency (grant No. FA8750-20-C-0075).
authors: Pingchuan Ma, Tao Du, John Z. Zhang, Kui Wu, Andrew Spielberg, Robert K. Katzschmann, and Wojciech Matusik
featured_image: /assets/images/diffaqua.png
layout: publication
project_website: http://diffaqua.csail.mit.edu/
publication: SIGGRAPH
publication_link: https://arxiv.org/pdf/2104.00837.pdf
title: 'DiffAqua: A Differentiable Computational Design Pipeline for Soft Underwater Swimmers with Shape Interpolation'
date: 2021-05-05 12:00:00 -0700
---

The computational design of soft underwater swimmers is challenging because of the high degrees of freedom in soft-body modeling. In this paper, we present a differentiable pipeline for co-designing a soft swimmer's geometry and controller. Our pipeline unlocks gradient-based algorithms for discovering novel swimmer designs more efficiently than traditional gradient-free solutions. We propose Wasserstein barycenters as a basis for the geometric design of soft underwater swimmers since it is differentiable and can naturally interpolate between bio-inspired base shapes via optimal transport. By combining this design space with differentiable simulation and control, we can efficiently optimize a soft underwater swimmer's performance with fewer simulations than baseline methods. We demonstrate the efficacy of our method on various design problems such as fast, stable, and energy-efficient swimming and demonstrate applicability to multi-objective design.