---
acknowlegement: ''
authors: Liang Shi, Vahid Babaei, Changil Kim, Michael Foshey, Yuanming Hu, Pitchaya Sitthi-Amorn, Szymon Rusinkiewicz, Wojciech Matusik
featured_image: /assets/images/deep_multispectral_painting_itok=HmVKw0Wl.png
layout: publication
project_website: http://people.csail.mit.edu/liangs/papers/ToG18.pdf
publication: ACM SIGGRAPH ASIA 2018
publication_link: ''
title: Deep Multispectral Painting Reproduction via Multi-Layer, Custom-Ink Printing
date: 2018-01-01 12:00:00 -0700
---

We propose a worklow for spectral reproduction of paintings, which captures a painting’s spectral color, invariant to illumination, and reproduces it using multi-material 3D printing. We take advantage of the current 3D printers’ capabilities of combining highly concentrated inks with a large number of layers, to expand the spectral gamut of a set of inks. We use a data-driven method to both predict the spectrum of a printed ink stack and optimize for the stack layout that best matches a target spectrum. This bidirectional mapping is modeled using a pair of neural networks, which are optimized through a problem-speciic multi-objective loss function. Our loss function helps ind the best possible ink layout resulting in the balance between spectral reproduction and colorimetric accuracy under a multitude of illuminants. In addition, we introduce a novel spectral vector error difusion algorithm based on combining color contoning and halftoning, which simultaneously solves the layout discretization and color quantization problems, accurately and eiciently. Our worklow outperforms the state-of-the-art models for spectral prediction and layout optimization. We demonstrate reproduction of a number of real paintings and historically important pigments using our prototype implementation that uses 10 custom inks with varying spectra and a resin-based 3D printer.