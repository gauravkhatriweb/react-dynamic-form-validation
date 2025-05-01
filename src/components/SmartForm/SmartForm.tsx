import React, { ReactNode } from 'react';
import useForm from '../../hooks/useForm';
import { ValidationRules } from '../../utils/validation';
import Button from '../UI/Button';
import FormField from './FormField';
import styles from './SmartForm.module.css';

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  defaultValue?: string;
}

export interface SmartFormProps {
  fields: FormField[];
  validationRules: ValidationRules;
  onSubmit: (values: Record<string, string>) => Promise<void> | void;
  submitButtonText?: string;
  successMessage?: string;
  resetOnSubmit?: boolean;
  renderCustomField?: (
    field: FormField,
    formProps: {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
      onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
      error: string | null;
      touched: boolean;
    }
  ) => ReactNode;
}

const SmartForm: React.FC<SmartFormProps> = ({
  fields,
  validationRules,
  onSubmit,
  submitButtonText = 'Submit',
  successMessage = 'Form submitted successfully!',
  resetOnSubmit = true,
  renderCustomField,
}) => {
  // Build initial values from fields
  const initialValues = fields.reduce<Record<string, string>>(
    (values, field) => ({
      ...values,
      [field.name]: field.defaultValue || '',
    }),
    {}
  );

  const {
    values,
    errors,
    touched,
    isSubmitting,
    isSubmitted,
    handleChange,
    handleBlur,
    handleSubmit,
  } = useForm({
    initialValues,
    validationRules,
    onSubmit,
    resetOnSubmit,
  });

  return (
    <div className={styles.formContainer}>
      {isSubmitted && (
        <div className={styles.successMessage}>{successMessage}</div>
      )}
      
      <form onSubmit={handleSubmit} noValidate>
        {fields.map((field) => {
          const fieldProps = {
            value: values[field.name] || '',
            onChange: handleChange,
            onBlur: handleBlur,
            error: errors[field.name],
            touched: !!touched[field.name],
          };

          // Use custom field renderer if provided
          if (renderCustomField) {
            return (
              <React.Fragment key={field.name}>
                {renderCustomField(field, fieldProps)}
              </React.Fragment>
            );
          }

          // Otherwise use default field renderer
          return (
            <FormField
              key={field.name}
              name={field.name}
              label={field.label}
              type={field.type}
              placeholder={field.placeholder}
              value={fieldProps.value}
              onChange={fieldProps.onChange}
              onBlur={fieldProps.onBlur}
              error={fieldProps.error}
              touched={fieldProps.touched}
            />
          );
        })}

        <div className={styles.submitContainer}>
          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={isSubmitting}
          >
            {submitButtonText}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SmartForm; 