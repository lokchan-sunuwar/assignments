export interface LocationCardProps {
    image: string;
    city: string;
    type: string;
    company: string;
    address: string;
  }
  
  export interface VerificationInputProps {
    value: string;
    onChange: (value: string) => void;
  }
  
  export interface FormFieldProps {
    label: string;
    required?: boolean;
    placeholder: string;
    type?: string;
    hasDropdown?: boolean;
  }
  
  export interface UploadSectionProps {
    title: string;
    subtitle: string;
    required?: boolean;
  }
  
  export interface StepIndicatorProps {
    label: string;
    isActive: boolean;
  }