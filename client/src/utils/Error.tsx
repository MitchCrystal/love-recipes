import React from 'react';
import { ErrorProps } from '../../types';

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
