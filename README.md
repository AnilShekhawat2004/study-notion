# 📚 Study Notion – Full Stack EdTech Platform

Study Notion is a **full-stack online learning platform** that allows users to **buy, create, and learn courses online**.  
It supports **role-based access** for **Students** and **Instructors**, secure authentication, video-based learning, course progress tracking, **reviews & ratings**, and **online payments** using Razorpay.

This project is built to simulate a **real-world EdTech application** with dashboards, analytics, and secure APIs.

---

## 🚀 Key Features

### 👤 Authentication & Authorization
- User Sign Up & Login
- Role selection during signup:
  - 🎓 Student
  - 🧑‍🏫 Instructor
- JWT-based authentication
- Secure cookies for session handling
- Role-based protected routes

---

## 🎓 Student Features
- Browse all available courses
- Add courses to **Cart**
- Purchase courses using **Razorpay**
- Access enrolled courses from dashboard
- **Video-based learning system**
- Track course progress lesson-wise
- Give **reviews & ratings** to courses
- Edit profile details
- Delete account permanently

---

## 🧑‍🏫 Instructor Features
- Create courses under selected categories
- Upload course details and video lessons
- Save courses as **Draft** or **Publish** anytime
- Edit or delete courses
- Instructor dashboard with **analytics**:
  - Total student enrollments
  - Earnings from courses
  - Chart-based statistics
- Full account management:
  - Edit profile
  - Delete account  
  - Deleting account removes all associated courses

---

## 🎥 Course & Learning System
- Structured course content
- Video-based lessons
- Progress tracking for students
- Secure access (only enrolled students can view content)

---

## ⭐ Review & Rating System
- Students can rate courses
- Students can write reviews
- Average ratings displayed on course pages
- Helps users choose better courses

---

## 📩 Contact Section
- Public contact form
- Any user can send queries or messages
- Messages handled through backend APIs

---

## 💳 Payment Integration
- Razorpay payment gateway
- Secure payment verification
- Course access only after successful payment

---

## 🔐 Security
- JWT authentication
- Cookies for session handling
- Role-based authorization middleware
- Protected API routes

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Redux Toolkit
- React Router
- Tailwind CSS

### Backend
- Node.js
- Express.js
- JWT Authentication
- Role-based middleware

### Database
- MongoDB
- Mongoose

### Other Tools & Services
- Razorpay (Payments)
- Cloudinary (Media storage)
- Chart libraries (Analytics)

---

## 📂 Project Structure
```bash
study-notion/
│
├── server/              # Backend (Node.js + Express)
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── middleware
│   └── config
│
├── src/                 # Frontend (React)
│   ├── components
│   ├── pages
│   ├── redux
│   ├── services
│   └── assets
│
├── package.json
├── app.js / index.js
└── README.md
```
---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/study-notion.git
cd study-notion
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Environment Variables
Create a .env file inside the server folder and add:

```bash
PORT=4000
MONGODB_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```
### 4️⃣ Run the project
```bash
npm run dev
```
- Frontend: http://localhost:3000
- Backend: http://localhost:4000

## 📊 Dashboards

### Student Dashboard
- Enrolled courses
- Progress tracking
- Cart & account settings

### Instructor Dashboard
- Course management
- Enrollment stats
- Revenue analytics

---

## 🌱 Project Status
- Core features implemented
- UI & UX improvements in progress
- More features planned

---

## 🚧 Future Enhancements
- Admin role & dashboard
- Course certificates
- Email notifications
- Instructor verification
- Advanced analytics

---

## 🤝 Contribution
This project is built for learning and real-world practice.  
Feel free to fork, explore, and contribute.

---

## 📌 Author
**Anil Singh Shekhawat**  
Full Stack Web Developer

---

## ⭐ Support
If you find this project useful, please ⭐ star the repository — it really helps!
