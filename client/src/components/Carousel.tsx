import React from 'react';
//import { PropsWithChildren } from 'react'

function Carousel({ children }: {children:React.ReactNode[]}) {
  return (
    <div className="Carousel">
      <div className="carousel carousel-center p-4 space-x-4">
        {children &&
          (children).map((child, i) => (
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
