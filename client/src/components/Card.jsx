import React from 'react';
import { Link } from 'react-router-dom';

import Rating from './Rating';
import { svgClock } from '../assets/svg';

function Card ({ data }) {
  return (
    <Link to={data.url}>
      <div className="card card-normal card--hover w-96 bg-base-100 shadow-md">
        <figure className="card-image _imgTagBg">
          <img
            src={data.image}
            alt={data.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{data.title}</h2>
          <p>{data.description}</p>
          <div className="card-actions">
            <Rating rating={4} />
            <div className="icon-text">
              {svgClock}
              <div className="icon-text__text">{data.totalTime}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
