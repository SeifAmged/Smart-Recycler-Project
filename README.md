## Smart Recycler Project

### Overview
The **Smart Recycler** project is a simple web application that uses **Artificial Intelligence (AI)** to analyze images uploaded by users. It determines whether the item in the image can be recycled or not, and provides relevant information or warnings. This project is optimized to work well across different devices and screen sizes, ensuring a smooth user experience.


 ### Features
- **AI-Powered Image Analysis**: The website uses an AI model to analyze uploaded images and determine whether the item can be recycled or not.
- **Image Format Conversion**: Users can upload images in any format (e.g., PNG, BMP), and the website automatically converts them to **JPEG** before processing.
- **Responsive Design**: The website is fully responsive and adjusts to different screen sizes, ensuring a smooth user experience across devices (desktop and mobile).
- **Meta Tags for Optimization**: The website is optimized with meta tags to enhance SEO and provide a better user experience across different platforms.
- **Clear Recycling Instructions**: If the item is recyclable, the website provides clear and easy-to-understand instructions on how to recycle it.


### System Requirements
- **Python 3.11.2**
- All required libraries are listed in the `requirements.txt` file.

### Setup Instructions
To set up and run this project on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   https://github.com/SeifAmged/Smart-Recycler-Project
   ```

2. **Install Python 3.11.2**:  
   Ensure you have Python 3.11.2 installed. You can download it from [here](https://www.python.org/downloads/release/python-3112/).

3. **Create and activate a virtual environment** (optional but recommended):
   ```bash
   python -m venv env
   source env/bin/activate  # On Windows use: env\Scripts\activate
   ```

4. **Install dependencies**:
   Use the `requirements.txt` file to install all necessary libraries:
   ```bash
   pip install -r requirements.txt
   ```

5. **Run the application**:
   Start the Flask application:
   ```bash
   flask run
   ```

6. **Open the web application**:
   Once the application is running, open your web browser and navigate to:
   ```
   http://127.0.0.1:5000
   ```

### Technologies Used
- **Flask**: A micro web framework for Python.
- **TensorFlow**: For building and running the AI model to analyze images.
- **HTML, CSS, and JavaScript**: For creating the frontend interface, making the website interactive and responsive.
  
### File Structure
```
project-root/
│
├── static/                   
│   ├── Backgrounds/            
│   │   └── background1.png     
│   ├── css/
│   │   └── style.css           
│   ├── icons/
│   │   └── icon.png          
│   ├── js/
│   │   └── script.js          
│
├── templates/                  
│   └── index.html         
│
├── app.py                     
│
└── requirements.txt           

```

### Known Issues
- The application is optimized to work with **Python 3.11.2**. Using other versions may result in compatibility issues.
- If the required dependencies are not installed correctly, the application may fail to run.

### Future Enhancements
- Adding more material types for recycling detection.
- Improving the accuracy of the AI model for better classifications.
