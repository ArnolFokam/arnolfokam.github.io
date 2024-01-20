---
title: "Influence of Contrastive Learning on Source Code Plagiarism Detection through Recursive Neural Networks" 
date: 2021-11-25
tags: ["Contrastive Learning","Recursive Neural Network"]
author: ["Manuel Fokam", "Ritesh Ajoodha"]
description: "We improve a source code similarity detection baseline by leveraging contrastive learning."
summary: "We improve a source code similarity detection baseline by leveraging contrastive learning." 
cover:
    image: "paper.png"
    alt: "main image of the paper"
    relative: false
editPost:
    URL: "https://ieeexplore.ieee.org/document/9714688"
    Text: "IMITEC"

---

---

##### Download

+ [Paper](https://riteshajoodha.co.za/sitepad-data/uploads/2021/10/Fokam-IMITEC.pdf)
<!-- + [Online appendix](appendix1.pdf) -->
<!-- + [Code and data](https://github.com/Michael-Beukman/MCHAMR) -->

---

##### Abstract

Plagiarism during programming assignments is a
problem in academia. It hinders the ability of academic instructors to truly judge students’ performance and thus, prevents
students from receiving adequate help from their instructors. In
cases where the number of code submissions for a particular
assignment is relatively small, the instructor can inspect each
code submission to determine whether they are similar. But as
the number of code submissions grows, it becomes difficult to
detect similarities between them. Therefore, this induces the need
for an automatic source code plagiarism detector.
Previous studies showed that we could use the abstract syntax
tree (AST) of a source code to get an accurate representation
of the source code for neural network computations. Although a
study even presented a recursive artificial neural network named
Abstract Syntax Tree-based Neural Network (ASTNN) that could
represent source codes into vector embeddings using their ASTs,
it does not use contrastive learning paradigms, shown to increase
the performance of Siamese networks in similarity detection
tasks.
Therefore, this paper presents an improved version of the
ASTNN for code clone detection, where we modify the original
model for contrastive learning. Experiments demonstrated that
we outperform the original ASTNN model in code clone detection
tasks, with a +5% improvement in the F1-score of our model.
This study aims at improving the way we perform similarity
detection tasks involving programming languages.
Index Terms—Plagiarism detection, Programming Languages,
Abstract Syntax Trees, Deep Learning

<!-- ---

##### Figure X: Figure caption

![](paper1.png) -->

---

##### Citation

```BibTeX
@inproceedings{fokam2021improvedASTNN,
  author={Manuel A. Fokam and Ritesh Ajoodha},
  title={Influence of Contrastive Learning on Source Code Plagiarism Detection through Recursive Neural Networks},
  booktitle={2021 3rd International Multidisciplinary Information Technology and Engineering Conference (IMITEC)},
  year={2021},
  month={November},
  pages={1-6},
  doi={10.1109/IMITEC52926.2021.9714688},
  publisher={IEEE},
  location={Windhoek, Namibia}
}
```

<!-- ---

##### Related material

+ [Presentation slides](presentation1.pdf)
+ [Dissertation title](https://escholarship.org/uc/item/7jr3m96r) – PhD dissertation on which this paper is based.
+ [Column title](https://cep.lse.ac.uk/pubs/download/cp365.pdf) – Nontechnical column describing the paper. -->

