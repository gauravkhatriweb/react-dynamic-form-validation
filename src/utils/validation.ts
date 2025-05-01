/**
 * Common validation functions for form fields
 */

export type ValidationRule = {
  validator: (value: string, formValues?: Record<string, string>) => boolean;
  message: string;
};

export type ValidationRules = {
  [key: string]: ValidationRule[];
};

// Pre-built validation functions
export const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
export const passwordMinLength = 8;

// Common validators
export const validators = {
  required: (value: string) => value.trim() !== '',
  email: (value: string) => emailRegex.test(value),
  minLength: (value: string, length: number) => value.length >= length,
  maxLength: (value: string, length: number) => value.length <= length,
  matches: (value: string, field: string, formValues?: Record<string, string>) => 
    formValues ? value === formValues[field] : false,
};

// Validate a single field against its rules
export const validateField = (
  value: string,
  rules: ValidationRule[],
  formValues?: Record<string, string>
): string | null => {
  for (const rule of rules) {
    if (!rule.validator(value, formValues)) {
      return rule.message;
    }
  }
  return null;
};

// Validate all form fields
export const validateForm = (
  values: Record<string, string>,
  rules: ValidationRules
): Record<string, string | null> => {
  const errors: Record<string, string | null> = {};
  
  Object.keys(rules).forEach((fieldName) => {
    const fieldRules = rules[fieldName];
    const fieldValue = values[fieldName] || '';
    
    errors[fieldName] = validateField(fieldValue, fieldRules, values);
  });
  
  return errors;
};

// Check if form has any errors
export const hasErrors = (errors: Record<string, string | null>): boolean => {
  return Object.values(errors).some((error) => error !== null);
}; 