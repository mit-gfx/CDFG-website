---
layout: publication
title: "Fusion 360 Gallery: A Dataset and Environment for Programmatic CAD
  Reconstruction"
show_on_homepage: false
publication: SIGGRAPH
publication_link: https://arxiv.org/pdf/2010.02392.pdf
authors: Karl DD Willis, Yewen Pu, Jieliang Luo, Hang Chu, Tao Du, Joseph G
  Lambourne, Armando Solar-Lezama, Wojciech Matusik
featured_image: /assets/images/Fusion360Gallery-teaser.png
project_website: https://arxiv.org/pdf/2010.02392.pdf
date: 2021-08-16 12:00:00 -0700
---
Parametric computer-aided design (CAD) is a standard paradigm used to design manufactured objects, where a 3D shape is represented as a program supported by the CAD software. Despite the pervasiveness of parametric CAD and a growing interest from the research community, currently there does not exist a dataset of realistic CAD models in a concise programmatic form. In this paper we present the Fusion 360 Gallery, consisting of a simple language with just the sketch and extrude modeling operations, and a dataset of 8,625 human design sequences expressed in this language. We also present an interactive environment called the Fusion 360 Gym, which exposes the sequential construction of a CAD program as a Markov decision process, making it amendable to machine learning approaches. As a use case for our dataset and environment, we define the CAD reconstruction task of recovering a CAD program from a target geometry. We report results of applying state-of-the-art methods of program synthesis with neurally guided search on this task.