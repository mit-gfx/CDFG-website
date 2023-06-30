---
layout: publication
title: "Procedural Metamaterials: A Unified Procedural Graph for Metamaterial Design"
show_on_homepage: false
publication: TOG
authors: Liane Makatura*, Bohan Wang*, Yi-Lu Chen, Bolei Deng, Chris Wojtan, Bernd Bickel, and Wojciech Matusik (* = joint first authors)
featured_image: assets/images/procedural_metamaterials_representative_image_rgb.jpg
publication_link: /assets/files/Procedural_Metamaterials_Main_Paper.pdf
project_website: 
date: 2023-06-29 12:00:00 -0700
acknowledgement: "The authors would like to thank Mina Konaković Luković and Michael Foshey for their early contributions to this project; David Palmer and Paul Zhang for their insightful discussions about minimal surfaces and the CSCM; Julian Panetta for providing the Elastic Textures code; and Hannes Hergeth for his feedback and support. We also thank our user study participants and anonymous reviewers. This material is based upon work supported by the National Science Foundation (NSF) Graduate Research Fellowship under Grant No. 2141064; the MIT Morningside Academy for Design Fellowship; the Defense Advanced Research Projects Agency (DARPA) Grant No. FA8750-20-C-0075; the ERC Consolidator Grant No. 101045083, \"CoDiNA: Computational Discovery of Numerical Algorithms for Animation and Simulation of Natural Phenomena\"; and the NewSat project, which is co-funded by the Operational Program for Competitiveness and Internationalisation (COMPETE2020), Portugal 2020, the European Regional Development Fund (ERDF), and the Portuguese Foundation for Science and Technology (FTC) under the MIT Portugal program."

---


We introduce a compact, intuitive procedural graph representation for cellular metamaterials, which are small-scale, tileable structures that can be architected to exhibit many useful material properties. Because the structures' "architectures" vary widely -- with elements such as beams, thin shells, and solid bulks -- it is difficult to explore them using existing representations. Generic approaches like voxel grids are versatile, but it is cumbersome to represent and edit individual structures; architecture-specific approaches address these issues, but are incompatible with one another. By contrast, our procedural graph succinctly represents the construction process for any structure using a simple skeleton annotated with spatially-varying thickness. To express the highly-constrained triply periodic minimal surfaces (TPMS) in this manner, we present the first fully-automated version of the conjugate surface construction method, which allows novices to create complex TPMS from intuitive input. We demonstrate our representation’s expressiveness, accuracy, and compactness by constructing a wide range of established structures and hundreds of novel structures with diverse architectures and material properties. We also conduct a user study to verify our representa- tion’s ease-of-use and ability to expand engineers' capacity for exploration.
