import React from 'react';
import SmartForm from '../../components/SmartForm';
import { validators } from '../../utils/validation';

const EmailFormExample: React.FC = () => {
  // Define form fields
  const fields = [
    {
      name: 'email',
      label: 'Email Address',
      type: 'email' as const,
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
        submitButtonText="Validate Email"
        successMessage="Email validated successfully!"
      />
    </div>
  );
};

export default EmailFormExample; 