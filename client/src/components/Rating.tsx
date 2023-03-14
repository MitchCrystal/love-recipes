import React from 'react';
import { RatingProp } from '../../types';

function Rating ({ rating }:RatingProp) {
  return (
    <>
      {rating > 1 && (
        <div className={`Rating Rating--${Math.round(rating)}`}>
          {Array(5)
            .fill(1)
            .map((val, i) => (
              <span
                key={i}
                className={`mask mask-star-2${
                  i + 1 <= rating ? ' Rating__fill' : ''
                }`}
              ></span>
            ))}
        </div>
      )}
    </>
  );
}

export default Rating;
