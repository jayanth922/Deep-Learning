# Tensor Operations Exploration with TensorFlow & PyTorch

This repository contains interactive Colab notebooks that explore a variety of tensor operations using two of the most popular deep learning frameworks: TensorFlow 2.0 and PyTorch. The notebooks are designed as hands-on tutorials to help you master the fundamentals of tensor manipulation, including advanced techniques like Einstein summation (`einsum`).

## Table of Contents
- [Overview](#overview)
- [TensorFlow Notebook](#tensorflow-notebook)
  - [Key Features](#key-features-tensorflow)
  - [Usage](#usage-tensorflow)
- [PyTorch Notebook](#pytorch-notebook)
  - [Key Features](#key-features-pytorch)
  - [Usage](#usage-pytorch)
- [Additional Tensor Operations](#additional-tensor-operations)

## Overview

Tensors are the fundamental building blocks in deep learning, enabling efficient data manipulation and computation. This project provides:
- A **TensorFlow 2.0 notebook** exploring basic to intermediate tensor operations including reshaping, transposing, elementwise arithmetic, matrix multiplication, and demonstrations of the powerful `tf.einsum` function.
- A **PyTorch notebook** covering similar operations, along with creative examples like concatenation, stacking, and using the `einops` library for intuitive tensor dimension reordering.

Both notebooks are ideal for students, researchers, and practitioners looking to deepen their understanding of tensor operations.

## TensorFlow Notebook

The [TensorFlow Notebook](./TensorFlow_Tensor_Operations.ipynb) demonstrates:
- **Basic Tensor Operations:** Creation, arithmetic, and elementwise operations.
- **Reshaping & Transposing:** Techniques to change tensor shapes and orientations.
- **Matrix Multiplication:** Standard matrix multiplication and alternatives using `tf.einsum`.
- **Advanced Operations:** Broadcasting, gathering, and more.

### Key Features (TensorFlow)
- **Step-by-step explanations** to build intuition.
- **Interactive examples** to run and modify directly in Colab.
- **Einsum demonstrations** for compact and versatile tensor operations.

### Usage (TensorFlow)
1. Open the notebook in Colab: [TensorFlow Notebook](https://colab.sandbox.google.com/github/tensorflow/docs/blob/master/site/en/guide/tensor.ipynb) or download the `TensorFlow_Tensor_Operations.ipynb` file.
2. Execute the cells to explore various tensor operations.
3. Customize the examples to experiment with new ideas.

## PyTorch Notebook

The [PyTorch Notebook](./PyTorch_Tensor_Operations.ipynb) covers:
- **Tensor Creation & Manipulation:** Basic operations, reshaping, and transposition.
- **Matrix Multiplication & Einsum:** Utilizing `torch.einsum` for flexible tensor operations.
- **Creative Extensions:** Operations like concatenation, stacking, and dimension reordering with `einops`.

### Key Features (PyTorch)
- **Hands-on examples** to understand core tensor operations.
- **Flexible einsum usage** for concise and powerful tensor computations.
- **Integration with einops** for clear and intuitive tensor manipulation.

### Usage (PyTorch)
1. Open the notebook in Colab: [PyTorch Notebook](https://colab.research.google.com/github/fastai/course-v3/blob/master/nbs/dl2/01_matmul.ipynb?authuser=1) or download the `PyTorch_Tensor_Operations.ipynb` file.
2. Run the cells interactively in Colab.
3. Leverage the examples as a foundation for your own experiments.

## Additional Tensor Operations

Both notebooks also explore:
- **Broadcasting Techniques:** Automatically expanding tensor dimensions during arithmetic.
- **Advanced Indexing & Slicing:** Fine-grained control over tensor elements.
- **Custom Operations:** Using functions like TensorFlow's `map_fn` or PyTorch's custom functions to extend operations.
- **Einops Library:** (in PyTorch) for expressive tensor dimension reordering ([einops examples](https://einops.rocks/pytorch-examples.html)).
