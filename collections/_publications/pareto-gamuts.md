---
layout: publication
title: "Pareto Gamuts: Exploring Optimal Designs Across Varying Contexts"
show_on_homepage: false
publication: SIGGRAPH
publication_link: http://paretogamuts.csail.mit.edu/Pareto_Gamuts_Paper_Final.pdf
authors: Liane Makatura, Minghao Guo, Adriana Schulz, Justin Solomon, and
  Wojciech Matusik
featured_image: /assets/images/Pareto-gamuts-teaser.jpg
project_website: http://paretogamuts.csail.mit.edu
date: 2021-05-11 12:00:00 -0700
acknowledgement: The authors thank Harrison Wang for his early contributions;
  Hannes Hergeth for his insights and visualization tool; Paul Zhang, David
  Palmer, and Ed Chien for their mathematical insights; Tim Erps, Mike Foshey,
  Andy Spielberg, Beichen Li, and James Minor for engineering examples; and
  Cartemere for the bike illustration in Fig. 2 and the video. This material is
  based upon work supported by the National Science Foundation (NSF) (Grant No.
  IIS-1955697), the NSF Graduate Research Fellowship (Grant No. 1122374), the
  Intelligence Advanced Research Projects Agency (Grant No. 2019-19020100001),
  and the Defense Advanced Research Projects Agency (Grant No. FA8750-20-C-
  0075). The MIT Geometric Data Processing group acknowledges the generous
  support of Army Research Office grant W911NF2010168, of Air Force Office of
  Scientific Research award FA9550-19-1-031, of NSF grant IIS-1838071, from the
  CSAIL Systems that Learn program, from the MIT–IBM Watson AI Laboratory, from
  the Toyota–CSAIL Joint Research Center, from a gift from Adobe Systems, from
  an MIT.nano Immersion Lab/NCSOFT Gaming Program seed grant, and from the
  Skoltech–MIT Next Generation Program.
---

Manufactured parts are meticulously engineered to perform well with respect to several conflicting metrics, like weight, stress, and cost. The best achievable trade-offs reside on the Pareto front, which can be discovered via performance-driven optimization. The objectives that define this Pareto front often incorporate assumptions about the context in which a part will be used, including loading conditions, environmental influences, material properties, or regions that must be preserved to interface with a surrounding assembly. Existing multi-objective optimization tools are only equipped to study one context at a time, so engineers must run independent optimizations for each context of interest. However, engineered parts frequently appear in many contexts: wind turbines must perform well in many wind speeds, and a bracket might be optimized several times with its bolt-holes fixed in different locations on each run. In this paper, we formulate a framework for variable-context multi-objective optimization. We introduce the Pareto gamut, which captures Pareto fronts over a range of contexts. We develop a global/local optimization algorithm to discover the Pareto gamut directly, rather than discovering a single fixed-context “slice” at a time. To validate our method, we adapt existing multi-objective optimization benchmarks to contextual scenarios. We also demonstrate the practical utility of Pareto gamut exploration for several engineering design problems.