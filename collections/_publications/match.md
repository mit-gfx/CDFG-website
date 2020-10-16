---
show_on_homepage: true
acknowlegement: Parts of this work were done when Liang Shi was an intern at Adobe Research. This work is partially supported by the U.S. National Science Foundation (NSF) grant IIS-1815585. We thank Guo et al.[2019] for several PyTorch routines and discussions. We also thank Holly Rushmeier, Julie Dorsey and Yiwei Hu for sharing their SIGGRAPHAsia 2019 implementation.
authors: Liang Shi, Beichen Li, Miloš Hašan, Kalyan Sunkavalli, Tamy Boubekeur, Radomír Měch, Wojciech Matusik
featured_image: /assets/images/match.jpg
layout: publication
project_website: http://match.csail.mit.edu
publication: SIGGRAPH Asia
publication_link: /assets/files/match.pdf
title: 'MATch: Differentiable Material Graphs for Procedural Material Capture'
date: 2020-10-14 12:00:00 -0700
---

We present MATch, a method to automatically convert photographs of material samples into production-grade procedural material models. At the core of MATch is a new library DiffMat that provides differentiable building blocks for constructing procedural materials, which can be used to automatically translate large-scale procedural models, with hundreds to thousands of node parameters, into differentiable node graphs. Combining these translated node graphs with a rendering layer yields an end-to-end differentiable pipeline that maps node graph parameters to rendered images. This facilitates the use of gradient-based optimization to estimate the parameters such that the resulting material, when rendered, matches the target image appearance, as quantified by a style transfer loss. In addition, we propose a deep neural feature-based graph selection and parameter initialization method that efficiently scales to a large number of procedural graphs. We evaluate our method on both rendered synthetic materials and real materials captured as flash photographs. We demonstrate that MATch can reconstruct more accurate, general, and complex procedural materials compared to the state-of-the-art. Moreover, by producing a procedural output, we unlock capabilities such as constructing arbitrary-resolution material maps and parametrically editing the material appearance.