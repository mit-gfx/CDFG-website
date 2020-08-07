---
acknowlegement: ''
authors: Maria Shugrina, Ariel Shamir, Wojciech Matusik
featured_image: /assets/images/fab-forms_itok=AHyIOVPU.png
layout: publication
date: 2015-01-01 12:00:00 -0700
publication: ACM Transactions on Graphics (SIGGRAPH 2015)
publication_link: /assets/files/fabforms_paper.pdf
title: 'Fab Forms: Customizable Objects for Fabrication with Validity and Geometry Caching'
---

We address the problem of allowing casual users to customize parametric models while maintaining their valid state as 3D-printable functional objects. We define **Fab Form **as any design representation that lends itself to **interactive **customization by a novice user, while remaining **valid and manufacturable**. We propose a method to achieve these **Fab Form **requirements for general parametric designs tagged with a general set of automated validity tests and a small number of parameters exposed to the casual user. Our solution separates **Fab Form **evaluation into a precomputation stage and a runtime stage. Parts of the geometry and design validity (such as manufacturability) are evaluated and stored in the precomputation stage by adaptively sampling the design space. At runtime the remainder of the evaluation is performed. This allows interactive navigation in the valid regions of the design space using an automatically generated Web user interface (UI). We evaluate our approach by converting several parametric models into corresponding **Fab Forms**.