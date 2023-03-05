import React from 'react';

function Collapse ({ title, content }) {
  return (
    <div className="collapse collapse-arrow collapse-transparent">
      <input
        type="checkbox"
        className="peer"
        defaultChecked
      />
      <div className="collapse-title">{title}</div>
      <div className="collapse-content">{content}</div>
    </div>
  );
}

export default Collapse;
