---
acknowlegement: We would like to thank our reviewers for the helpful suggestions, XRite (especially Peter Ehbets) for lending us the spectrophotometer, David Kim and Wenshou Wang for help with materials, and Subra Subramanian, Javier Ramos, and Pitchaya Sitthi-amorn for help with printing. We thank Sergiu Gaman, Romain Rossier and Roger Hersch from EPFL for the gamut mapping software. We are grateful to Sylvain Paris for his feedback on the manuscript. The 3D models and images of physical materials were obtained from TurboSquid, GrabCAD, Wikimedia and ISO. Vahid Babaei acknowledges the Swiss National Science Foundation (SNSF) support, under grant number P2ELP2_161843.
authors: Vahid Babaei, Kiril Vidimče, Michael Foshey, Alexandre Kaspar, Piotr Didyk, Wojciech Matusik
featured_image: assets/images/color_3dp_itok=pOMGkHvu.jpg
layout: publication
date: 2017-01-01 12:00:00 -0700
publication: ACM Transactions on Graphics (SIGGRAPH 2017)
publication_link: assets/files/Color3DP_compressed.pdf
title: 'Color Contoning for 3D Printing '
---

Appearance reproduction is an important aspect of 3D printing. Current color reproduction systems use halftoning methods that create colors through a spatial combination of different inks at the object’s surface. This introduces a variety of artifacts to the object, especially when viewed from a closer distance. In this work, we propose an alternative color reproduction method for 3D printing. Inspired by the inherent ability of 3D printers to layer different materials on top of each other, 3D color contoning creates colors by combining inks with various thicknesses inside the object’s volume. Since inks are inside the volume, our technique results in a uniform color surface<br/>
with virtually invisible spatial patterns on the surface. For color prediction, we introduce a simple and highly accurate spectral model that relies on a weighted regression of spectral absorptions. We fully characterize the proposed framework by addressing a number of problems, such as material arrangement, calculation of ink concentration, and 3D dot gain. We use a custom 3D printer to fabricate and validate our results.