---
acknowlegement: ''
authors: D. Chen, D. I. W. Levin, P. Didyk, P. Sitthi-amorn, W. Matusik
featured_image: /assets/images/spec2fab_itok=Y8MDzU_v.png
layout: publication
date: 2013-01-01 12:00:00 -0700
publication: ACM Transactions on Graphics (SIGGRAPH 2013)
publication_link: /assets/files/Spec2Fab.pdf
title: 'Spec2Fab: A Reducer-Tuner Model for Translating Specifications to 3D Prints'
---

Multi-material 3D printing allows objects to be composed of complex, heterogenous arrangements of materials. It is often more natural to define a functional goal than to define the material composition of an object. Translating these functional requirements to fabricable 3D prints is still an open research problem. Recently, several specific instances of this problem have been explored (e.g., appearance or elastic deformation), but they exist as isolated, monolithic algorithms. In this paper, we propose an abstraction mechanism that simplifies the design, development, implementation, and reuse of these algorithms. Our solution relies on two new data structures: a reducer tree that efficiently parameterizes the space of material assignments and a tuner network that describes the optimization process used to compute material arrangement. We provide an application programming interface for specifying the desired object and for defining parameters for the reducer tree and tuner network. We illustrate the utility of our framework by implementing several fabrication algorithms as well as demonstrating the manufactured results.