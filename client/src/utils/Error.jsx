import React from 'react';

function Error ({ className, text }) {
  return (
    <div className={`Error ${className}`}>
      <div className="alert alert-error text-center">
        <label>{text}</label>
      </div>
    </div>
  );
}

export default Error;
