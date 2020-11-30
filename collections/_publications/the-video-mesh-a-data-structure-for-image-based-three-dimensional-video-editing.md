---
layout: publication
title: "The Video Mesh: A Data Structure for Image-based Three-dimensional Video
  Editing"
show_on_homepage: false
publication: 2011 IEEE International Conference on Computational Photography
  (ICCP), Pages 1-8
publication_link: /assets/images/the-video-mesh-a-data-structure-for-image-based-three-dimensional-video-editing.pdf
authors: Jiawen Chen, Sylvain Paris, Jue Wang, Wojciech Matusik, Michael Cohen,
  Fredo Durand
featured_image: /assets/images/image-the-video mesh.jpg
date: 2011-04-08T18:13:00.000Z
---
This paper introduces the video mesh, a data structure for representing video as 2.5D “paper cutouts.” The video mesh allows interactive editing of moving objects and modeling of depth, which enables 3D effects and post-exposure camera control. The video mesh sparsely encodes optical ow as well as depth, and handles occlusion using local layering and alpha mattes. Motion is described by a sparse set of points tracked over time. Each point also stores a depth value. The video mesh is a triangulation over this point set and per-pixel information is obtained by interpolation. The user rotoscopes occluding contours and we introduce an algorithm to cut the video mesh along them. Object boundaries are rened with per-pixel alpha values. The video mesh is at its core a set of texture mapped triangles, we leverage graphics hardware to enable interactive editing and rendering of a variety of effects. We demonstrate the effectiveness of our representation with special effects such as 3D viewpoint changes, object insertion, depth-of- eld manipulation, and 2D to 3D video conversion.