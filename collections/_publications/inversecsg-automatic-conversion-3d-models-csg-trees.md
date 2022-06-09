---
acknowlegement: ''
authors: 'Tao Du, Jeevana Priya Inala, Yewen Pu, Andrew Spielberg, Adriana Schulz, Daniela Rus, Armando Solar-Lezama, Wojciech Matusik'
featured_image: /assets/images/inverse_csg_itok=sa2IdMm7.jpg
layout: publication
date: 2018-01-01 12:00:00 -0700
project_website: http://inversecsg.csail.mit.edu/
publication: ACM SIGGRAPH ASIA 2018
publication_link: /assets/files/inverse_csg.pdf
title: 'InverseCSG: Automatic Conversion of 3D Models to CSG Trees'
---

While computer-aided design is a major part of many modern manufacturing pipelines, the design files typically generated describe raw geometry. Lost in this representation is the procedure by which these designs were generated. In this paper, we present a method for reverse-engineering the process by which 3D models may have been generated, in the language of constructive solid geometry (CSG). Observing that CSG is a formal grammar, we formulate this inverse CSG problem as a program synthesis problem. Our solution is an algorithm that couples geometric processing with state-ofthe-art program synthesis techniques. In this scheme, geometric processing is used to convert the mixed discrete and continuous domain of CSG trees to a pure discrete domain where modern program synthesizers excel. We demonstrate the efficiency and scalability of our algorithm on several different examples, including those with over 100 primitive parts. We show that our algorithm is able to find simple programs which are close to the ground truth, and demonstrate our method’s applicability in mesh re-editing. Finally, we compare our method to prior state-of-the-art. We demonstrate that our algorithm dominates previous methods in terms of resulting CSG compactness and runtime, and can handle far more complex input meshes than any previous method.