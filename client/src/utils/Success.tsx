import React from 'react';
import { SuccessErrorProps } from '../../types';

function Success ({ className, text }:SuccessErrorProps) {
  return (
    <div className={`Success ${className}`}>
      <div className="alert alert-success text-center">
        <label>{text}</label>
      </div>
    </div>
  );
}

export default Success;
