---
layout: publication
title: Towards Spatially Varying Gloss Reproduction for 3D Printing
publication: Siggraph Asia
publication_link: /assets/files/SpatiallyVaryingGloss.pdf
authors: Michal Piovar&ccaron;i, Michael Foshey, Vahid Babaei, Szymon
  Rusinkiewicz, Wojciech Matusik, Piotr Didyk
featured_image: /assets/images/SpatiallyVaryingGloss_teaser.png
acknowlegement: "We would like to thank Sebastian Cucerca for his help with
  measuring the varnish samples, Gretchen M Eggers for her help with calibrating
  the jetting nozzles, and Bernd Bickel for his prompt help with printing the
  colored heightfields. This work is graciously supported by the following grant
  agencies: ERC Starting Grant (PERDY-804226), NSF (grants CHS-1617236,
  IIS-1815070, and IIS- 1815585)."
date: 2020-09-03 12:00:00 -0700
---
3D printing technology is a powerful tool for manufacturing complex shapes with high-quality textures. Gloss, next to color and shape, is one of the most salient visual aspects of an object. Unfortunately, printing a wide range of spatially-varying gloss properties using state-of-the-art 3D printers is challenging as it relies on geometrical modifications to achieve the desired appearance. A common post-processing step is to apply off-the-shelf varnishes that modify the final gloss. The main difficulty in automating this process lies in the physical properties of the varnishes which owe their appearance to a high concentration of large particles and as such, they cannot be easily deposited with current 3D color printers. As a result, fine-grained control of gloss properties using today’s 3D printing technologies is limited in terms of both spatial resolution and the range of achievable gloss. We address the above limitations and propose new printing hardware based on piezo-actuated needle valves capable of jetting highly viscous varnishes. Based on the new hardware setup, we present the complete pipeline for controlling the gloss of a given 2.5 D object, from printer calibration, through material selection, to the manufacturing of models with spatially-varying reflectance. Furthermore, we discuss the potential integration with current 3D printing technology. Apart from being a viable solution for 3D printing, our method offers an additional and essential benefit of separating color and gloss fabrication which makes the process more flexible and enables high-quality color and gloss reproduction.