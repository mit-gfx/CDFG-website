---
acknowlegement: ''
authors: Fredrik Kjolstad, Shoaib Kamil, Jonathan Ragan-Kelley, David I. W. Levin, Shinjiro Sueda, Desai Chen, Etienne Vouga, Danny M. Kaufman, Gurtej Kanwar, Wojciech Matusik, Saman Amarasinghe
featured_image: assets/images/simit_itok=Sz8V0o99.jpg
layout: publication
project_website: http://simit-lang.org/
publication: ACM Transactions on Graphics 2016
publication_link: assets/files/simit_0.pdf
title: 'Simit: A Language for Physical Simulation'
date: 2016-01-01 12:00:00 -0700
---

With existing programming tools, writing high-performance simulation code is labor intensive and requires sacrificing readability and portability. The alternative is to prototype simulations in a high-level language like Matlab, thereby sacrificing performance. The Matlab programming model naturally describes the behavior of an entire physical system using the language of linear algebra. However, simulations also manipulate individual geometric elements, which are best represented using linked data structures like meshes. Translating between the linked data structures and linear algebra comes at significant cost, both to the programmer and to the machine. High-performance implementations avoid the cost by rephrasing the computation in terms of linked or index data structures, leaving the code complicated and monolithic, often increasing its size by an order of magnitude.