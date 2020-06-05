---
acknowlegement: We thank the anonymous reviewers for their helpful comments; Philipp Herholz for early explorations; Alessia Marra for model design. This work has been supported by the SOMA project (European Commission, Horizon 2020 Framework Programme, H2020-ICT-645599).
authors: Vittorio Megaro*, Espen Knoop*, Andrew Spielberg*, David I.W. Levin, Wojciech Matusik, Markus Gross, Bernhard Thomaszewski, Moritz Bächer
featured_image: assets/images/cable_driven_robots_itok=BTm948-X.png
layout: publication
project_website: https://www.disneyresearch.com/publication/designing-cable-driven-actuation-networks-for-kinematic-chains-and-trees/
publication: ACM SIGGRAPH / Eurographics Symposium on Computer Animation (SCA) 2017
publication_link: assets/files/cable_driven_robots.pdf
title: Designing Cable-Driven Actuation Networks for Kinematic Chains and Trees
date: 2017-01-01 12:00:00 -0700
---

In this paper, we present an optimization-based approach for the design of cable-driven kinematic chains and trees. Our system takes as input a hierarchical assembly consisting of rigid links jointed together with hinges. The user also specifies a set of target poses or keyframes using inverse kinematics. Our approach places torsional springs at the joints and computes a cable network that allows us to reproduce the specified target poses. We start with a large set of cables that have randomly chosen routing points and we gradually remove the redundancy. Then we refine the routing points taking into account the path between poses or keyframes in order to further reduce the number of cables and minimize required control forces. We propose a reduced coordinate formulation that links control forces to joint angles and routing points, enabling the co-optimization of a cable network together with the required actuation forces. We demonstrate the efficacy of our technique by designing and fabricating a cable-driven, animated character, an animatronic hand, and a specialized gripper.