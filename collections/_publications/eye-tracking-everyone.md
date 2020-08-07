---
acknowlegement: We would like to thank Kyle Johnsen for his help with the IRB, as well as Bradley Barnes and Karen Aguar for helping to recruit participants. This research was supported by Samsung, Toyota, and the QCRI-CSAIL partnership.
authors: Kyle Krafka, Aditya Khosla, Petr Kellnhofer, Harini Kannan, Suchendra Bhandarkar, Wojciech Matusik, Antonio Torralba
featured_image: /assets/images/eye-tracking_itok=O-wW33uz.jpg
layout: publication
project_website: http://gazecapture.csail.mit.edu/
publication: IEEE Conference on Computer Vision and Pattern Recognition (CVPR), 2016
publication_link: /assets/files/paper_6.pdf
title: Eye Tracking for Everyone
date: 2016-01-01 12:00:00 -0700
---

From scientific research to commercial applications, eye tracking is an important tool across many domains. Despite its range of applications, eye tracking has yet to become a pervasive technology. We believe that we can put the power of eye tracking in everyone's palm by building eye tracking software that works on commodity hardware such as mobile phones and tablets, without the need for additional sensors or devices. We tackle this problem by introducing **GazeCapture**, the first large-scale dataset for eye tracking, containing data from over 1450 people consisting of almost 2.5M frames. Using GazeCapture, we train **iTracker**, a convolutional neural network for eye tracking, which achieves a significant reduction in error over previous approaches while running in real time (10 - 15fps) on a modern mobile device. Our model achieves a prediction error of 1.7cm and 2.5cm without calibration on mobile phones and tablets respectively. With calibration, this is reduced to 1.3cm and 2.1cm. Further, we demonstrate that the features learned by iTracker generalize well to other datasets, achieving state-of-the-art results.