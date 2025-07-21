import express from 'express';
import { body } from 'express-validator';
import {
  signup,
  login,
  getMe,
  updateProfile,
  changePassword,
  deactivateAccount
} from '../controllers/authController.js';
import { protect } from '../middleware/auth.js';

const router = express.Router();

// Validation rules
const signupValidation = [
  body('name')
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .isLength({ min: 6 })
    .withMessage('Password must be at least 6 characters long'),
  body('role')
    .isIn(['member', 'chapter_leader'])
    .withMessage('Role must be either member or chapter_leader'),
  body('chapter')
    .if(body('role').equals('chapter_leader'))
    .notEmpty()
    .withMessage('Chapter is required for chapter leaders')
];

const loginValidation = [
  body('email')
    .isEmail()
    .normalizeEmail()
    .withMessage('Please provide a valid email'),
  body('password')
    .notEmpty()
    .withMessage('Password is required')
];

const profileValidation = [
  body('name')
    .optional()
    .trim()
    .isLength({ min: 2, max: 50 })
    .withMessage('Name must be between 2 and 50 characters'),
  body('bio')
    .optional()
    .trim()
    .isLength({ max: 500 })
    .withMessage('Bio cannot be more than 500 characters'),
  body('skills')
    .optional()
    .isArray()
    .withMessage('Skills must be an array'),
  body('skills.*')
    .optional()
    .trim()
    .isLength({ min: 1, max: 50 })
    .withMessage('Each skill must be between 1 and 50 characters'),
  body('socialLinks.github')
    .optional()
    .isURL()
    .withMessage('GitHub URL must be valid'),
  body('socialLinks.linkedin')
    .optional()
    .isURL()
    .withMessage('LinkedIn URL must be valid'),
  body('socialLinks.twitter')
    .optional()
    .isURL()
    .withMessage('Twitter URL must be valid'),
  body('socialLinks.website')
    .optional()
    .isURL()
    .withMessage('Website URL must be valid')
];

const passwordValidation = [
  body('currentPassword')
    .notEmpty()
    .withMessage('Current password is required'),
  body('newPassword')
    .isLength({ min: 6 })
    .withMessage('New password must be at least 6 characters long'),
  body('confirmPassword')
    .custom((value, { req }) => {
      if (value !== req.body.newPassword) {
        throw new Error('Password confirmation does not match password');
      }
      return true;
    })
];

// Public routes
router.post('/signup', signupValidation, signup);
router.post('/login', loginValidation, login);

// Protected routes
router.get('/me', protect, getMe);
router.put('/profile', protect, profileValidation, updateProfile);
router.put('/change-password', protect, passwordValidation, changePassword);
router.put('/deactivate', protect, deactivateAccount);

export default router;