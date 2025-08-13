🍔 Swiggy-like Food Delivery App
A Swiggy-like food delivery app built with MERN stack and Python microservices, featuring restaurant browsing, order placement, and delivery tracking.
Features

Restaurant browsing and menu management
Order placement and tracking (Pending, Cooking, Ready, Delivered)
User authentication with JWT
Scalable microservices architecture
Payment integration (Stripe/PayPal, planned)

Technologies Used

Frontend: React.js, Redux, Material-UI
Backend: Python (Flask, Django), Node.js (Express)
Databases: MongoDB (restaurants), PostgreSQL (orders)
Other: JWT, AWS (EC2, RDS, S3), GitHub Actions

Project Structure
food-delivery-app/
├── client/               # React frontend
├── api-gateway/          # Node.js/Express API gateway
├── restaurant-service/   # Python (Flask) restaurant management
├── order-service/        # Python (Django) order processing
├── user-service/         # Node.js user management
├── delivery-service/     # Python delivery tracking
├── .github/workflows/    # CI/CD configuration
├── README.md             # Project documentation
└── LICENSE               # License file

API Documentation

Base URL: http://localhost:3000
Endpoints:
GET /restaurants/restaurants: List restaurants
GET /restaurants/restaurants/<restaurant_id>: Restaurant details
POST /orders/orders: Create order
GET /orders/orders/<order_id>: Order details
POST /users/register: User registration
POST /users/login: User login


