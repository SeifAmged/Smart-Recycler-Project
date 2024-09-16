from flask import Flask, render_template, request, jsonify
from PIL import Image
import numpy as np
import tensorflow as tf
import io

# Initialize the Flask app
app = Flask(__name__)

# Load the pre-trained model
model = tf.keras.models.load_model('model.h5')

# Set the target image size for model input
target_size = (224, 224)

# Function to preprocess the uploaded image
def preprocess_image(image):
    try:
        # Open the image and convert it to RGB format
        img = Image.open(image)
        img = img.convert("RGB")  # Ensure the image is in RGB to avoid channel issues
        img = img.resize(target_size)  # Resize the image to match model input size

        # Save the image to memory as a JPEG
        img_io = io.BytesIO()
        img.save(img_io, format="JPEG")
        img_io.seek(0)  # Move the pointer to the start of the file in memory

        # Convert the image to a numpy array and normalize pixel values to be between 0 and 1
        img_array = np.array(Image.open(img_io)) / 255.0
        img_array = np.expand_dims(img_array, axis=0)  # Add a batch dimension for model input
        return img_array

    except Exception as e:
        # Handle errors related to image processing
        raise ValueError("Error processing the image. Ensure the file is a valid image format.") from e

# Route for the home page
@app.route('/')
def home():
    return render_template('index.html')  # Render the home page

# Route for handling image upload and classification
@app.route('/upload', methods=['POST'])
def upload():
    if 'file' not in request.files:
        # If no file is provided in the request, return an error
        return jsonify({'error': 'No file part'})

    file = request.files['file']  # Get the uploaded file

    if file.filename == '':
        # If the file has no name, return an error
        return jsonify({'error': 'No file selected'})

    try:
        # Preprocess the uploaded image
        img_array = preprocess_image(file)

        # Use the model to predict the class of the image
        prediction = model.predict(img_array)
        class_index = np.argmax(prediction[0])  # Get the index of the highest probability class

        # Define the class labels
        labels = ['Battery', 'Biological', 'Glass', 'Cardboard', 'Metal', 'Paper', 'Plastic', 'Shoes', 'Trash', 'Clothes']
        result = labels[class_index]  # Get the label corresponding to the predicted class

        # Return the classification result as a JSON response
        return jsonify({'result': result})

    except Exception as e:
        # Handle any errors that occur during the prediction process
        return jsonify({'error': str(e)})

# Run the Flask app in debug mode
if __name__ == '__main__':
    app.run(debug=True)
