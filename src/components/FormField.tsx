import * as React from 'react';
import { FormFieldProps } from './types';

interface DropdownOption {
  value: string;
  label: string;
}

export const FormField: React.FC<FormFieldProps & { options?: DropdownOption[] }> = ({
  label,
  required = false,
  placeholder,
  type = 'text',
  hasDropdown = false,
  options = []
}) => {
  const inputId = label.toLowerCase().replace(/\s+/g, '-');

  return (
    <div className="flex flex-col flex-1 shrink justify-center self-stretch my-auto basis-0 min-w-[240px]">
      <label htmlFor={inputId} className="leading-none text-neutral-700">
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <div className={`flex overflow-hidden ${hasDropdown ? 'gap-2 items-center' : ''} px-4 py-3 mt-2 w-full leading-none rounded-lg border border-solid border-zinc-300 text-neutral-400`}>
        {hasDropdown ? (
          <select
            id={inputId}
            className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none text-neutral-700"
            aria-required={required}
          >
            <option value="" disabled selected>{placeholder}</option>
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            id={inputId}
            placeholder={placeholder}
            className="flex-1 shrink self-stretch my-auto basis-0 bg-transparent border-none outline-none"
            aria-required={required}
          />
        )}
      </div>
    </div>
  );
};