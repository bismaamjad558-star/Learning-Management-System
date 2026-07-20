# 🎓 Learning Management System (LMS)

A modern Full Stack Learning Management System (LMS) built using the MERN Stack. Students can browse courses, enroll, and track their progress, while instructors can create and manage courses.

---

## 🚀 Features

### 👨‍🎓 Student
- User Registration & Login
- Browse Courses
- Search Courses
- Filter Courses by Category
- Sort Courses by Price
- View Course Details
- Enroll in Courses
- Update Learning Progress
- Remove Enrollment
- Dashboard
- Profile Management

### 👨‍🏫 Instructor
- Create Course
- Edit Course
- Delete Course
- Upload Course Thumbnail

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Multer

---

## 📂 Project Structure

```
LMS/
│
├── client/
│   ├── src/
│   ├── components/
│   ├── pages/
│   └── services/
│
├── server/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── uploads/
│   └── server.js
```

---

## ⚙ Installation

### Clone Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_LINK
```

### Install Frontend

```bash
cd client
npm install
npm run dev
```

### Install Backend

```bash
cd server
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside the **server** folder.

```env
PORT=5000
MONGO_URI=YOUR_MONGODB_CONNECTION_STRING
JWT_SECRET=YOUR_SECRET_KEY
```

---
## 📮 Postman Collection
You can test all APIs using the Postman collection provided in the `postman` folder.

Download: `postman/LMS_API.postman_collection.json`

Steps:
1. Open Postman > Import > File > Select the .json file
2. Set `base_url` to `http://localhost:5000`


## 📷 Main Modules

- Home
- Login
- Register
- Dashboard
- Courses
- Course Details
- Create Course
- Edit Course
- Enrollment
- Profile

---

## 📱 Responsive Design

✔ Desktop

✔ Tablet

✔ Mobile

---

## 📸 Screenshots

Add screenshots of your project here.

- Home Page
- Dashboard
- Courses
- Course Details
- Profile

---

## 👩‍💻 Developed By

**Bisma Amjad**

BS Computer Science Student

Frontend & MERN Stack Developer

---

## ⭐ Future Improvements

- Course Reviews
- Payment Integration
- Certificates
- Quiz System
- Video Lectures
- Admin Dashboard

---

## 📜 License

This project is created for educational purposes.