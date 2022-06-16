---
layout: publication
title: "DiffCloth: Differentiable Cloth Simulation with Dry Frictional Contact"
show_on_homepage: false
publication: ACM Transactions on Graphics (SIGGRAPH 2022)
publication_link: https://arxiv.org/pdf/2106.05306.pdf
authors: Yifei Li, Tao Du, Kui Wu, Jie Xu, Wojciech Matusik
featured_image: /assets/images/diffcloth.png
project_website: https://people.csail.mit.edu/liyifei/publication/diffcloth-differentiable-cloth-simulator/
acknowlegement: We thank Marco Renedo for his helpful discussions on the precon-
  ditioners, Junbang Liang for his help with running the baseline comparison
  code, and the anonymous reviewers for their helpful comments. This work was
  supported in part by the Defense Advanced Research Projects Agency (DARPA)
  under grant No. FA8750- 20-C-0075.
date: 2022-04-02 12:00:00 -0700
---
Cloth simulation has wide applications in computer animation, garment design, and robot-assisted dressing. This work presents a differentiable cloth simulator whose additional gradient information facilitates cloth-related applications. Our differentiable simulator extends a state-of-the-art cloth simulator based on Projective Dynamics (PD) and with dry frictional contact. We draw inspiration from previous work to propose a fast and novel method for deriving gradients in PD-based cloth simulation with dry frictional contact. Furthermore, we conduct a comprehensive analysis and evaluation of the usefulness of gradients in contact-rich cloth simulation. Finally, we demonstrate the efficacy of our simulator in a number of downstream applications, including system identification, trajectory optimization for assisted dressing, closed-loop control, inverse design, and real-to-sim transfer. We observe a substantial speedup obtained from using our gradient information in solving most of these applications.
