---
layout: publication
title: Large-scale, fast and accurate shot boundary detection through
  spatio-temporal convolutional neural networks
show_on_homepage: false
publication: arXiv preprint arXiv:1705.03281
publication_link: /assets/images/large-scale-fast-and-accurate-shot-boundary-detection-through-spatio-temporal-convolutional-neural-networks.pdf
authors: Ahmed Hassanien, Mohamed Elgharib, Ahmed Selim, Sung-Ho Bae, Mohamed
  Hefeeda, Wojciech Matusik
featured_image: /assets/images/image_large-scale-fast-and-accurate-shot-boundry.png
date: 2017-05-10T01:44:00.000Z
---
Shot boundary detection (SBD) is an important preprocessing step for video manipulation. Here, each segment of frames is classified as either sharp, gradual or no transition. Current SBD techniques analyze hand-crafted features and attempt to optimize both detection accuracy and processing speed. However, the heavy computations of optical flow prevents this from happening. To achieve this aim, we present an SBD technique based on spatio-temporal Convolutional Neural Networks (CNN). Since current datasets are not large enough to train an accurate SBD CNN, we are the first to present a very large SBD dataset that allows deep neural networks techniques to be effectively applied. Our dataset contains more than 3.5 million frames of sharp and gradual transitions. The transitions are generated synthetically using image compositing models. Our dataset contain additional 70,000 frames of important hardnegative no transitions. We perform the largest evaluation to date for one SBD algorithm, on real and synthetic data, containing more than 4.85 million frames. In comparison to the state of the art, we outperform dissolve gradual detection, generate competitive performance for sharp detections and produce significant improvement in wipes. In addition, we are up to 11 times faster than the state of the art.