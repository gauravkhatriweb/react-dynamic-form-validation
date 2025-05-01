import React from 'react';
import SmartForm from '../../components/SmartForm';
import { validators } from '../../utils/validation';

const PasswordFormExample: React.FC = () => {
  // Define form fields
  const fields = [
    {
      name: 'password',
      label: 'Password',
      type: 'password' as const,
      placeholder: 'Create a password'
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password' as const,
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
        validator: (value: string) => validators.minLength(value, 8),
        message: 'Password must be at least 8 characters'
      },
      {
        validator: (value: string) => /[A-Z]/.test(value),
        message: 'Password must contain at least one uppercase letter'
      },
      {
        validator: (value: string) => /[0-9]/.test(value),
        message: 'Password must contain at least one number'
      }
    ],
    confirmPassword: [
      {
        validator: validators.required,
        message: 'Please confirm your password'
      },
      {
        validator: (value: string, formValues?: Record<string, string>) => 
          validators.matches(value, 'password', formValues),
        message: 'Passwords do not match'
      }
    ]
  };

  // Handle form submission
  const handleSubmit = async (values: Record<string, string>) => {
    console.log('Form submitted:', values);
    // You would typically send this to your API
    return new Promise<void>((resolve) => {
      setTimeout(resolve, 1000);
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <SmartForm
        fields={fields}
        validationRules={validationRules}
        onSubmit={handleSubmit}
        submitButtonText="Set Password"
        successMessage="Password set successfully!"
      />
    </div>
  );
};

export default PasswordFormExample; 