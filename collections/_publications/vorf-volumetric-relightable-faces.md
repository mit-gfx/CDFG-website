---
layout: publication
title: "VoRF: Volumetric Relightable Faces"
show_on_homepage: false
publication: British Machine Vision Conference (BMVC) 2022 (Oral)
publication_link: https://vcai.mpi-inf.mpg.de/projects/VoRF/
authors: Pramod Rao, Mallikarjun B.R, Gereon Fox, Tim Weyrich, Bernd Bickel,
  Hanspeter Pfister, Wojciech Matusik, Ayush Tewari1, Christian Theobalt,
  Mohamed Elgharib
featured_image: /assets/images/a200616f-efcf-4568-bc17-efa44ceefcf1.png
acknowlegement: This work was supported by the ERC Consolidator Grant 4DReply (770784).
date: 2023-05-01T18:21:55.758Z
---


Portrait viewpoint and illumination editing is an important problem with several applications in VR/AR, movies, and photography. Comprehensive knowledge of geometry and illumination is critical for obtaining photorealistic results. Current methods are unable to explicitly model in 3D while handing both viewpoint and illumination editing from a single image. In this paper, we propose VoRF, a novel approach that can take evena single portrait image as input and relight human heads under novel illuminations that can be viewed from arbitrary viewpoints. VoRF represents a human head as a continuous volumetric field and learns a prior model of human heads using a coordinate-based MLP with individual latent spaces for identity and illumination. The prior model is learnt in an auto-decoder manner over a diverse class of head shapes and appearances, allowing VoRF to generalize to novel test identities from a single input image. Additionally, VoRF has a reflectance MLP that uses the intermediate features of the prior model for rendering One-Light-at-A-Time (OLAT) images under novel views. We synthesize novel illuminations by combining these OLAT images with target environment maps. Qualitative and quantitative evaluations demonstrate the effectiveness of VoRF for relighting and novel view synthesis, even when applied to unseen subjects under uncontrolled illuminations.