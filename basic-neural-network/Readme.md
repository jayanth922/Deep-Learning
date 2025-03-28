# Deep Neural Network Multi-Framework Implementation

This repository contains deep neural network (DNN) implementations in **NumPy, PyTorch, and TensorFlow** for a non-linear regression task. The project includes low-level manual implementations, class-based models, and high-level API usage.

## Implementations

- **NumPy**: Manual forward/backpropagation without frameworks.
  - Colab : https://colab.research.google.com/drive/1Lo0kTeIdYnSrhfW6L_IRZnwBCBY-oocN?usp=sharing
  - Youtube : https://youtu.be/II8SuMIdp3g
- **PyTorch**: 
  - Manual tensor operations (no `torch.nn`)
    - Colab : https://colab.research.google.com/drive/18RUWBDEGeQXuZmOXCUSrSYIpGKZt8HRK?usp=sharing
    - Youtube : https://youtu.be/l-5y0Mh-4S4
  - Class-based (`torch.nn.Module`)
    - Colab : https://colab.research.google.com/drive/12EaYkO7_ZHmusT26ie_Izb1qqoSKf5NO?usp=sharing
    - Youtube : https://youtu.be/F8bEc9tXnt4
  - PyTorch Lightning version
    - Colab : https://colab.research.google.com/drive/1Q-12MyH5eMNciKMb8AfzfBzrB6fFG6Ij?usp=sharing
    - Youtube : https://youtu.be/I144KoSKaXY
- **TensorFlow**:
  - Low-level (`tf.einsum`)
    - Colab : https://colab.research.google.com/drive/1nOOgtmf285crK_52Tw9J_g1hl1L4ex73?usp=sharing
    - Youtube : https://youtu.be/-tPdj1U1g4U
  - Built-in layers (`tf.keras.layers`)
    - Colab : https://colab.research.google.com/drive/118ko2CimIH5u4w-fsTwCJwUuEKNDa8L2?usp=sharing
    - Youtube : https://youtu.be/mRAJMKsV-B8
  - Functional API
    - Colab : https://colab.research.google.com/drive/13jGqED-a4nEnZ0566-53Qu-Got61ylba?usp=sharing
    - Youtube : https://youtu.be/YyHxsDI8LxA
  - High-Level API (`tf.keras.Model`)
    - Colab : https://colab.research.google.com/drive/1Po-nGE3P-8U8r4e3u9g2BjGKZg3eoSGA?usp=sharing
    - Youtube : https://youtu.be/AFlQwVNMWEU
