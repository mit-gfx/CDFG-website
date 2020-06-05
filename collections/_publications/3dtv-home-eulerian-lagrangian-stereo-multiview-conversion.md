---
acknowlegement: ''
authors: Petr Kellnhofer, Piotr Didyk, Szu-Po Wang, Pitchaya Sitthi-Amorn, William Freeman, Fredo Durand, Wojciech Matusik
featured_image: assets/images/home3d_itok=oP01ceMJ.jpg
layout: publication
project_website: https://people.csail.mit.edu/pkellnho/Home3D/
publication: ACM Transactions on Graphics (SIGGRAPH 2017)
publication_link: assets/files/home3d.pdf
title: '3DTV at Home: Eulerian-Lagrangian Stereo-to-Multiview Conversion '
date: 2017-01-01 12:00:00 -0700
---

Stereoscopic 3D (S3D) movies have become widely popular in the movie theaters, but the adoption of S3D at home is low even though most TV sets support S3D. It is widely believed that S3D with glasses is not the right approach for the home. A much more appealing approach is to use automultiscopic displays that provide a glasses-free 3D experience to multiple viewers. A technical challenge is the lack of native multiview content that is required to deliver a proper view of the scene for every viewpoint. Our approach takes advantage of the abundance of stereoscopic 3D movies. We propose a real-time system that can convert stereoscopic video to a high-quality, multiview video that can be directly fed to automultiscopic displays. Our algorithm uses a wavelet-based decomposition of stereoscopic images with per-wavelet disparity estimation. A key to our solution lies in combining Lagrangian and Eulerian approaches for both the disparity estimation and novel view synthesis, which leverages the complementary advantages of both techniques. The solution preserves all the features of Eulerian methods, e.g. subpixel accuracy, high performance, robustness to ambiguous depth cases, and easy integration of inter-view aliasing while maintaining the advantages of Lagrangian approaches, e.g. robustness to large disparities and possibility of performing non-trivial disparity manipulations through both view extrapolation and interpolation. The method achieves real-time performance on current GPUs. Its design also enables an easy hardware implementation that is demonstrated using a field-programmable gate array. We analyze the visual quality and robustness of our technique on a number of synthetic and real-world examples. We also perform a user experiment which demonstrates benefits of the technique when compared to existing solutions.