---
layout: publication
title: "PhotoApp: photorealistic appearance editing of head portraits"
show_on_homepage: false
publication: ACM Transactions on Graphics
publication_link: https://dl.acm.org/doi/pdf/10.1145/3450626.3459765
authors: B.R. Mallikarjun, A. Tewari,  A.Dib, T. Weyrich,  B. Bickel,  H-P
  Seidel,  H. Pfister, W. Matusik,  L.Chevallier,  M.Elgharib, C. Theobalt
acknowlegement: This work was supported by the ERC Consolidator Grant 4DReply
  (770784). We also acknowledge support from Technicolor and InterDigital. We
  thank Tiancheng Sun for kindly helping us with the comparisons with Sun et al.
  \[2019].
date: 2021-08-20T19:03:14.294Z
---
Photorealistic editing of head portraits is a challenging task as humans are very sensitive to inconsistencies in faces. We present an approach for highquality intuitive editing of the camera viewpoint and scene illumination (parameterised with an environment map) in a portrait image. This requires our method to capture and control the full reflectance field of the person in the image. Most editing approaches rely on supervised learning using training data captured with setups such as light and camera stages. Such datasets are expensive to acquire, not readily available and do not capture all the rich variations of in-the-wild portrait images. In addition, most supervised approaches only focus on relighting, and do not allow camera viewpoint editing. Thus, they only capture and control a subset of the reflectance field. Recently, portrait editing has been demonstrated by operating in the generative model space of StyleGAN. While such approaches do not require direct supervision, there is a significant loss of quality when compared to the supervised approaches. In this paper, we present a method which learns from limited supervised training data.