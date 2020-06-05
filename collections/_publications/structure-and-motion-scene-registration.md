---
acknowlegement: ''
authors: Tali Basha, Shai Avidan, Alexander Hornung, and Wojciech Matusik
featured_image: assets/images/scenereg_itok=mBghIWdr.jpg
layout: publication
date: 2012-01-01 12:00:00 -0700
publication: ' IEEE Conference on Computer Vision and Pattern Recognition (CVPR) 2012'
publication_link: assets/files/SceneReg.pdf
title: Structure and Motion from Scene Registration
---

We propose a method for estimating the 3D structure and the dense 3D motion (scene flow) of a dynamic nonrigid 3D scene, using a camera array. The core idea is to use a dense multi-camera array to construct a novel, dense 3D volumetric representation of the 3D space where each voxel holds an estimated intensity value and a confidence measure of this value. The problem of 3D structure and 3D motion estimation of a scene is thus reduced to a nonrigid registration of two volumes — hence the term ”Scene Registration”. Registering two dense 3D scalar volumes does not require recovering the 3D structure of the scene as a preprocessing step, nor does it require explicit reasoning about occlusions. From this nonrigid registration we accurately extract the 3D scene flow and the 3D structure of the scene, and successfully recover the sharp discontinuities in both time and space. We demonstrate the advantages of our method on a number of challenging synthetic and real data sets.