import React from 'react';

function Success ({ className, text }) {
  return (
    <div className={`Success ${className}`}>
      <div className="alert alert-success text-center">
        <label>{text}</label>
      </div>
    </div>
  );
}

export default Success;
