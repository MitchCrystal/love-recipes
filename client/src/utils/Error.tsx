import React from 'react';
import { SuccessErrorProps } from '../../types';

function Error ({ className, text }:SuccessErrorProps) {
  return (
    <div className={`Error ${className}`}>
      <div className="alert alert-error text-center">
        <label>{text}</label>
      </div>
    </div>
  );
}

export default Error;
