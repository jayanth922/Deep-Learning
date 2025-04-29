# Unsloth LLM Project

Welcome to the **Unsloth LLM Project** repository! This project demonstrates the use of Unsloth and Ollama for fine-tuning large language models (LLMs) across various tasks. Each task includes a successfully run Colab notebook and an accompanying video explaining the process, input formats, datasets, and results.

## 📚 Project Overview

This repository demonstrates end-to-end fine-tuning, continued pretraining, reward modeling, context extension, and model export for various open-weight LLMs using **Unsloth**.

Each task explores a specific industry-relevant use case:  
from simple supervised fine-tuning to advanced DPO/ORPO reward modeling, continued pretraining for language extension, and deploying models to local inference with Ollama.

The codebase strictly follows official [Unsloth documentation](https://docs.unsloth.ai/), ensuring production-grade best practices.

---

## 🚀 Project Tasks Breakdown

| Task | Description
|:---|:---
| Task A | **Supervised Finetuning** on Llama 3.1 or TinyLlama using a lightweight instruction dataset
| Task B | **Continued Pretraining** to teach the model a new language or domain knowledge
| Task C | **Chat Template Finetuning**: Conversational chat, classification, max context extension, multi-tasking
| Task D | **Reward Modeling**: DPO and ORPO training for preference alignment
| Task E | **Continued Finetuning from Custom Checkpoint** after partial training
| Task F | **Finetune a Mental Health Chatbot** using Phi-3 and Unsloth for development use cases
| Task G | **Export Finetuned Models to Ollama** format for easy local inference and deployment

---

Task A:
- Colab link : https://colab.research.google.com/drive/1WsArevP3SMxagkNOB7R3mgIRVzHRJfOs?usp=sharing
- Youtube link : https://youtu.be/S0p5QCAJhig

Task B:
- Colab link : https://colab.research.google.com/drive/1Bh456dJ5tctXH8RcWSveNKv8VOd_dAcQ?usp=sharing
- Youtube link : https://youtu.be/qALH0DU7KLE

Task C:
- colab link : https://colab.research.google.com/drive/1PPg-FKmnu8kWpwnjFSzjb4zZmryE1mAX?usp=sharing
- youtube link : https://youtu.be/vUnXB1iSoxA

Task D:
- colab link : https://colab.research.google.com/drive/1F5CR8cZDdjbq3-DATHnVKwHQAm235Krx?usp=sharing
- youtube link : https://youtu.be/VCI_2BURrjo

Task E:
- colab link : https://colab.research.google.com/drive/1NnFB8pqy65Ymd8_e-x1xsgT6dbV2sgCB?usp=sharing
- youtube link : https://youtu.be/EQkSmfA-F7M

Task F:
- colab link : https://colab.research.google.com/drive/1mRhJcydJcYZTGeRwIEnkHCaxRaQM3XQO?usp=sharing
- youtube link : https://youtu.be/Mq0MjkkbZfE

Task G:
- colab link : https://colab.research.google.com/drive/1eijNfRMvAQNwBXk6N5_D96lNTn61Xe75?usp=sharing
- youtube link : https://youtu.be/9xBTBJS9KUo

---

## 🛠️ Technologies Used

- 🐍 Python 3.11+
- 🦥 [Unsloth](https://unsloth.ai/) (Fast LLM Finetuning Framework)
- 🤗 Huggingface Transformers (custom + nightly builds)
- 📚 Huggingface Datasets
- 🛠️ PEFT (Parameter Efficient Fine Tuning)
- ⚡ Accelerate
- 💾 BitsAndBytes (4-bit quantization training)
- 🧠 Ollama (for deployment)

---

## 📄 Detailed Task Summaries

### 🧩 Task A — Supervised Finetuning

- Finetuned `TinyLlama-1.1B-Chat` model using 100-sample instruction dataset.
- Applied Unsloth’s LoRA injection for lightweight memory usage.
- Verified loss reduction and model consistency.

### 🧩 Task B — Continued Pretraining

- Performed domain adaptation by continued pretraining on a small corpus in a different domain.
- Taught base model new language tokens without instruction tuning.

### 🧩 Task C — Chat Templates and Multi-Dataset Finetuning

- Prepared models for:
  - Conversational chatbot tasks.
  - Text classification tasks.
  - Extended maximum context window from 2048 to 4096 tokens.
  - Multi-dataset single finetuning scenarios.

- Special handling for positional embeddings adjustment.

### 🧩 Task D — Reward Modeling: DPO and ORPO

- Attempted DPO training using `PatchDPOTrainer()` from Unsloth.
- Applied DPO beta values properly.
- Training partially failed due to incompatibilities in `get_batch_samples` — documented in notebook.

### 🧩 Task E — Continued Finetuning from Custom Checkpoint

- Picked a model after partial finetuning and continued further training without reinitialization.
- Validated loss continuation and checkpoint consistency.

### 🧩 Task F — Mental Health Chatbot Finetuning

- Specialized finetuning of `TinyLlama` model for mental health support domain.
- Focused on empathetic, contextually safe responses.
- Inspired by medical chatbot research patterns.

### 🧩 Task G — Export Model to Ollama

- Merged LoRA adapters into the base model.
- Converted model outputs to Ollama-compatible structure.
- Demonstrated local inference through Ollama CLI.
