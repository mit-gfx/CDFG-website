---
layout: publication
title: Hierarchical Grammar-Induced Geometry for Data-Efficient Molecular Property Prediction
show_on_homepage: false
publication: ICML
publication_link: /assets/files/guo23h.pdf
authors: Minghao Guo, Veronika Thost, Samuel Song, Adithya Balachandran, Payel Das, Jie Chen, Wojciech Matusik
featured_image: /assets/images/GeoDEG.png
acknowlegement: This work is supported by the MIT-IBM Watson AI Lab, and its
  member company, Evonik.
date: 2023-07-26 00:00:01 -0700
---
The prediction of molecular properties is a crucial task in the field of material and drug discovery. The potential benefits of using deep learning techniques are reflected in the wealth of recent literature. Still, these techniques are faced with a common challenge in practice: Labeled data are limited by the cost of manual extraction from literature and laborious experimentation. In this work, we propose a data-efficient property predictor by utilizing a learnable hierarchical molecular grammar that can generate molecules from grammar production rules. Such a grammar induces an explicit geometry of the space of molecular graphs, which provides an informative prior on molecular structural similarity. The property prediction is performed using graph neural diffusion over the grammar-induced geometry. On both small and large datasets, our evaluation shows that this approach outperforms a wide spectrum of baselines, including supervised and pre-trained graph neural networks. We include a detailed ablation study and further analysis of our solution, showing its effectiveness in cases with extremely limited data. Code is available at https://github.com/gmh14/Geo-DEG.