---
acknowlegement: This work was supported by the ERC Consolidator Grant 4DReply (770784).
authors: Mallikarjun B R, Ayush Tewari, Tae-Hyun Oh, Tim Weyrich, Bernd Bickel, Hans-Peter Seidel, Hanspeter Pfister, Wojciech Matusik, Mohamed Elgharib, Christian Theobalt
featured_image: /assets/images/monocular.jpg
layout: publication
project_website: https://vcai.mpi-inf.mpg.de/projects/FaceReflectanceFields/
publication: CVPR
publication_link: https://vcai.mpi-inf.mpg.de/projects/FaceReflectanceFields/
title: Monocular Reconstruction of Neural Face Reflectance Fields
date: 2021-10-22 12:00:00 -0700
---
The reflectance field of a face describes the reflectance properties responsible for complex lighting effects including diffuse, specular, inter-reflection and self shadowing. Most existing methods for estimating the face reflectance from a monocular image assume faces to be diffuse with very few approaches adding a specular component. This still leaves out important perceptual aspects of reflectance as higher-order global illumination effects and self-shadowing are not modeled. We present a new neural representation for face reflectance where we can estimate all components of the reflectance responsible for the final appearance from a single monocular image. Instead of modeling each component of the reflectance separately using parametric models, our neural representation allows us to generate a basis set of faces in a geometric deformation-invariant space, parameterized by the input light direction, viewpoint and face geometry. We learn to reconstruct this reflectance field of a face just from a monocular image, which can be used to render the face from any viewpoint in any light condition. Our method is trained on a light-stage training dataset, which captures 300 people illuminated with 150 light conditions from 8 viewpoints. We show that our method outperforms existing monocular reflectance reconstruction methods, in terms of photorealism due to better capturing of physical premitives, such as sub-surface scattering, specularities, self-shadows and other higher-order effects.