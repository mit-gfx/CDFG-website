---
acknowlegement: 'The authors would like to thank Ilya Baran for helpful suggestions and discussions, Michael Foshey, Nicholas Bandiera and Javier Ramos for discussions and for designing the models in the examples, and the team at Onshape for support with the API.'
authors: Adriana Schulz, Jie Xu, Bo Zhu, Changxi Zheng, Eitan Grinspun, Wojciech Matusik
featured_image: /assets/images/instantcad_itok=dDNgXw4c.jpg
layout: publication
project_website: http://people.csail.mit.edu/aschulz/optCAD/index.html
publication: ACM Transactions on Graphics (SIGGRAPH 2017)
publication_link: /assets/files/instantcad.pdf
title: Interactive Design Space Exploration and Optimization for CAD Models
date: 2017-01-01 12:00:00 -0700
---

Computer Aided Design (CAD) is a multi-billion dollar industry used by almost every mechanical engineer in the world to create practically every existing manufactured shape. CAD models are not only widely available but also extremely useful in the growing field of fabrication-oriented design because they are parametric by construction and capture the engineer’s design intent, including manufacturability. Harnessing this data, however, is challenging, because generating the geometry for a given parameter value requires time-consuming computations. Furthermore, the resulting meshes have different combinatorics, making the mesh data inherently dis- continuous with respect to parameter adjustments. In our work, we address these challenges and develop tools that allow interactive exploration and optimization of parametric CAD data. To achieve interactive rates, we use precomputation on an adaptively sampled grid and propose a novel scheme for interpolating in this domain where each sample is a mesh with different combinatorics. Specifically, we extract partial correspondences from CAD representations for local mesh morphing and propose a novel interpolation method for adaptive grids that is both continuous/smooth and local (i.e., the influence of each sample is constrained to the local regions where mesh morphing can be computed). We show examples of how our method can be used to interactively visualize and optimize objects with a variety of physical properties.