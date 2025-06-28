Streaming Subscription Table App 📺

A web application that lets users compare and purchase subscription plans for **Amazon Prime**, **Netflix**, and **Disney+ Hotstar** in one place. Users can view plan features side by side, buy plans through **Stripe payments**, and manage their subscriptions.

This project is built to **understand the DevOps workflow** using **Docker** and **Netlify**, and implements a full-stack architecture with modern technologies.

---
✅ Compare subscription plans with details like price, validity, and features  
✅ Buy plans directly via Stripe checkout  
✅ Dashboard to view purchased plans  
✅ Admin functionality to add/edit/remove plans (optional)  
✅ Responsive UI with **Tailwind CSS**

---

🛠️ Tech Stack

- **Frontend:** HTML, CSS, Tailwind CSS, React
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Payments:** Stripe
- **DevOps:** Docker, Netlify (frontend deployment)

---

📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Arunkumar6256/Streaming_subscription_table.git
   cd Streaming_subscription_table
   Install backend dependencies:

bash
Copy
Edit
cd backend
npm install
Install frontend dependencies:

bash
Copy
Edit
cd ../frontend
npm install
⚙️ Running Locally
Make sure you have Docker and Node.js installed.

Start the backend with Docker:

bash
Copy
Edit
docker build -t subscription-backend ./backend
docker run -p 5000:5000 --env-file ./backend/.env subscription-backend
Start the frontend locally:

bash
Copy
Edit
cd frontend
npm start
Open http://localhost:3000 to view the app.

🔒 Stripe Setup
Create a Stripe account.

Get your Stripe Secret Key from the dashboard.

Add it to your backend .env:

ini
Copy
Edit
STRIPE_SECRET_KEY=your_secret_key_here
🌐 Deployment
Frontend: Deploy on Netlify by connecting your GitHub repo. Netlify will handle building and hosting your React app.

Backend: You can deploy to any cloud service (Render, DigitalOcean, AWS, etc.) or run in a Docker container on your own VPS.

📁 Folder Structure
cpp
Copy
Edit
project-root/
  backend/
    server.js
    models/
    routes/
  frontend/
    src/
      components/
      pages/
  Dockerfile
  docker-compose.yml (optional)
  README.md
🐳 DevOps Workflow
✅ Containerize backend with Docker for consistent development & deployment
✅ Automate frontend deployment with Netlify’s CI/CD pipeline
✅ Practice version control and team workflows using Git & GitHub
