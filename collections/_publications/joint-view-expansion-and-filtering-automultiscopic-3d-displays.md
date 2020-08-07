---
acknowlegement: ''
authors: 'Piotr Didyk, Pitchaya Sitthi-Amorn, William T. Freeman, Frédo Durand, Wojciech Matusik'
featured_image: /assets/images/auto-3d-display_itok=4Q93bjXR.png
layout: publication
date: 2013-01-01 12:00:00 -0700
publication: ACM Transactions on Graphics (SIGGRAPH Asia 2013)
publication_link: ''
title: Joint View Expansion and Filtering for Automultiscopic 3D Displays
---

Multi-view autostereoscopic displays provide an immersive, glasses-free 3D viewing experience, but they require correctly filtered content from multiple viewpoints. This, however, cannot be easily obtained with current stereoscopic production pipelines. We provide a practical solution that takes a stereoscopic video as an input and converts it to multi-view and filtered video streams that can be used to drive multi-view autostereoscopic displays. The method combines a phase-based video magnification and an interperspective antialiasing into a single filtering process. The whole algorithm is simple and can be efficiently implemented on current GPUs to yield a near real-time performance. Furthermore, the ability to retarget disparity is naturally supported. Our method is robust and works well for challenging video scenes with defocus blur, motion blur, transparent materials, and specularities. We show that our results are superior when compared to the state-of-the-art depth-based rendering methods. Finally, we showcase the method in the context of a real-time 3D videoconferencing system that requires only two cameras.