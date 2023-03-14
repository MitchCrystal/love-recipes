import React from 'react';
import { PropsWithChildren } from 'react'

function Carousel ({ children }:PropsWithChildren) {
  return (
    <div className="Carousel">
      <div className="carousel carousel-center p-4 space-x-4">
        {children &&
          (children as any[]).map((child, i) => (
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
