---
acknowlegement: ''
authors: Desai Chen, Pitchaya Sitthi-amorn, Justin T. Lan, and Wojciech Matusik
featured_image: assets/images/multiplanar_itok=6mKw9hgd.jpg
layout: publication
date: 2013-01-01 12:00:00 -0700
publication: Computer Graphics Forum (EUROGRAPHICS 2013)
publication_link: assets/files/cut2013.pdf
title: Computing and Fabricating Multiplanar Models
---

We present a method for converting computer 3D models into physical equivalents. More specifically, we address the problem of approximating a 3D textured mesh using a small number of planar polygonal primitives that form a closed surface. This simplified representation allows us to easily manufacture individual components using computer controlled cutters (e.g., laser cutters or CNC machines). These polygonal pieces can be assembled into the final 3D model using internal planar connectors that are manufactured simultaneously. Our shape approximation algorithm iteratively assigns mesh faces to planar segments and slowly deforms these faces towards corresponding segments. This approach ensures that the output for a given closed mesh is still a closed mesh and avoids introducing self-intersections. After this step we also compute the shape of polygonal connectors that internally hold the whole mesh surface. Both the polygonal surface elements and connectors can be manufactured in a single cutting pass. We validate the use of our method by computing and manufacturing a variety of textured polyhedral models.