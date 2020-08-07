---
acknowlegement: ''
authors: 'Netalee Efrat, Piotr Didyk, Mike Foshey, Wojciech Matusik, Anat Levin'
featured_image: /assets/images/cinema3d_itok=e01RGLwE.jpg
layout: publication
project_website: http://www.wisdom.weizmann.ac.il/~netefrat/cinema3D/
publication: ACM Transactions on Graphics (SIGGRAPH 2016)
publication_link: /assets/files/paper_2.pdf
title: 'Cinema 3D: Large Scale Automultiscopic Display'
date: 2016-01-01 12:00:00 -0700
---

While 3D movies are gaining popularity, viewers in a 3D cinema still need to wear cumbersome glasses in order to enjoy them. Automultiscopic displays provide a better alternative to the display of 3D content, as they present multiple angular images of the same scene without the need for special eyewear. However, automultiscopic displays cannot be directly implemented in a wide cinema setting due to variants of two main problems: (i) The range of angles at which the screen is observed in a large cinema is usually very wide, and there is an unavoidable tradeoff between the range of angular images supported by the display and its spatial or angular resolutions. (ii) Parallax is usually observed only when a viewer is positioned at a limited range of distances from the screen. This work proposes a new display concept, which supports automultiscopic content in a wide cinema setting. It builds on the typical structure of cinemas, such as the fixed seat positions and the fact that different rows are located on a slope at different heights. Rather than attempting to display many angular images spanning the full range of viewing angles in a wide cinema, our design only displays the narrow angular range observed within the limited width of a single seat. The same narrow range content is then replicated to all rows and seats in the cinema. To achieve this, it uses an optical construction based on two sets of parallax barriers, or lenslets, placed in front of a standard screen. This paper derives the geometry of such a display, analyses its limitations, and demonstrates a proof-of-concept prototype.