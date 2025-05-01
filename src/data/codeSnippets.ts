// Email Validation Example
export const emailValidationFrontend = `
import React from 'react';
import SmartForm from './components/SmartForm';
import { validators } from './utils/validation';

const EmailFormExample = () => {
  // Define form fields
  const fields = [
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email'
    }
  ];

  // Define validation rules
  const validationRules = {
    email: [
      {
        validator: validators.required,
        message: 'Email is required'
      },
      {
        validator: validators.email,
        message: 'Please enter a valid email address'
      }
    ]
  };

  // Handle form submission
  const handleSubmit = async (values) => {
    console.log('Form submitted:', values);
    // You would typically send this to your API
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <SmartForm
      fields={fields}
      validationRules={validationRules}
      onSubmit={handleSubmit}
      submitButtonText="Validate Email"
      successMessage="Email validated successfully!"
    />
  );
};

export default EmailFormExample;
`;

export const emailValidationBackend = `
// Example Node.js (Express) backend validation

const express = require('express');
const router = express.Router();

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;

// Validation middleware
const validateEmail = (req, res, next) => {
  const { email } = req.body;
  
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address' });
  }
  
  next();
};

// API endpoint with validation
router.post('/validate-email', validateEmail, (req, res) => {
  // If we reach here, validation passed
  res.status(200).json({ 
    success: true, 
    message: 'Email validated successfully',
    email: req.body.email
  });
});

module.exports = router;
`;

// Password Validation Example
export const passwordValidationFrontend = `
import React from 'react';
import SmartForm from './components/SmartForm';
import { validators } from './utils/validation';

const PasswordFormExample = () => {
  // Define form fields
  const fields = [
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Create a password'
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm your password'
    }
  ];

  // Define validation rules
  const validationRules = {
    password: [
      {
        validator: validators.required,
        message: 'Password is required'
      },
      {
        validator: (value) => validators.minLength(value, 8),
        message: 'Password must be at least 8 characters'
      },
      {
        validator: (value) => /[A-Z]/.test(value),
        message: 'Password must contain at least one uppercase letter'
      },
      {
        validator: (value) => /[0-9]/.test(value),
        message: 'Password must contain at least one number'
      }
    ],
    confirmPassword: [
      {
        validator: validators.required,
        message: 'Please confirm your password'
      },
      {
        validator: (value, formValues) => validators.matches(value, 'password', formValues),
        message: 'Passwords do not match'
      }
    ]
  };

  // Handle form submission
  const handleSubmit = async (values) => {
    console.log('Form submitted:', values);
    // You would typically send this to your API
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <SmartForm
      fields={fields}
      validationRules={validationRules}
      onSubmit={handleSubmit}
      submitButtonText="Set Password"
      successMessage="Password set successfully!"
    />
  );
};

export default PasswordFormExample;
`;

export const passwordValidationBackend = `
// Example Node.js (Express) backend validation

const express = require('express');
const router = express.Router();

// Password validation middleware
const validatePassword = (req, res, next) => {
  const { password, confirmPassword } = req.body;
  
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }
  
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }
  
  if (!/[A-Z]/.test(password)) {
    return res.status(400).json({ error: 'Password must contain at least one uppercase letter' });
  }
  
  if (!/[0-9]/.test(password)) {
    return res.status(400).json({ error: 'Password must contain at least one number' });
  }
  
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }
  
  next();
};

// API endpoint with validation
router.post('/set-password', validatePassword, (req, res) => {
  // If we reach here, validation passed
  // In a real app, you would hash the password before storing it
  
  res.status(200).json({ 
    success: true, 
    message: 'Password set successfully'
  });
});

module.exports = router;
`;

// Complete Registration Form Example
export const registrationFormFrontend = `
import React from 'react';
import SmartForm from './components/SmartForm';
import { validators } from './utils/validation';

const RegistrationForm = () => {
  // Define form fields
  const formFields = [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
      placeholder: 'Enter your email',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Create a password',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      placeholder: 'Confirm your password',
    }
  ];

  // Define validation rules
  const validationRules = {
    username: [
      {
        validator: validators.required,
        message: 'Username is required',
      },
      {
        validator: (value) => validators.minLength(value, 3),
        message: 'Username must be at least 3 characters',
      },
      {
        validator: (value) => /^[a-zA-Z0-9_]+$/.test(value),
        message: 'Username can only contain letters, numbers and underscore',
      }
    ],
    email: [
      {
        validator: validators.required,
        message: 'Email is required',
      },
      {
        validator: validators.email,
        message: 'Please enter a valid email address',
      }
    ],
    password: [
      {
        validator: validators.required,
        message: 'Password is required',
      },
      {
        validator: (value) => validators.minLength(value, 8),
        message: 'Password must be at least 8 characters',
      },
      {
        validator: (value) => /[A-Z]/.test(value),
        message: 'Password must contain at least one uppercase letter',
      },
      {
        validator: (value) => /[0-9]/.test(value),
        message: 'Password must contain at least one number',
      }
    ],
    confirmPassword: [
      {
        validator: validators.required,
        message: 'Please confirm your password',
      },
      {
        validator: (value, formValues) => validators.matches(value, 'password', formValues),
        message: 'Passwords do not match',
      }
    ]
  };

  // Handle form submission
  const handleSubmit = async (values) => {
    console.log('Registration form submitted:', values);
    // You would typically send this to your API
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <SmartForm
      fields={formFields}
      validationRules={validationRules}
      onSubmit={handleSubmit}
      submitButtonText="Create Account"
      successMessage="Your account has been created successfully!"
    />
  );
};

export default RegistrationForm;
`;

export const registrationFormBackend = `
// Example Node.js (Express) backend validation

const express = require('express');
const router = express.Router();

// Email validation regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/;
const usernameRegex = /^[a-zA-Z0-9_]+$/;

// Registration validation middleware
const validateRegistration = (req, res, next) => {
  const { username, email, password, confirmPassword } = req.body;
  
  // Username validation
  if (!username) {
    return res.status(400).json({ error: 'Username is required' });
  }
  
  if (username.length < 3) {
    return res.status(400).json({ error: 'Username must be at least 3 characters' });
  }
  
  if (!usernameRegex.test(username)) {
    return res.status(400).json({ error: 'Username can only contain letters, numbers and underscore' });
  }
  
  // Email validation
  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }
  
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: 'Please enter a valid email address' });
  }
  
  // Password validation
  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }
  
  if (password.length < 8) {
    return res.status(400).json({ error: 'Password must be at least 8 characters' });
  }
  
  if (!/[A-Z]/.test(password)) {
    return res.status(400).json({ error: 'Password must contain at least one uppercase letter' });
  }
  
  if (!/[0-9]/.test(password)) {
    return res.status(400).json({ error: 'Password must contain at least one number' });
  }
  
  if (password !== confirmPassword) {
    return res.status(400).json({ error: 'Passwords do not match' });
  }
  
  next();
};

// API endpoint with validation
router.post('/register', validateRegistration, (req, res) => {
  // If we reach here, validation passed
  // In a real app, you would:
  // 1. Check if username/email already exists
  // 2. Hash the password
  // 3. Store user in database
  
  res.status(201).json({ 
    success: true, 
    message: 'Registration successful',
    user: {
      username: req.body.username,
      email: req.body.email
    }
  });
});

module.exports = router;
`; 