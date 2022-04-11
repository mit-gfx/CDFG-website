---
layout: publication
authors: Karl D.D. Willis, Pradeep Kumar Jayaraman, Hang Chu, Yunsheng Tian, Yifei Li, Daniele Grandi, Aditya Sanghi, Linh Tran, Joseph G. Lambourne, Armando Solar-Lezama, Wojciech Matusik
featured_image: /assets/images/joinable.png
publication: CVPR
publication_link: https://arxiv.org/pdf/2111.12772.pdf
project_website: https://github.com/AutodeskAILab/Fusion360GalleryDataset/tree/master/docs#assembly-dataset
title: "JoinABLe: Learning Bottom-up Assembly of Parametric CAD Joints"
date: 2022-3-28 12:00:00 -0700
---
Physical products are often complex assemblies combining a multitude of 3D parts modeled in computer-aided design (CAD) software. CAD designers build up these assemblies by aligning individual parts to one another using constraints called joints. In this paper we introduce JoinABLe, a learning-based method that assembles parts together to form joints. JoinABLe uses the weak supervision available in standard parametric CAD files without the help of object class labels or human guidance. Our results show that by making network predictions over a graph representation of solid models we can outperform multiple baseline methods with an accuracy (79.53%) that approaches human performance (80%). Finally, to support future research we release the Fusion 360 Gallery assembly dataset, containing assemblies with rich information on joints, contact surfaces, holes, and the underlying assembly graph structure.