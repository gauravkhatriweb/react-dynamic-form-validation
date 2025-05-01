import React, { InputHTMLAttributes } from 'react';
import styles from './SmartForm.module.css';

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'password';
  error?: string | null;
  touched?: boolean;
}

const FormField: React.FC<FormFieldProps> = ({
  label,
  name,
  type = 'text',
  error,
  touched = false,
  ...props
}) => {
  const showError = Boolean(error && touched);
  
  const inputClasses = [
    styles.input,
    showError ? styles.inputError : '',
  ].filter(Boolean).join(' ');
  
  const inputId = `field-${name}`;
  
  return (
    <div className={styles.formGroup}>
      <label 
        htmlFor={inputId} 
        className={styles.label}
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type}
        name={name}
        className={inputClasses}
        aria-invalid={showError}
        aria-describedby={showError ? `${name}-error` : undefined}
        {...props}
      />
      {showError && (
        <div 
          id={`${name}-error`} 
          className={styles.errorMessage}
          role="alert"
        >
          {error}
        </div>
      )}
    </div>
  );
};

export default FormField; 