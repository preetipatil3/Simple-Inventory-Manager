🏷️ Inventory Manager

A simple Inventory Management Web Application built using React.js, Node.js, Express, and MySQL.
This project allows users to manage warehouse products — add, edit, delete, and search items efficiently.

🚀 Features

✅ Add new inventory items (Name, Quantity, Supplier, Description)

✅ Edit existing items inline

✅ Delete items with confirmation

✅ Search items by name

✅ Pagination – displays only 5 items per page

✅ Auto-refresh after CRUD operations

✅ Frontend–Backend integration using REST APIs

✅ MySQL database connected via Sequelize ORM

🧱 Tech Stack
Layer	Technology
Frontend	React.js, Axios, CSS
Backend	Node.js, Express.js
Database	MySQL (via Sequelize ORM)
Hosting	Render / Railway (Backend), Netlify / Vercel (Frontend)

📁 Project Structure
Inventory-Manager/
│
├── backend/
│   ├── controllers/
│   │   └── items.controller.js
│   ├── models/
│   │   └── item.model.js
│   ├── routes/
│   │   └── item.routes.js
│   ├── config/
│   │   └── db.config.js
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── ItemForm.js
│   │   │   ├── ItemList.js
│   │   │   └── SearchBar.js
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
│   ├── .env
│   └── package.json
│
└── README.md

⚙️ Setup Instructions
1️⃣ Clone the Repository
git clone https://github.com/preetipatil3/Inventory-Manager.git
cd Inventory-Manager

2️⃣ Backend Setup
cd backend
npm install


Create a .env file:

DB_HOST=your_mysql_host
DB_USER=your_mysql_user
DB_PASSWORD=your_mysql_password
DB_NAME=your_database_name
PORT=5000


Run the backend:

npm start

3️⃣ Frontend Setup
cd frontend
npm install


Create a .env file in frontend:

REACT_APP_API_URL=http://localhost:5000


Run the frontend:

npm start

🧩 API Endpoints
Method	Endpoint	Description
GET	/api/items	Get all items
POST	/api/items	Add new item
PUT	/api/items/:id	Update existing item
DELETE	/api/items/:id	Delete an item

💡 Future Enhancements

🔐 Add user authentication (Admin Login)

🏷️ Add product categories

⚠️ Add low-stock alerts

📦 Export inventory data as CSV or PDF
