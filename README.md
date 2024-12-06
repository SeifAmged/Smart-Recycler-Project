# Smart Recycler Project 🌱  

## **Overview**
- The **Smart Recycler** project is a simple web application that uses **Artificial Intelligence (AI)** to analyze images uploaded by users. It determines whether the item in the image can be recycled or not, and provides relevant information or warnings. This project is optimized to work well across different devices and screen sizes, ensuring a smooth user experience.


## 🌟 **Features**  

- **AI-Powered Classification**: Trained on **10 categories** with over **2000+ image samples per category**, ensuring high accuracy in identifying recyclable items.  
   - Categories: Battery, Biological, Glass, Cardboard, Metal, Paper, Plastic, Shoes, Trash, Clothes.  

- **Image Format Compatibility**: Supports a wide range of formats (PNG, BMP, etc.), automatically converting them to **JPEG** for seamless processing.  

- **Recycling Instructions**: Provides actionable tips for recyclable items, such as cleaning guidelines and suggestions for nearby recycling facilities.  

- **Responsive Design**: Optimized for both **mobile** and **desktop** users, offering a seamless experience across devices.  

- **SEO Optimized**: Built with meta tags to enhance visibility on search engines and maximize reach.  

---

## 📊 **How It Works**  

1. **Upload**: Drag and drop or upload an image in any format.  
2. **Analyze**: The AI model processes the image to classify the item.  
3. **Result**: Get a clear answer: recyclable or not.  
   - For recyclable items, receive detailed instructions on how to proceed.  

---

## 🛠️ **Tech Stack**  

- **Flask**: Web framework powering the backend.  
- **TensorFlow**: AI model for image analysis.  
- **HTML, CSS, JavaScript**: Crafting a user-friendly interface.  

---

## 🚀 **Getting Started**  

### Installation  

1. Clone the repository:  
   ```bash  
   git clone https://github.com/SeifAmged/Smart-Recycler-Project.git  
   ```  

2. Navigate to the project directory:  
   ```bash  
   cd Smart-Recycler-Project  
   ```  

3. Install dependencies:  
   ```bash  
   pip install -r requirements.txt  
   ```  

4. Run the application:  
   ```bash  
   flask run  
   ```  

5. Open your browser and visit `http://127.0.0.1:5000/`.  

---

## 📷 **Examples**
## Demo: Analyzing a Recyclable Sample (Plastic)  
This example demonstrates how Smart Recycler analyzes an uploaded sample. The AI detects that the item is plastic and provides actionable recycling instructions.

![GIF Description](https://github.com/SeifAmged/Smart-Recycler-Project/blob/main/Media/1.gif)

---

## Demo: Analyzing a Non-Recyclable Sample  
In this example, Smart Recycler identifies an item that cannot be recycled. It informs the user and suggests environmentally-friendly disposal methods.

![Non-Recyclable Sample](https://github.com/SeifAmged/Smart-Recycler-Project/blob/main/Media/2.gif)
---


### **Ready to make recycling smarter? Let's start today!**  
