---
acknowlegement: We would like to thank Stephen S Hamann for the advice on hardware prototype and Qi Sun for the early help on software design.
authors: Liang Shi, Fu-Chung Huang, Ward Lopes, Wojciech Matusik, David Luebke
featured_image: /assets/images/near-eye-light-field-holographic-rendering.JPG_itok=Zy0i7Rh8.jpeg
layout: publication
project_website: http://research.nvidia.com/publication/2017-11_%09Near-eye-Light-Field
publication: ACM Transactions of Graphics (SIGGRAPH ASIA 2017)
publication_link: /assets/files/near-eye-light-field-holographic-rendering.pdf
title: Near-eye Light Field Holographic Rendering with Spherical Waves for Wide Field of View Interactive 3D Computer Graphics
date: 2017-01-01 12:00:00 -0700
---

Holograms have high resolution and great depth of field allowing the eye to view a scene much like seeing through a virtual window. Unfortunately, computer generated holography (CGH) does not deliver the same promise due to hardware limitations under plane wave illumination and large computational cost. Light field displays have been popular due to their capability to provide continuous focus cue. However, light field displays suffer from the trade offs between spatial and angular resolution, and do not model diffraction. We present a light field based CGH rendering pipeline allowing for reproduction of high-definition 3D scenes with continuous depth and support of intra-pupil view dependent occlusion. Our rendering accurately accounts for diffraction and supports various types of reference illumination for holograms. We prevent under- and over-sampling and geometric clipping suffered in previous work. We also implement point-based methods with Fresnel integration that are orders of magnitude faster than the state of art, achieving interactive volumetric 3D graphics. To verify our computational results, we build a see-through near-eye color display prototype with CGH that enables co-modulation of both amplitude and phase. We show that our rendering accurately models the spherical illumination introduced by the eye piece and produces the desired 3D imaginary at designated depth. We also derive aliasing, theoretical resolution limits, depth of field, and other design trade-off space for near-eye CGH.