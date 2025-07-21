# TechHub - MERN Stack Application

A comprehensive full-stack web application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring user authentication, role-based access control, event management, and modern UI design.

## 🚀 Features

### Frontend Features
- **Modern React.js with Vite** - Fast development and build process
- **Tailwind CSS** - Utility-first CSS framework for rapid styling
- **Responsive Design** - Mobile-first approach with beautiful UI
- **React Router** - Client-side routing for seamless navigation
- **Context API** - State management for authentication
- **Heroicons** - Beautiful SVG icons
- **Form Validation** - Client-side validation with user feedback

### Backend Features
- **Express.js API** - RESTful API with proper error handling
- **MongoDB with Mongoose** - Document database with ODM
- **JWT Authentication** - Secure token-based authentication
- **Role-based Access Control** - Different permissions for users and chapter leaders
- **Security Middleware** - Helmet, CORS, rate limiting
- **Input Validation** - Server-side validation with express-validator
- **Password Hashing** - Secure password storage with bcrypt

### Security Features
- **JWT Token Authentication** - Secure user sessions
- **Password Encryption** - Bcrypt hashing with salt rounds
- **Rate Limiting** - Protection against brute force attacks
- **CORS Configuration** - Secure cross-origin requests
- **Helmet Security Headers** - Additional security headers
- **Input Sanitization** - Protection against injection attacks

## 📋 Prerequisites

Before running this application, make sure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas)
- **Git**

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <repository-url>
cd mern-app
```

### 2. Backend Setup
```bash
cd server
npm install
```

Create a `.env` file in the server directory:
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/techhub
JWT_SECRET=your_super_secure_jwt_secret_key_here_change_in_production
JWT_EXPIRE=7d
BCRYPT_ROUNDS=12
```

### 3. Frontend Setup
```bash
cd client
npm install
```

### 4. Database Setup

**Option 1: Local MongoDB**
- Install MongoDB locally
- Start MongoDB service
- Database will be created automatically

**Option 2: MongoDB Atlas**
- Create a MongoDB Atlas account
- Create a new cluster
- Get your connection string
- Update `MONGODB_URI` in `.env`

## 🚀 Running the Application

### Development Mode

**Start the Backend Server:**
```bash
cd server
npm run dev
```
Server will run on `http://localhost:5000`

**Start the Frontend Development Server:**
```bash
cd client
npm run dev
```
Frontend will run on `http://localhost:5173`

### Production Mode

**Build the Frontend:**
```bash
cd client
npm run build
```

**Start the Backend in Production:**
```bash
cd server
npm start
```

## 📁 Project Structure

```
mern-app/
├── client/                 # React frontend
│   ├── public/            # Public assets
│   ├── src/
│   │   ├── components/    # React components
│   │   │   ├── auth/     # Authentication components
│   │   │   ├── dashboard/ # Dashboard components
│   │   │   ├── events/   # Event components
│   │   │   └── layout/   # Layout components
│   │   ├── context/      # React context providers
│   │   ├── pages/        # Page components
│   │   ├── App.jsx       # Main App component
│   │   ├── main.jsx      # Entry point
│   │   └── index.css     # Global styles
│   ├── package.json
│   ├── tailwind.config.js
│   └── vite.config.js
├── server/                # Node.js backend
│   ├── config/           # Configuration files
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Custom middleware
│   ├── models/          # Mongoose models
│   ├── routes/          # Express routes
│   ├── index.js         # Server entry point
│   ├── package.json
│   └── .env
└── README.md
```

## 🔐 Authentication & Authorization

### User Roles
- **Member** - Regular users who can view events and join them
- **Chapter Leader** - Can create and manage events for their chapter
- **Admin** - Full system access (to be implemented)

### Authentication Flow
1. User signs up with email and password
2. Server validates input and creates user account
3. Password is hashed using bcrypt
4. JWT token is generated and sent to client
5. Client stores token and includes it in subsequent requests
6. Server validates token on protected routes

### Protected Routes
- `/api/auth/me` - Get current user profile
- `/api/auth/profile` - Update user profile
- `/api/auth/change-password` - Change password
- `/api/auth/deactivate` - Deactivate account

## 🎨 UI/UX Features

### Design System
- **Color Palette** - Primary blue theme with gray accents
- **Typography** - Clean, readable fonts with proper hierarchy
- **Spacing** - Consistent spacing using Tailwind's scale
- **Components** - Reusable, accessible components

### Responsive Design
- **Mobile First** - Designed for mobile devices first
- **Breakpoints** - Responsive across all screen sizes
- **Navigation** - Mobile-friendly navigation with hamburger menu
- **Forms** - Touch-friendly form inputs and buttons

### User Experience
- **Loading States** - Visual feedback during API calls
- **Error Handling** - Clear error messages and validation
- **Success Feedback** - Confirmation messages for actions
- **Accessibility** - ARIA labels and keyboard navigation

## 🔧 API Endpoints

### Authentication Routes
```
POST /api/auth/signup     # Register new user
POST /api/auth/login      # User login
GET  /api/auth/me         # Get current user (protected)
PUT  /api/auth/profile    # Update profile (protected)
PUT  /api/auth/change-password # Change password (protected)
PUT  /api/auth/deactivate # Deactivate account (protected)
```

### Health Check
```
GET /health              # Server health check
```

## 🚦 Environment Variables

### Server (.env)
```env
NODE_ENV=development|production
PORT=5000
MONGODB_URI=mongodb://localhost:27017/techhub
JWT_SECRET=your_secret_key
JWT_EXPIRE=7d
BCRYPT_ROUNDS=12
```

## 🔒 Security Measures

### Backend Security
- **Helmet.js** - Security headers
- **CORS** - Cross-origin resource sharing configuration
- **Rate Limiting** - Prevent brute force attacks
- **Input Validation** - Server-side validation
- **Password Hashing** - Bcrypt with salt rounds
- **JWT Tokens** - Secure authentication

### Frontend Security
- **Environment Variables** - Sensitive data protection
- **Input Sanitization** - XSS prevention
- **HTTPS Only** - Secure connections in production
- **Token Storage** - Secure token handling

## 🧪 Testing

### Running Tests
```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test
```

## 📦 Deployment

### Frontend Deployment (Vercel/Netlify)
1. Build the project: `npm run build`
2. Deploy the `dist` folder
3. Configure environment variables

### Backend Deployment (Heroku/Railway)
1. Set environment variables
2. Deploy the server directory
3. Ensure MongoDB connection

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 👥 Team

- **Frontend Development** - React.js, Tailwind CSS, Vite
- **Backend Development** - Node.js, Express.js, MongoDB
- **Security** - JWT, bcrypt, Helmet, Rate Limiting
- **UI/UX Design** - Modern, responsive design

## 🆘 Support

For support and questions:
- Create an issue in the repository
- Contact the development team
- Check the documentation

## 🔄 Version History

- **v1.0.0** - Initial release with authentication and basic features
- **v1.1.0** - Added event management (planned)
- **v1.2.0** - Added tutorial system (planned)
- **v2.0.0** - Mobile app version (planned)

---

Built with ❤️ using the MERN stack