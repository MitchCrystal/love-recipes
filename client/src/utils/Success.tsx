import React from 'react';
import { SuccessProps } from '../../types';

function Success ({ text }:SuccessProps) {
  return (
    <div className={`Success`}>
      <div className="alert alert-success text-center">
        <label>{text}</label>
      </div>
    </div>
  );
}

export default Success;
