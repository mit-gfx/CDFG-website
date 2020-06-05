---
acknowlegement: ''
authors: Jim McCann, Lea Albaugh, Vidya Narayanan, April Grow, Wojciech Matusik, Jen Mankoff, Jessica Hodgins
featured_image: assets/images/3d-knitting_0_itok=uYdlyV5J.png
layout: publication
project_website: https://www.disneyresearch.com/publication/machine-knitting-compiler/
publication: ACM Transactions on Graphics (SIGGRAPH 2016)
publication_link: assets/files/paper_1.pdf
title: A Compiler for 3D Machine Knitting
date: 2016-01-01 12:00:00 -0700
---

Industrial knitting machines can produce finely detailed, seamless, 3D surfaces quickly and without human intervention. However, the tools used to program them require detailed manipulation and understanding of low-level knitting operations. We present a compiler that can automatically turn assemblies of high-level shape primitives (tubes, sheets) into low-level machine instructions. These high-level shape primitives allow knit objects to be scheduled, scaled, and otherwise shaped in ways that require thousands of edits to low-level instructions. At the core of our compiler is a heuristic transfer planning algorithm for knit cycles, which we prove is both sound and complete. This algorithm enables the translation of high-level shaping and scheduling operations into needle-level operations. We show a wide range of examples produced with our compiler and demonstrate a basic visual design interface that uses our compiler as a backend.