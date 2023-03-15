import React from 'react';
import { SuccessProps } from '../../types';

interface ErrorProps extends SuccessProps {
  className: string;
}

function Error ({ className, text }:ErrorProps) {
  return (
    <div className={`Error ${className}`}>
      <div className="alert alert-error text-center">
        <label>{text}</label>
      </div>
    </div>
  );
}

export default Error;
