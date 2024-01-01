---
title: "Analysing Cross-Lingual Transfer in Low-Resourced African Named Entity Recognition" 
date: 2023-11-25
tags: ["Natural Language Processing","Named Entity Recognition","Transfer Learning", "Low-resourced Languages"]
author: "Micheal Beukman, Arnol Fokam"
description: "Have you ever wondered what properties of a language helps transfer learning in a low-resourced settings? TLDR; english tokens overlap" 
summary: "Have you ever wondered which properties of a language help transfer learning in a low-resourced settings?" 
cover:
    image: "paper.png"
    alt: "main image of the paper"
    relative: false
editPost:
    URL: "https://michaelbeukman.com/assets/2023_aacl_analysing.pdf"
    Text: "AACL-IJCNLP"

---

---

##### Download

+ [Paper](https://michaelbeukman.com/assets/2023_aacl_analysing.pdf)
<!-- + [Online appendix](appendix1.pdf) -->
+ [Code and data](https://github.com/Michael-Beukman/NerTransfer)

---

##### Abstract

Transfer learning has led to large gains in performance for nearly all NLP tasks while making downstream models easier and faster to train. This has also been extended to 
low-resourced languages, with some success. We investigate the properties of cross-lingual transfer learning between ten low-resourced languages, from the perspective of a 
named entity recognition task. We specifically investigate how much adaptive fine-tuning and the choice of transfer language affect zero-shot transfer performance. We find 
that models that perform well on a single language often do so at the expense of generalising to others, while models with the best generalisation to other languages 
suffer in individual language performance. Furthermore, the amount of data overlap between the source and target datasets is a better predictor of transfer performance 
than either the geographical or genetic distance between the languages.

<!-- ---

##### Figure X: Figure caption

![](paper1.png) -->

---

##### Citation

```BibTeX
@inproceedings{beukman2023analysing,
  title={Analysing Cross-Lingual Transfer in Low-Resourced African Named Entity Recognition},
  author={Michael Beukman and Manuel Fokam},
  booktitle={The 13th International Joint Conference on Natural Language Processing and the 3rd Conference of the Asia-Pacific Chapter of the Association for Computational Linguistics (AACL-IJCNLP)},
  year={2023}
}
```

<!-- ---

##### Related material

+ [Presentation slides](presentation1.pdf)
+ [Dissertation title](https://escholarship.org/uc/item/7jr3m96r) – PhD dissertation on which this paper is based.
+ [Column title](https://cep.lse.ac.uk/pubs/download/cp365.pdf) – Nontechnical column describing the paper. -->

