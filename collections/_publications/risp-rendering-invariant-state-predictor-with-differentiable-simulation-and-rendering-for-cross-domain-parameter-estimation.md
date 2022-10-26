---
layout: publication
title: "RISP: Rendering-Invariant State Predictor with Differentiable Simulation
  and Rendering for Cross-Domain Parameter Estimation"
show_on_homepage: false
publication: ICLR
publication_link: /assets/images/rendering-invariant.pdf
authors: Pingchuan Ma*, Tao Du*, Joshua B. Tenenbaum, Wojciech Matusik, Chuang Gan
featured_image: /assets/images/risp.jpg
project_website: https://sites.google.com/view/risp-iclr-2022/home
acknowlegement: We thank Sai Praveen Bangaru for our discussions on
  differentiable rendering. This work was supported by MIT-IBM Watson AI Lab and
  its member company Nexplore, ONR MURI, DARPA Machine Common Sense program, ONR
  (N00014-18-1-2847), and Mitsubishi Electric.
date: 2022-04-02T13:01:36.574Z
---
This work considers identifying parameters characterizing a physical system's dynamic motion directly from a video whose rendering configurations are inaccessible. Existing solutions require massive training data or lack generalizability to unknown rendering configurations. We propose a novel approach that marries domain randomization and differentiable rendering gradients to address this problem. Our core idea is to train a rendering-invariant state-prediction (RISP) network that transforms image differences into state differences independent of rendering configurations, e.g., lighting, shadows, or material reflectance. To train this predictor, we formulate a new loss on rendering variances using gradients from differentiable rendering. Moreover, we present an efficient, second-order method to compute the gradients of this loss, allowing it to be integrated seamlessly into modern deep learning frameworks. We evaluate our method in rigid-body and deformable-body simulation environments using four tasks: state estimation, system identification, imitation learning, and visuomotor control. We further demonstrate the efficacy of our approach on a real-world example: inferring the state and action sequences of a quadrotor from a video of its motion sequences. Compared with existing methods, our approach achieves significantly lower reconstruction errors and has better generalizability among unknown rendering configurations.