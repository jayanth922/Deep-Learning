import tensorflow as tf
from tensorflow.keras.datasets import mnist
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense, Flatten
from tensorflow.keras.utils import to_categorical
from tensorflow.keras.metrics import AUC, Precision, Recall, TruePositives, TrueNegatives, FalsePositives, FalseNegatives, MeanSquaredError, MeanAbsoluteError, MeanAbsolutePercentageError, CosineSimilarity

# Load and preprocess the MNIST dataset
(x_train, y_train), (x_test, y_test) = mnist.load_data()
x_train, x_test = x_train / 255.0, x_test / 255.0
y_train, y_test = to_categorical(y_train), to_categorical(y_test)

# Build the neural network model
model = Sequential([
    Flatten(input_shape=(28, 28)),
    Dense(128, activation='relu'),
    Dense(10, activation='softmax')
])

# Compile the model with a comprehensive set of metrics
model.compile(optimizer='adam',
              loss='categorical_crossentropy',
              metrics=['accuracy', AUC(), Precision(), Recall(), 
                       TruePositives(), TrueNegatives(), FalsePositives(), FalseNegatives(),
                       MeanSquaredError(), MeanAbsoluteError(), MeanAbsolutePercentageError(), CosineSimilarity()])

# Train the model
model.fit(x_train, y_train, epochs=5, validation_data=(x_test, y_test))

# Evaluate the model
model.evaluate(x_test, y_test, verbose=2)
# Make predictions on the test set
predictions = model.predict(x_test)

# Convert predictions to class labels
predicted_classes = tf.argmax(predictions, axis=1)
true_classes = tf.argmax(y_test, axis=1)

# Separate data for correct and incorrect predictions
correct_predictions = x_test[predicted_classes == true_classes]
incorrect_predictions = x_test[predicted_classes != true_classes]

# Print the number of correct and incorrect predictions
print(f"Number of correct predictions: {correct_predictions.shape[0]}")
print(f"Number of incorrect predictions: {incorrect_predictions.shape[0]}")


