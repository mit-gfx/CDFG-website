---
layout: publication
title: Closed-Loop Control of Direct Ink Writing via Reinforcement Learning
show_on_homepage: false
publication: "SIGGRAPH "
publication_link: /assets/images/paper.pdf
authors: Michal Piovarči, Michael Foshey, Jie Xu, Timmothy Erps, Vahid Babaei,
  Piotr Didyk, Szymon Rusinkiewicz, Wojciech Matusik, and Bernd Bickel
featured_image: /assets/images/c68e0ca2-0d89-4265-be5a-69bcea65e11e.jpeg
project_website: https://misop.github.io/projects/DirectInkReinforcementLearning/index.html
acknowlegement: |-
  This work is graciously supported by the following grant agencies:\
  FWF Lise Meitner (Grant M 3319), SNSF (Grant 200502), ERC Starting\
  Grant (MATERIALIZABLE-715767), NSF (Grant IIS-181507)
date: 2022-08-02T15:13:00.000Z
---
Enabling additive manufacturing to employ a wide range of novel, functional materials can be a major boost to this technology. However, making such materials printable requires painstaking trial-and-error by an expert operator, as they typically tend to exhibit peculiar rheological or hysteresis properties. Even in the case of successfully finding the process parameters, there is no guarantee of print-to-print consistency due to material differences between batches. These challenges make closed-loop feedback an attractive option where the process parameters are adjusted on-the-fly. There are several challenges for designing an efficient controller: the deposition parameters are complex and highly coupled, artifacts occur after long time horizons, simulating the deposition is computationally costly, and learning on hardware is intractable. In this work, we demonstrate the feasibility of learning a closed-loop control policy for additive manufacturing using reinforcement learning. We show that approximate, but efficient, numerical simulation is sufficient as long as it allows learning the behavioral patterns of deposition that translate to real-world experiences. In combination with reinforcement learning, our model can be used to discover control policies that outperform baseline controllers. Furthermore, the recovered policies have a minimal sim-to-real gap. We showcase this by applying our control policy in-vivo on a single-layer printer using low and high viscosity materials.