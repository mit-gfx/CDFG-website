---
layout: publication
title: Learning Preconditioners for Conjugate Gradient PDE Solvers
show_on_homepage: false
publication: ICML 2023
publication_link: /assets/images/https-people.csail.mit.edu-yichenl-projects-preconditioner-icml2023_preconditionergnn_cameraready_revised.pdf
authors: "Yichen Li, Peter Yichen Li, Tao Du, Wojciech Matusik "
featured_image: /assets/images/43e343eb-0e4f-4369-8304-c95871705ca8.png
project_website: ""
acknowlegement: The work is supported by the MIT Robert Shillman Fellowship.
date: 2023-07-26T19:31:00.000Z
---
Efficient numerical solvers for partial differential equations empower science and engineering. One commonly employed numerical solver is the preconditioned conjugate gradient (PCG) algo- rithm, whose performance is largely affected by the preconditioner quality. However, designing high-performing preconditioner with traditional numerical methods is highly non-trivial, often re- quiring problem-specific knowledge and meticu- lous matrix operations. We present a new method that leverages learning-based approach to obtain an approximate matrix factorization to the sys- tem matrix to be used as a preconditioner in the context of PCG solvers. Our high-level intuition comes from the shared property between precon- ditioners and network-based PDE solvers that ex- cels at obtaining approximate solutions at a low computational cost. Such observation motivates us to represent preconditioners as graph neural networks (GNNs). In addition, we propose a new loss function that rewrites traditional pre- conditioner metrics to incorporate inductive bias from PDE data distributions, enabling effective training of high-performing preconditioners. We conduct extensive experiments to demonstrate the efficacy and generalizability of our proposed approach on solving various 2D and 3D linear second-order PDEs.1