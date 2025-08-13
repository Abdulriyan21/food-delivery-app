# 🍔 Swiggy-like Food Delivery App
 
A **Swiggy-like food delivery app** built with **MERN stack** and **Python microservices**, featuring restaurant browsing, order placement, and delivery tracking.
 
## 🚀 Features
- **Restaurant browsing** and menu management  
- **Order placement** and tracking *(Pending, Cooking, Ready, Delivered)*  
- **User authentication** with JWT  
- **Scalable microservices** architecture  
- **Payment integration** *(Stripe/PayPal — planned)*  
 
## 🛠 Technologies Used
- **Frontend**: React.js, Redux, Material-UI  
- **Backend**: Python (Flask, Django), Node.js (Express)  
- **Databases**: MongoDB *(restaurants)*, PostgreSQL *(orders)*  
- **Other**: JWT, AWS (EC2, RDS, S3), GitHub Actions  
 
## Project Structure
 
```
food-delivery-app/
├── client/               # React frontend
├── api-gateway/          # Node.js/Express gateway
├── restaurant-service/   # Python (Django/Flask) microservice
├── order-service/        # Python microservice
├── user-service/         # Node.js microservice
├── delivery-service/     # Python microservice
└── deployment/           # AWS configs
```
 
## 📜 API Documentation
**Base URL**: `http://localhost:3000`
 
### Endpoints
#### Restaurants
- `GET /restaurants/restaurants` → List restaurants  
- `GET /restaurants/restaurants/<restaurant_id>` → Restaurant details  
 
#### Orders
- `POST /orders/orders` → Create order  
- `GET /orders/orders/<order_id>` → Order details  
 
#### Users
- `POST /users/register` → User registration  
- `POST /users/login` → User login  
