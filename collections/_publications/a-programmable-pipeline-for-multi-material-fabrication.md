---
layout: publication
title: A Programmable Pipeline for Multi-Material Fabrication
show_on_homepage: false
publication: Master's Thesis
publication_link: /assets/images/kiril-vidimce-master-s-thesis_2014.pdf
authors: Kiril Vidimce
featured_image: /assets/images/image-k-vidimce-ms-thesis.png
date: 2014-05-21T14:12:00.000Z
---
3D printing hardware is rapidly scaling up to output continuous mixtures of multiple materials at increasing resolution over ever larger print volumes. This poses an enormous computational challenge: large high-resolution prints comprise trillions of voxels and petabytes of data and simply modeling and describing the input with spatially-varying material mixtures at this scale is challenging. Existing 3D printing software is insucient; in particular, most software is designed to support only a few million primitives, with discrete material choices per object. In this body of work I present OpenFab, a programmable pipeline for synthesizing multi-material 3D printed objects that is inspired by RenderMan and modern GPU pipelines. The pipeline supports procedural evaluation of geometric detail and material composition by using shader-like fablets. The pipeline allows models to be specied easily and eciently. Additionally, I describe a streaming architecture for implementing Open-Fab; only a small fraction of the nal volume is stored in memory and output is fed to the printer with little startup delay. I demonstrate the OpenFab pipeline and programming model on a variety of multi-material objects.