# React Dynamic Form Validation

<div align="center">
  <img src="https://i.imgur.com/NXYOUsG.png" alt="React Form Validator Preview" width="800px" />
  <p><em>Beautiful, customizable form validation for React applications</em></p>
  
  <p>
    <a href="#features">Features</a> •
    <a href="#demo">Live Demo</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="#documentation">Documentation</a>
  </p>
</div>

## ✨ Features

- **📝 Multiple Field Types** - Support for text, email, password, and more input types
- **🚀 Real-time Validation** - Instantly validate as users type with clear feedback
- **🔧 Customizable Rules** - Define your own validation rules or use the built-in ones
- **🎨 Modern UI** - Clean, responsive design with subtle animations
- **♿ Accessibility** - Built with proper ARIA attributes and keyboard navigation
- **🌐 Backend Integration** - Examples for both frontend and backend validation
- **🛠️ TypeScript Support** - Fully typed for better developer experience
- **📦 Lightweight** - Minimal dependencies and optimized for performance

## 🖥️ Demo

### [View Live Demo](#) 

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/gauravkhatriweb/react-dynamic-form-validation.git

# Navigate to the project
cd react-dynamic-form-validation

# Install dependencies
npm install

# Start the development server
npm run dev
```

## 🚀 Usage

### Basic Form Example

```jsx
import SmartForm from './components/SmartForm';
import { validators } from './utils/validation';

function MyComponent() {
  // Define form fields
  const fields = [
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'Enter your email'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      placeholder: 'Enter your password'
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
        message: 'Please enter a valid email'
      }
    ],
    password: [
      {
        validator: validators.required,
        message: 'Password is required'
      },
      {
        validator: (value) => validators.minLength(value, 8),
        message: 'Password must be at least 8 characters'
      }
    ]
  };

  // Form submission handler
  const handleSubmit = async (values) => {
    console.log('Form submitted:', values);
    
    // Make API call, etc.
    // await api.login(values);
  };

  return (
    <SmartForm
      fields={fields}
      validationRules={validationRules}
      onSubmit={handleSubmit}
      submitButtonText="Sign In"
      successMessage="You have successfully signed in!"
    />
  );
}
```

## 📚 Documentation

### Component API

#### `<SmartForm />`

| Prop              | Type                                    | Required | Description                                               |
|-------------------|----------------------------------------|----------|-----------------------------------------------------------|
| fields            | FormField[]                            | Yes      | Array of field configurations                             |
| validationRules   | ValidationRules                        | Yes      | Object containing validation rules for each field         |
| onSubmit          | (values: Record<string, string>) => Promise<void> \| void | Yes | Function called when form is submitted    |
| submitButtonText  | string                                 | No       | Text to display on the submit button (default: "Submit")  |
| successMessage    | string                                 | No       | Message to display after successful submission            |
| resetOnSubmit     | boolean                                | No       | Whether to reset form after submission (default: true)    |
| renderCustomField | (field, props) => ReactNode            | No       | Custom renderer for form fields                           |

### Built-in Validators

The library includes several pre-built validators:

- `validators.required`: Checks if a field has a value
- `validators.email`: Validates email format
- `validators.minLength`: Checks minimum length of a field
- `validators.maxLength`: Checks maximum length of a field
- `validators.matches`: Checks if a field matches another field (useful for password confirmation)

### Custom Validators

You can easily create custom validators:

```jsx
const validationRules = {
  username: [
    {
      validator: (value) => /^[a-zA-Z0-9_]+$/.test(value),
      message: 'Username can only contain letters, numbers and underscores'
    }
  ]
};
```

## 📄 Project Structure

```
/src
  /components
    /SmartForm          # Main form component
    /UI                 # UI components (Button, etc.)
    /CodeSnippet        # Code display components 
    /ExampleSection     # Example showcase components
    /Layout             # Page layout components
  /hooks
    useForm.ts          # Form state management hook
  /utils
    validation.ts       # Validation utility functions
  /examples
    /frontend           # Frontend implementation examples
    /backend            # Backend validation examples
  /pages                # Page components
  /data                 # Data and example code snippets
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License.

## 📬 Contact

Gaurav Khatri - [gauravkhatriweb@gmail.com](mailto:gauravkhatriweb@gmail.com)

GitHub: [https://github.com/gauravkhatriweb](https://github.com/gauravkhatriweb) 