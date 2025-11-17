# 🍽️ Mumbai Restaurant Feedback System  
### A Mini-Project using MERN Stack (MongoDB, Express, React, Node.js)

This project is a **Restaurant Feedback & Rating System** designed for cafés and restaurants in Mumbai.  
Users can browse restaurants, view ratings, add their feedback, and explore trending & top-rated places — all in a beautiful café-themed UI.

---


---

## 🚀 Features

### 🌟 User Features
- Browse 5–7 Mumbai restaurants with images & locations  
- Add ratings & feedback for each place  
- View all feedback submitted by users  
- Auto-calculated average rating  
- Trending restaurants (based on feedback count)  
- Top-rated restaurants (based on avg rating)  
- “Most Loved Café Today” highlight  
- Clean café-themed UI with sidebar navigation  

---

## 🛠️ Tech Stack

### **Frontend**
- React.js  
- React Router  
- Heroicons  
- CSS 

### **Backend**
- Node.js  
- Express.js  
- Mongoose  

### **Database**
- MongoDB 

---

##  API Endpoints (Backend)

### **Restaurants**
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /api/restaurants | Get all restaurants |
| GET | /api/restaurants/:id | Get restaurant + all feedback |
| GET | /api/restaurants/top-rated | Top 5 highly-rated |
| GET | /api/restaurants/trending | Trending restaurants |
| GET | /api/restaurants/most-loved | Best café today |

### **Feedbacks**
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/feedbacks | Add user feedback |


## ▶️ How to Run the Project Locally

### **1. Clone the repository**
    git clone https://github.com/Kritik2310/RestroFeedbackSystem.git
    
    cd RestroFeedbackSystem

---

### **2. Backend Setup**
    cd backend

    npm install

    Run backend:

    npm start

---

### **3. Frontend Setup**
    cd frontend

    npm install
    npm run dev
