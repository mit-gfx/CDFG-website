---
acknowlegement: ''
authors: Adrià Recasens*, Petr Kellnhofer*, Piotr Didyk, Simon Stent, Wojciech Matusik, and Antonio Torralba
featured_image: assets/images/learning_to_zoom_itok=YUn6dFfU.png
layout: publication
date: 2018-01-01 12:00:00 -0700
publication: ECCV 2018
publication_link: assets/files/learning_to_zoom.pdf
title: 'Learning to Zoom: a Saliency-Based Sampling Layer for Neural Networks'
---

We introduce a saliency-based distortion layer for convolutional neural networks that helps to improve the spatial sampling of input data for a given task. Our differentiable layer can be added as a preprocessing block to existing task networks and trained altogether in an end-to-end fashion. The effect of the layer is to efficiently estimate how to sample from the original data in order to boost task performance. For example, for an image classification task in which the original data might range in size up to several megapixels, but where the desired input images to the task network are much smaller, our layer learns how best to sample from the underlying high resolution data in a manner which preserves task-relevant information better than uniform downsampling. This has the effect of creating distorted, caricature-like intermediate images, in which idiosyncratic elements of the image that improve task performance are zoomed and exaggerated. Unlike alternative approaches such as spatial transformer networks, our proposed layer is inspired by image saliency, computed efficiently from uniformly downsampled data, and degrades gracefully to a uniform sampling strategy under uncertainty. We apply our layer to improve existing networks on the tasks of gaze estimation from facial images and fine-grained object classification, and we analyse its behavior under different resolution conditions.