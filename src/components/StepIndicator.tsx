import * as React from 'react';
import { StepIndicatorProps } from './types';

export const StepIndicator: React.FC<StepIndicatorProps> = ({
  label,
  isActive
}) => {
  return (
    <div className={`self-stretch my-auto ${isActive ? 'text-black font-bold' : 'text-gray-400'}`}>
      {label.split('\n').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < label.split('\n').length - 1 && <br />}
        </React.Fragment>
      ))}
    </div>
  );
};