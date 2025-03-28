# Deep Neural Network Multi-Framework Implementation

This repository contains deep neural network (DNN) implementations in **NumPy, PyTorch, and TensorFlow** for a non-linear regression task. The project includes low-level manual implementations, class-based models, and high-level API usage.

## Implementations

- **NumPy**: Manual forward/backpropagation without frameworks.
- **PyTorch**: 
  - Manual tensor operations (no `torch.nn`)
  - Class-based (`torch.nn.Module`)
  - PyTorch Lightning version
- **TensorFlow**:
  - Low-level (`tf.einsum`)
  - Built-in layers (`tf.keras.layers`)
  - Functional API
  - High-Level API (`tf.keras.Model`)
