# Teachable Machine Mini‑Suite

A collection of three lightweight Teachable Machine prototypes—**Image**, **Audio**, and **Pose** classifiers—built for rapid proof‑of‑concept and easy deployment in Google Colab.

---

## 📋 Project Overview

This repository demonstrates three **end‑to‑end** Teachable Machine workflows:

1. **Image Classification**: Desk Object Detector (phone / bottle / paper / empty)  
2. **Audio Classification**: Desk Environment Sound (typing / music / silence)  
3. **Pose Classification**: Facial Emotion (happy / surprised / neutral)

Each prototype includes:
- **Data Capture** via your laptop webcam or mic  
- **Model Training** on Teachable Machine  
- **TFLite Export** for maximum Colab compatibility  
- **Colab Notebooks** for inference and validation

---

## 🎯 Objectives & Use Cases

| Project              | Objective                                           | Business Value                        |
|----------------------|-----------------------------------------------------|---------------------------------------|
| **Image**            | Automate identification of objects on your desk.    | Inventory tracking, productivity apps |
| **Audio**            | Distinguish real‑time background sounds.            | Context‑aware UIs, ambient analytics  |
| **Pose**             | Detect basic facial expressions while seated.       | UX research, fatigue monitoring       |

---


# Image and Audio Classifier:
- Colab Link : https://colab.research.google.com/drive/1-uU79vg8dWRycC1DS0c-tz01Zl_SwZ-v?usp=sharing
- Youtube Link : https://youtu.be/SFPGHHv8898

# Pose Classifier:
- Colab Link : https://colab.research.google.com/drive/1SydO1bz4baJruvKGq5TZ0Pan3hpBsMy3?usp=sharing
- Youtube Link : https://youtu.be/MU6UC9LMDF0




# 🔍 Keras Hub Projects – Vision & NLP Tasks using TensorFlow Hub

This repository demonstrates four **image classification and detection tasks** and four **text understanding tasks** using pre-trained models from [TensorFlow Hub](https://tfhub.dev). Each notebook is optimized for **Colab's 12 GB memory constraints** and uses clear outputs including **accuracy**, **model summaries**, and **sample predictions**, making it easy to interpret and reuse.

---

## 🧠 Table of Contents

- [Overview](#overview)
- [📁 Notebooks](#notebooks)
- [🖼️ Image Tasks](#️image-tasks)
- [📝 Text Tasks](#text-tasks)

---

## 🔍 Overview

This project showcases progressive difficulty levels:

| Level        | Image Task                                   | Text Task                              |
|--------------|----------------------------------------------|-----------------------------------------|
| Easy         | MNIST Classification using MobileNetV2       | Text Classification using Embeddings    |
| Intermediate | CNN on Fashion MNIST                         | GRU-based Sentiment Classifier          |
| Advanced     | Multi-Label Classification on MNIST          | Named Entity Recognition (NER) with NLTK|
| Expert       | Object Detection with SSD MobileNetV2        | Summarization using NLTK + Gensim       |

---

## 📁 Notebooks

- 📘 [`keras_hub_image.ipynb`](keras_hub_image.ipynb) – All 4 image-level tasks in one consolidated notebook.
- 📘 [`keras_hub_text.ipynb`](keras_hub_text.ipynb) – All 4 NLP tasks with outputs, model summaries, and evaluation.

---

## 🖼️ Image Tasks

### ✅ Easy – MNIST Classification (MobileNetV2)
- Converts grayscale 28×28 images to RGB 224×224 format.
- Uses a frozen MobileNetV2 as feature extractor.
- Accuracy: ~92%

### 🔁 Intermediate – Fashion MNIST with CNN
- Custom CNN with Conv2D, MaxPooling, and Dense layers.
- Accuracy: ~88%

### 🧮 Advanced – Multi-label MNIST
- MobileNetV2 + sigmoid for multi-label output.
- Accuracy: ~75%

### 🕵️ Expert – SSD MobileNetV2 Object Detection
- External image inference using TensorFlow Hub detector.
- Output includes bounding box shapes, classes, and confidence scores.

---

## 📝 Text Tasks

### ✅ Easy – Sentiment Analysis using Embeddings
- Embeds short sentences with TF/Keras `TextVectorization` and Embedding layers.
- Binary classification for positive/negative sentiment.
- Accuracy: ~95%

### 🔁 Intermediate – GRU-based Sentiment Classifier
- GRU + Embedding + Dense.
- Accuracy: ~95% with synthetic data.

### 🧠 Advanced – Named Entity Recognition with NLTK
- Tokenizes and performs chunking using `ne_chunk`.
- Outputs named entities like `GPE`, `PERSON`, `ORGANIZATION`.

### 📄 Expert – Text Summarization (Gensim + NLTK)
- Uses extractive summarization.
- Processes long input into a 2–3 line summary.


# Image Task:
- Colab Link : https://colab.research.google.com/drive/1wI1LPqqv8_PyvbjQcaiGrv4bCRGOhZLv?usp=sharing
- Youtube Link : https://youtu.be/ZOZYRZqhw0c

# Text Task:
- Colab Link : https://colab.research.google.com/drive/1rC4RvDLn-yuzlhGg2ycuHTc21EpUq8ry?usp=sharing
- Youtube Link : https://youtu.be/V6fZ1uA8Pf0
