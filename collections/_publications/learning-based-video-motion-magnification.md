---
acknowlegement: ''
authors: Tae-Hyun Oh*, Ronnachai Jaroensri*, Changil Kim, Mohamed Elgharib, Frédo Durand, William T. Freeman, Wojciech Matusik
featured_image: assets/images/video-motion-mag.PNG_itok=5ro-X9zv.png
layout: publication
project_website: http://people.csail.mit.edu/tiam/deepmag/
publication: ECCV 2018 (oral)
publication_link: assets/files/video-motion-mag.pdf
title: Learning-based Video Motion Magnification
date: 2018-01-01 12:00:00 -0700
---

Video motion magnification techniques allow us to see small motions previously invisible to the naked eyes, such as those of vibrating airplane wings, or swaying buildings under the influence of the wind. Because the motion is small, the magnification results are prone to noise or excessive blurring. The state of the art relies on hand-designed filters to extract motion representations that may not be optimal. In this paper, we seek to learn the filters directly from examples using deep convolutional neural networks. To make training tractable, we carefully design a synthetic dataset that captures small motion well, and use two-frame input for training. We show that the learned filters achieve high-quality results on real videos, with less ringing artifacts and better noise characteristics than previous methods. While our model is not trained with temporal filters, we found that the temporal filters can be used with our extracted representations up to a moderate magnification, enabling a frequency-based motion selection. Finally, we analyze the learned filters and show that they behave similarly to the derivative filters used in previous works.