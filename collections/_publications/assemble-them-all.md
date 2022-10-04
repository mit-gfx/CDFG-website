---
layout: publication
title: "Assemble Them All: Physics-Based Planning for Generalizable Assembly by Disassembly"
show_on_homepage: false
publication: SIGGRAPH Asia 2022
publication_link: /assets/files/assemble-them-all.pdf
authors: Yunsheng Tian, Jie Xu, Yichen Li, Jieliang Luo, Shinjiro Sueda, Hui Li, Karl D.D. Willis, Wojciech Matusik
featured_image: /assets/images/assemble-them-all.jpg
date: 2022-09-27T15:26:00.000Z
---
Assembly planning is the core of automating product assembly, maintenance, and recycling for modern industrial manufacturing. Despite its importance and long history of research, planning for mechanical assemblies when given the final assembled state remains a challenging problem. This is due to the complexity of dealing with arbitrary 3D shapes and the highly constrained motion required for real-world assemblies. In this work, we propose a novel method to efficiently plan physically plausible assembly motion and sequences for real-world assemblies. Our method leverages the assembly-by-disassembly principle and physics-based simulation to efficiently explore a reduced search space. To evaluate the generality of our method, we define a large-scale dataset consisting of thousands of physically valid industrial assemblies with a variety of assembly motions required. Our experiments on this new benchmark demonstrate we achieve a state-of-the-art success rate and the highest computational efficiency compared to other baseline algorithms. Our method also generalizes to rotational assemblies (e.g., screws and puzzles) and solves 80-part assemblies within several minutes.