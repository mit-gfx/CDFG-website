---
acknowlegement: ''
authors: Andrew Adams, Eino-Ville Talvala, Sung Hee Park, David E. Jacobs, Boris Ajdin, Natasha Gelfand, Jennifer Dolson, Daniel Vaquero, Jongmin Baek, Marius Tico, Hendrik P. A. Lensch, Wojciech Matusik, Kari Pulli, Mark Horowitz, Marc Levoy
featured_image: assets/images/fcam_1_itok=yobrUQ2d.jpg
layout: publication
project_website: http://graphics.stanford.edu/papers/fcam/
publication: Communications of the ACM, 55(11), 2012
publication_link: assets/files/adams-frankencamera-cacm12.pdf
title: 'The Frankencamera: an experimental platform for computational photography'
date: 2013-01-01 12:00:00 -0700
---

Although there has been much interest in computational photography within the research and photography communities, progress has been hampered by the lack of a portable, programmable camera with sufficient image quality and computing power. To address this problem, we have designed and implemented an open architecture and application programming interface (API) for such cameras: the Frankencamera. It consists of a base hardware specification, a software stack based on Linux, and an API for C++. Our architecture permits control and synchronization of the sensor and image processing pipeline at the microsecond timescale, as well as the ability to incorporate and synchronize external hardware like lenses and flashes. This paper specifies our architecture and API, and it describes two reference implementations we have built. Using these implementations, we demonstrate several computational photography applications: high dynamic range (HDR) viewfinding and capture, automated acquisition of extended dynamic range panoramas, foveal imaging, and inertial measurement unit (IMU)-based hand shake detection. Our goal is to standardize the architecture and distribute Frankencameras to researchers and students, as a step toward creating a community of photographer-programmers who develop algorithms, applications, and hardware for computational cameras.