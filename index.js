import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:5173'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Basic routes for preview
app.get('/health', (req, res) => {
  res.json({
    success: true,
    message: 'TechHub API Server is running!',
    timestamp: new Date().toISOString()
  });
});

// Mock auth routes for preview
app.post('/api/auth/login', (req, res) => {
  const { email, password } = req.body;
  
  // Mock authentication - in real app, this would check database
  if (email && password) {
    res.json({
      success: true,
      message: 'Login successful',
      token: 'mock-jwt-token-for-preview',
      user: {
        id: '1',
        name: 'Demo User',
        email: email,
        role: 'member'
      }
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Email and password are required'
    });
  }
});

app.post('/api/auth/signup', (req, res) => {
  const { name, email, password, role } = req.body;
  
  // Mock signup - in real app, this would create user in database
  if (name && email && password) {
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      token: 'mock-jwt-token-for-preview',
      user: {
        id: '1',
        name: name,
        email: email,
        role: role || 'member'
      }
    });
  } else {
    res.status(400).json({
      success: false,
      message: 'Name, email and password are required'
    });
  }
});

app.get('/api/auth/me', (req, res) => {
  // Mock user profile - in real app, this would get user from database
  res.json({
    success: true,
    user: {
      id: '1',
      name: 'Demo User',
      email: 'demo@techhub.com',
      role: 'member'
    }
  });
});

// 404 handler
app.all('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} not found`
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 TechHub API Server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 CORS enabled for frontend at http://localhost:5173`);
});

export default app;