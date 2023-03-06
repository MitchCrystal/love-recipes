import React from 'react';
import { useEffect } from 'react';

function Carousel ({ children }) {
  useEffect(() => console.log(children));

  return (
    <div className="Carousel">
      <div className="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
        {children &&
          children.map((child, i) => (
            <div
              key={i}
              className="carousel-item"
            >
              {child}
            </div>
          ))}
      </div>
    </div>
  );
}

export default Carousel;
