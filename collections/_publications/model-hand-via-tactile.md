---
authors: Qiang Zhang*, Yunzhu Li*, Yiyue Luo, Wan Shou, Michael Foshey, Junchi Yan, Joshua B. Tenenbaum, Wojciech Matusik, Antonio Torralba
featured_image: /assets/images/phystouch.jpg
layout: publication
project_website: http://phystouch.csail.mit.edu/
publication: IROS
publication_link: http://phystouch.csail.mit.edu/
title: Dynamic Modeling of Hand-Object Interactions via Tactile Sensing
date: 2021-10-22 12:00:00 -0700
---
Tactile sensing is critical for humans to perform everyday tasks. While significant progress has been made in analyzing object grasping from vision, it remains unclear how we can utilize tactile sensing to reason about and model the dynamics of hand-object interactions. In this work, we employ a high-resolution tactile glove to perform four different interactive activities on a diversified set of objects. We build our model on a cross-modal learning framework and generate the labels using a visual processing pipeline to supervise the tactile model, which can then be used on its own during the test time. The tactile model aims to predict the 3d locations of both the hand and the object purely from the touch data by combining a predictive model and a contrastive learning module. This framework can reason about the interaction patterns from the tactile data, hallucinate the changes in the environment, estimate the uncertainty of the prediction, and generalize to unseen objects. We also provide detailed ablation studies regarding different system designs as well as visualizations of the predicted trajectories. This work takes a step on dynamics modeling in hand-object interactions from dense tactile sensing, which opens the door for future applications in activity learning, human-computer interactions, and imitation learning for robotics.