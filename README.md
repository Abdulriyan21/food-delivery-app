# food-delivery-app
# 🍔 Swiggy-like E-Commerce Food Delivery Application

A full-stack, microservices-based food delivery application inspired by **Swiggy**, built using **MERN stack** (MongoDB, Express.js, React.js, Node.js) for gateway & frontend, and **Python (Flask/Django)** for core backend services.

## 📌 Project Overview
This project demonstrates a modern, scalable architecture for online food ordering and delivery. It includes:
- **Microservices Architecture**
- **API Gateway** with Node.js
- **Python Backend Services** for restaurants, orders, and deliveries
- **React Frontend** for customers
- **MongoDB + PostgreSQL** hybrid database setup
- **AWS Deployment** with CI/CD

---

## 🏗️ Architecture

```plaintext
food-delivery-app/
├── client/               # React frontend
├── api-gateway/          # Node.js/Express gateway
├── restaurant-service/   # Python (Flask) microservice
├── order-service/        # Python (Django) microservice
├── user-service/         # Node.js microservice
├── delivery-service/     # Python microservice
└── deployment/           # AWS configs
Tech Stack

* Frontend: React.js, Redux, Material-UI

* Backend: Python (Flask/Django), Node.js/Express

* Database: MongoDB (restaurants, menus), PostgreSQL (orders, transactions)

* Deployment: AWS EC2, RDS, S3, Nginx, Gunicorn/PM2

* Version Control: GitHub

* CI/CD: GitHub Actions
🚀 Features
✅ Browse Restaurants & Menus
✅ Add to Cart & Checkout
✅ Real-Time Order Tracking
✅ Authentication (JWT)
✅ Payment Gateway Integration (Stripe/PayPal)
✅ Microservices Scalability
✅ Hybrid Database Approach
🔧 Installation & Setup
1️⃣ Clone the Repository
git clone https://github.com/yourusername/food-delivery-app.git
cd food-delivery-app
2️⃣ Backend Setup
  Restaurant Service (Flask)
  cd restaurant-service
  python -m venv venv
  source venv/bin/activate  # On Windows: venv\Scripts\activate
  pip install -r requirements.txt
  python app.py
* Order Service (Django)
  cd order-service
  python -m venv venv
  source venv/bin/activate
  pip install -r requirements.txt
  python manage.py migrate
  python manage.py runserver 0.0.0.0:8000
*API Gateway (Node.js)
  cd api-gateway
  npm install
  node index.js
3️⃣ Frontend Setup
  cd client
  npm install
  npm start
🗄️ Database Setup
MongoDB (Restaurants)
  sudo service mongodb start
  mongo
* PostgreSQL (Orders)
  CREATE DATABASE food_delivery;
  CREATE USER delivery_user WITH PASSWORD 'password';
  GRANT ALL PRIVILEGES ON DATABASE food_delivery TO delivery_user;
☁️ Deployment on AWS
  1.EC2 for backend services (Flask/Django/Node.js)
  2.RDS for PostgreSQL
  3.S3 for static React frontend hosting
  4.Nginx as reverse proxy
  5.GitHub Actions for CI/CD
📜 License
This project is licensed under the MIT License.


---

### How to Add This to Your Repo
```bash
cd food-delivery-app
nano README.md   # Paste the above content
git add README.md
git commit -m "Added README.md documentation"
git push origin main






