---
acknowlegement: ''
authors: Desai Chen, David I.W. Levin, Shinjiro Sueda, Wojciech Matusik
featured_image: assets/images/data-driven-fem_itok=DXHGsppW.png
layout: publication
date: 2015-01-01 12:00:00 -0700
publication: ACM Transactions on Graphics (SIGGRAPH 2015)
publication_link: assets/files/DDFEMMain_0.pdf
title: Data-Driven Finite Elements for Geometry and Material Design
---

Crafting the behavior of a deformable object is difficult—whether it is a biomechanically accurate character model or a new multimaterial 3D printable design. Getting it right requires constant iteration, performed either manually or driven by an automated system. Unfortunately, previous algorithms for accelerating three-dimensional finite element analysis of elastic objects suffer from expensive precomputation stages that rely on a priori knowledge of the object’s geometry and material composition. In this paper we introduce Data-Driven Finite Elements as a solution to this problem. Given a material palette, our method constructs a metamaterial library which is reusable for subsequent simulations, regardless of object geometry and/or material composition. At runtime, we perform fast coarsening of a simulation mesh using a simple table lookup to select the appropriate metamaterial model for the coarsened elements. When the object’s material distribution or geometry changes, we do not need to update the metamaterial library—we simply need to update the metamaterial assignments to the coarsened elements. An important advantage of our approach is that it is applicable to non-linear material models. This is important for designing objects that undergo finite deformation (such as those produced by multimaterial 3D printing). Our method yields speed gains of up to two orders of magnitude while maintaining good accuracy. We demonstrate the effectiveness of the method on both virtual and 3D printed examples in order to show its utility as a tool for deformable object design.