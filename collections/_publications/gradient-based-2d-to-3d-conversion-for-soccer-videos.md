---
layout: publication
title: Gradient-based 2D-to-3D Conversion for Soccer Videos
show_on_homepage: false
publication: Proceedings of the 23rd ACM International Conference on Multimedia
publication_link: /assets/images/gradient-based-2d-to-3d-conversion-for-soccer-videos.pdf
authors: Calagari, Kiana, Mohamed Elgharib, Piotr Didyk, Alexandre Kaspar,
  Wojciech Matusik, and Mohamed Hefeeda
featured_image: /assets/images/image_gradient-based-2d-to-3d-conversionof-soccer-videos.png
acknowlegement: This research was supported by the QCRI-CSAIL partnership and by
  the NSF grant IIS-1111415.
date: 2015-10-01T14:27:00.000Z
---
A wide spread adoption of 3D videos and technologies is hindered by the lack of high-quality 3D content. One promising solution to address this problem is to use automated 2D-to-3D conversion. However, current conversion methods, while general, produce low-quality results with artifacts that are not acceptable to many viewers. We address this problem by showing how to construct a high-quality, domain-specific conversion method for soccer videos. We propose a novel, data-driven method that generates stereoscopic frames by transferring depth information from similar frames in a database of 3D stereoscopic videos. Creating a database of 3D stereoscopic videos with accurate depth is, however, very difficult. One of the key findings in this paper is showing that computer generated content in current sports computer games can be used to generate high-quality 3D video reference database for 2D-to-3D conversion methods. Once we retrieve similar 3D video frames, our technique transfers depth gradients to the target frame while respecting object boundaries. It then computes depth maps from the gradients, and generates the output stereoscopic video. We implement our method and validate it by conducting user-studies that evaluate depth perception and visual comfort of the converted 3D videos. We show that our method produces high-quality 3D videos that are almost indistinguishable from videos shot by stereo cameras. In addition, our method significantly outperforms the current state-of-the-art method. For example, up to 20% improvement in the perceived depth is achieved by our method, which translates to improving the mean opinion score from Good to Excellent.