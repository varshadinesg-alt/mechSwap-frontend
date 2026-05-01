# MechSwap Backend API

Express.js backend API for MechSwap authentication system with MongoDB and JWT.

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the server directory with the following variables:
```env
MONGO_URI=mongodb://localhost:27017/mechswap
PORT=5000
JWT_SECRET=your_jwt_secret_key_here
```

**Note:** For production, use a strong JWT_SECRET and consider using MongoDB Atlas for cloud database.

## Database Setup

### Local MongoDB
1. Install MongoDB locally
2. Start MongoDB service
3. Update `.env` with your local MongoDB URI

### MongoDB Atlas (Cloud)
1. Create a free MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Update `.env` with your Atlas connection string

## Running the Server

### Development Mode
```bash
npm run dev
```
This uses nodemon for auto-restart on file changes.

### Production Mode
```bash
npm start
```

The server will run on port 5000 by default (or the port specified in `.env`).

## API Endpoints

### Authentication Routes

#### POST /api/auth/signup
Register a new user account.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "9876543210",
  "state": "maharashtra",
  "city": "mumbai",
  "interests": ["cnc-machines", "lathes"],
  "password": "password123"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "User created successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60f1b2b3c4d5e6f7a8b9c0d1",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "User with this email already exists"
}
```

#### POST /api/auth/login
Authenticate a user and receive a JWT token.

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "60f1b2b3c4d5e6f7a8b9c0d1",
    "name": "John Doe",
    "email": "john@example.com"
  }
}
```

**Response (Error):**
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

### Health Check

#### GET /api/health
Check if the server is running.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## User Schema

The User model includes the following fields:
- `name`: String (required)
- `email`: String (required, unique)
- `password`: String (required, hashed with bcrypt)
- `phone`: String (required)
- `state`: String (required)
- `city`: String (required)
- `interests`: Array of Strings (optional)
- `createdAt`: Date (auto-generated)

## Security Features

- Password hashing with bcryptjs (10 salt rounds)
- JWT token authentication (7-day expiration)
- CORS enabled for cross-origin requests
- Input validation on required fields

## Frontend Integration

The frontend is configured to connect to the backend at:
```
http://localhost:5000/api/auth
```

To change the API URL, update the `API_BASE_URL` in `js/auth.js`.

## Deployment

### Deploy to Vercel/Railway/Render
1. Push your code to GitHub
2. Connect your repository to the deployment platform
3. Set environment variables in the deployment platform
4. Deploy

### Environment Variables for Production
- `MONGO_URI`: Your MongoDB connection string
- `PORT`: Port number (usually set by platform)
- `JWT_SECRET`: Strong secret key for JWT signing

## Troubleshooting

### MongoDB Connection Error
- Ensure MongoDB is running
- Check your MONGO_URI in `.env`
- Verify network connectivity

### Port Already in Use
- Change the PORT in `.env`
- Kill the process using the port

### JWT Secret Error
- Ensure JWT_SECRET is set in `.env`
- Use a strong, random string for production

## Project Structure

```
server/
├── models/
│   └── User.js          # User schema with bcrypt
├── routes/
│   └── auth.js          # Authentication routes
├── server.js            # Express server entry point
├── package.json         # Dependencies
├── .env.example         # Environment variables template
└── README.md            # This file
```

## Technologies Used

- **Express.js**: Web framework
- **Mongoose**: MongoDB ODM
- **bcryptjs**: Password hashing
- **jsonwebtoken**: JWT authentication
- **dotenv**: Environment variable management
- **cors**: Cross-origin resource sharing

## License

MIT
