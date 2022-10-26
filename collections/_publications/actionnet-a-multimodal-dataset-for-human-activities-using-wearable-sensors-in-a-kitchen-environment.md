---
layout: publication
title: "ActionNet: A Multimodal Dataset for Human Activities Using Wearable
  Sensors in a Kitchen Environment"
show_on_homepage: false
publication: NeurIPS 2022
publication_link: /assets/images/actionnet.pdf
authors: Joseph DelPreto∗, Chao Liu∗, Yiyue Luo, Michael Foshey, Yunzhu Li,
  Antonio Torralba, Wojciech Matusik, and Daniela Rus
featured_image: /assets/images/3b1dff64-871c-44e8-a117-edb43348fd0c.png
date: 2022-10-24T17:03:57.935Z
---
This paper introduces ActionNet, a multimodal dataset and recording frame work with an emphasis on wearable sensing in a kitchen environment. It provides rich, synchronized data streams along with ground truth data to facilitate learning pipelines that could extract insights about how humans interact with the physical world during activities of daily living, and help lead to more capable and collab orative robot assistants. The wearable sensing suite captures motion, force, and attention information; it includes eye tracking with a first-person camera, fore arm muscle activity sensors, a body-tracking system using 17 inertial sensors, finger-tracking gloves, and custom tactile sensors on the hands that use a matrix of conductive threads. This is coupled with activity labels and with externally captured data from multiple RGB cameras, a depth camera, and microphones. The specific tasks recorded in ActionNet are designed to highlight lower-level physi cal skills and higher-level scene reasoning or action planning. They include simple object manipulations (e.g., stacking plates), dexterous actions (e.g., peeling or cutting vegetables), and complex action sequences (e.g., setting a table or loading a dishwasher). The resulting dataset and underlying experiment framework are available at [https://action-net.csail.mit.edu](https://action-net.csail.mit.edu/). Preliminary networks and analyses explore modality subsets and cross-modal correlations. ActionNet aims to sup port applications including learning from demonstrations, dexterous robot control, cross-modal predictions, and fine-grained action segmentation. It could also help inform the next generation of smart textiles that may one day unobtrusively send rich data streams to in-home collaborative or autonomous robot assistants.