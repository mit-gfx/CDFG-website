---
show_on_homepage: true
acknowledgement: "We are grateful to James McCann and his group at Carnegie Mellon University for making the necessary tools to process Knitout files available. We thank Kelly Lam for her initial segmentation work, Tom Buehler for the video composition, Ed Chien and David Palmer for the early geometry discussions, Paul Zhang for the later discussion on geometry terminology, Nicholas Sharp for making Geometry Central available, Timothy Erps and Mike Foshey for the general lab maintenance, and Buttercup Foshey for the moral and inspirational support."
authors: Alexandre Kaspar, Kui Wu, Yiyue Luo, Liane Makatura and Wojciech Matusik
featured_image: /assets/images/KnitSketching-teaser.jpg
layout: publication
project_website: http://knitsketching.csail.mit.edu/
publication: SIGGRAPH
publication_link: /assets/files/ks-paper.pdf
title: 'Knit Sketching: from Cut and Sew Patterns to Machine-Knit Garments'
date: 2021-05-19 12:00:00 -0700
---

We present a novel workflow to design and program knitted garments for industrial whole-garment knitting machines. Inspired by traditional garment making based on cutting and sewing, we propose a sketch representation with additional annotations necessary to model the knitting process. Our system bypasses complex editing operations in 3D space, which allows us to achieve interactive editing of both the garment shape and its underlying time process. We provide control of the local knitting direction, the location of important course interfaces, as well as the placement of stitch irregularities that form seams in the final garment. After solving for the constrained knitting time process, the garment sketches are automatically segmented into a minimal set of simple regions that can be knitted using simple knitting procedures. Finally, our system optimizes a stitch graph hierarchically while providing control over the tradeoff between accuracy and simplicity. We showcase different garments created with our web interface.
