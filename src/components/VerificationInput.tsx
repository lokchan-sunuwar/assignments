import * as React from "react";
import { VerificationInputProps } from "./types";

export const VerificationInput: React.FC<VerificationInputProps> = ({
  value,
  onChange
}) => {
  const inputRefs = Array(6).fill(0).map(() => React.useRef<HTMLInputElement>(null));

  const handleChange = (index: number, value: string) => {
    if (value.length <= 1 && /^\d*$/.test(value)) {
      onChange(value);
      if (value && index < 5) {
        inputRefs[index + 1]?.current?.focus();
      }
    }
  };

  return (
    <div className="flex justify-between items-center w-full">
      {Array(6).fill(0).map((_, index) => (
        <input
          key={index}
          ref={inputRefs[index]}
          type="text"
          maxLength={1}
          value={value[index] || ""}
          onChange={(e) => handleChange(index, e.target.value)}
          className="w-12 h-12 text-center border rounded-md"
          aria-label={`Verification code digit ${index + 1}`}
        />
      ))}
    </div>
  );
};