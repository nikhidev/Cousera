![SkillOps Banner](https://private-user-images.githubusercontent.com/155530878/492152523-9155deff-21d7-4d21-bdba-0f71798eb0e9.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTg1MjEzNDAsIm5iZiI6MTc1ODUyMTA0MCwicGF0aCI6Ii8xNTU1MzA4NzgvNDkyMTUyNTIzLTkxNTVkZWZmLTIxZDctNGQyMS1iZGJhLTBmNzE3OThlYjBlOS5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwOTIyJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDkyMlQwNjA0MDBaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1kMWI0M2UzNWRjNTM5MTQyM2U2YTAwODc3ZDMxZDg3ZTQzZGMzYzIyZGY5M2VmY2E2MTIzNGU2YzdlMjQ5MGM2JlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.rt4Y5_Cdc_a5xR8jO08UX_ckNBrg1t-HghD1LN2E7fs)

# 🎓 SkillOps  

![GitHub last commit](https://img.shields.io/github/last-commit/nikhidev/skillops?style=for-the-badge)  
![GitHub issues](https://img.shields.io/github/issues/nikhidev/skillops?style=for-the-badge)  
![GitHub stars](https://img.shields.io/github/stars/nikhidev/skillops?style=for-the-badge)  
![License](https://img.shields.io/github/license/nikhidev/skillops?style=for-the-badge)  
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen?style=for-the-badge)  
![Live Demo](https://img.shields.io/badge/Demo-Live-blue?style=for-the-badge&logo=vercel&link=https://skllops.vercel.app/)  

**SkillOps** is a modern online learning platform that bridges the gap between **instructors** and **students**.  
It enables instructors to create and publish courses, while students can explore, purchase, and learn interactively.  
SkillOps offers **separate login & signup flows** for instructors and students, ensuring a role-specific experience.  

---

## 🌐 Live Demo
🚀 [**Try SkillOps Live**](https://skllops.vercel.app/)

---

## 🌟 Why SkillOps?
Most e-learning platforms are cluttered, costly, or lack personalization.  
SkillOps solves this problem by:  
- 🧑‍🏫 Providing instructors with an easy way to create and manage courses.  
- 👨‍🎓 Offering students a structured and affordable way to purchase and learn skills.  
- 📈 Supporting future scalability for payments, certifications, forums, and more.  

---

## 🎯 Core Features

### 👩‍🏫 Instructor Module
- Dedicated signup & login.  
- Create, edit, and delete courses.  
- Upload videos, PDFs, and quizzes.  
- Manage course pricing & enrolled students.  

### 👨‍🎓 Student Module
- Separate signup & login flow.  
- Browse courses by category, instructor, or price.  
- Purchase and enroll in courses.  
- Access purchased content anytime.  
- Track progress with a personal dashboard.  

### 🔒 Authentication & Security
- Separate login/signup routes for **students** and **instructors**.  
- Secure authentication (JWT / Clerk / Firebase).  
- Role-based access control for protected actions.  

---

## 🛠️ Tech Stack

| Layer            | Technologies Used |
|------------------|------------------|
| **Frontend**     | React.js / Next.js, Tailwind CSS, Material UI |
| **Backend**      | Node.js, Express.js |
| **Database**     | MongoDB / PostgreSQL |
| **Authentication** | JWT / Clerk / Firebase |
| **Payments (Future)** | Stripe / Razorpay / PayPal |
| **Deployment**   | Vercel (Frontend), Render / Railway / AWS (Backend) |

---

## 🖼️ Screenshots

- **Homepage**  
  ![Homepage Screenshot](https://private-user-images.githubusercontent.com/155530878/492152523-9155deff-21d7-4d21-bdba-0f71798eb0e9.png)

- **Login Page**  
  ![Login Screenshot](https://private-user-images.githubusercontent.com/155530878/492152525-8ec57d1a-2b98-4c43-80f1-78d61abe3004.png)

- **Courses Page**  
  ![Courses Screenshot](https://private-user-images.githubusercontent.com/155530878/492155198-01be9ca9-2dad-44c0-b9ce-f74576e9cb28.png)

- **Course Purchase Success**  
  ![Success Screenshot](https://private-user-images.githubusercontent.com/155530878/492152522-4f883ca5-956d-4229-9e2c-dc085c59fdf4.png)

- **My Courses**  
  ![My Courses Screenshot](https://private-user-images.githubusercontent.com/155530878/492152524-2b2c4773-d20b-4e92-b9e3-2409657cebaf.png)

---

## ⚙️ Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/skillops.git

# Navigate into the project directory
cd skillops

# Install dependencies
npm install

# Create a .env file and add environment variables

# Start the development server
npm run dev
🔑 Environment Variables
Create a .env file and include the following:

env
Copy code
PORT=5000
DATABASE_URL=mongodb://localhost:27017/skillops
JWT_SECRET=your-secret-key
CLERK_SECRET_KEY=your-clerk-secret
CLERK_PUBLISHABLE_KEY=your-clerk-public
📂 Project Structure
bash
Copy code
skillops/
│
├── frontend/          # React/Next.js code
│   ├── components/
│   ├── pages/
│   ├── styles/
│   └── utils/
│
├── backend/           # Express backend
│   ├── controllers/
│   ├── routes/
│   ├── models/
│   ├── middlewares/
│   └── config/
│
├── images/            # Banner and screenshots
├── README.md
└── package.json
👥 User Roles & Flow
Instructor Flow
Instructor signs up and logs in.

Creates and publishes a course with details and price.

Manages enrolled students.

Student Flow
Student signs up and logs in.

Browses and purchases a course.

Accesses purchased content.

Tracks progress.

🚀 Future Roadmap
💳 Payment integration (Stripe, Razorpay, PayPal).

📜 Course completion certificates.

💬 Discussion forums for students & instructors.

📊 Analytics dashboards.

🌍 Multi-language support.

📱 Mobile app integration.

🤝 Contribution Guidelines
We ❤️ contributions!

Fork the repository

Create a new branch (feature/your-feature)

Commit your changes

Push your branch

Open a Pull Request

📄 License
This project is licensed under the MIT License – see the LICENSE file for details.

📬 Contact
Author: Nikhil Kant
📧 Email: nikhilmjgp@gmail.com
🐙 GitHub: https://github.com/nikhidev

