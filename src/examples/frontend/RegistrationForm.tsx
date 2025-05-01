import React from 'react';
import SmartForm from '../../components/SmartForm';
import { validators } from '../../utils/validation';

const RegistrationForm: React.FC = () => {
  // Define form fields
  const formFields = [
    {
      name: 'username',
      label: 'Username',
      type: 'text' as const,
      placeholder: 'Enter your username',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email' as const,
      placeholder: 'Enter your email',
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password' as const,
      placeholder: 'Create a password',
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password' as const,
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
        validator: (value: string) => validators.minLength(value, 3),
        message: 'Username must be at least 3 characters',
      },
      {
        validator: (value: string) => /^[a-zA-Z0-9_]+$/.test(value),
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
        validator: (value: string) => validators.minLength(value, 8),
        message: 'Password must be at least 8 characters',
      },
      {
        validator: (value: string) => /[A-Z]/.test(value),
        message: 'Password must contain at least one uppercase letter',
      },
      {
        validator: (value: string) => /[0-9]/.test(value),
        message: 'Password must contain at least one number',
      }
    ],
    confirmPassword: [
      {
        validator: validators.required,
        message: 'Please confirm your password',
      },
      {
        validator: (value: string, formValues?: Record<string, string>) => 
          validators.matches(value, 'password', formValues),
        message: 'Passwords do not match',
      }
    ]
  };

  // Handle form submission
  const handleSubmit = async (values: Record<string, string>) => {
    console.log('Registration form submitted:', values);
    // You would typically send this to your API
    return new Promise<void>((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <SmartForm
        fields={formFields}
        validationRules={validationRules}
        onSubmit={handleSubmit}
        submitButtonText="Create Account"
        successMessage="Your account has been created successfully!"
      />
    </div>
  );
};

export default RegistrationForm; 