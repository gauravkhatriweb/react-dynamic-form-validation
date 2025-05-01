import { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import { ValidationRules, validateForm, hasErrors } from '../utils/validation';

interface UseFormProps {
  initialValues: Record<string, string>;
  validationRules: ValidationRules;
  onSubmit: (values: Record<string, string>) => Promise<void> | void;
  resetOnSubmit?: boolean;
}

interface UseFormReturn {
  values: Record<string, string>;
  errors: Record<string, string | null>;
  touched: Record<string, boolean>;
  isSubmitting: boolean;
  isSubmitted: boolean;
  isValid: boolean;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  reset: () => void;
  setFieldValue: (name: string, value: string) => void;
}

const useForm = ({
  initialValues,
  validationRules,
  onSubmit,
  resetOnSubmit = true,
}: UseFormProps): UseFormReturn => {
  const [values, setValues] = useState<Record<string, string>>(initialValues);
  const [errors, setErrors] = useState<Record<string, string | null>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isValid, setIsValid] = useState(false);

  // Initialize form errors
  useEffect(() => {
    const validationErrors = validateForm(values, validationRules);
    setErrors(validationErrors);
    setIsValid(!hasErrors(validationErrors));
  }, [values, validationRules]);

  // Handle input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFieldValue(name, value);
  };

  // Set a field value programmatically
  const setFieldValue = (name: string, value: string) => {
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // Mark field as touched on blur
  const handleBlur = (e: ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Mark all fields as touched
    const allTouched = Object.keys(validationRules).reduce(
      (acc, field) => ({ ...acc, [field]: true }),
      {}
    );
    setTouched(allTouched);
    
    // Validate all fields
    const validationErrors = validateForm(values, validationRules);
    setErrors(validationErrors);
    
    // Only submit if no errors
    if (!hasErrors(validationErrors)) {
      setIsSubmitting(true);
      
      try {
        await onSubmit(values);
        setIsSubmitted(true);
        
        if (resetOnSubmit) {
          reset();
        }
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  // Reset form to initial values
  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitted(false);
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    isValid,
    handleChange,
    handleBlur,
    handleSubmit,
    reset,
    setFieldValue,
  };
};

export default useForm; 