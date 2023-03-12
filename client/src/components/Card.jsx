import React from 'react';
import { Link } from 'react-router-dom';

import Rating from './Rating';
import { svgClock, svgEdit, svgClose } from '../assets/svg';

function Card ({ data , onDelete}) {
  return (
    <div className="card card-normal card--hover w-96 bg-base-100 shadow-md">
      <div className="card__hovers">
        <Link
          to={`${data.url}?edit`}
          className="btn btn-icon btn-sm"
        >
          Edit
          {svgEdit}
        </Link>
        
        <button
          className="btn btn-icon btn-sm btn-dele"
          onClick= {() => onDelete(data.id)}
        >
          Delete
          {svgClose}
        </button>
    </div>

      <Link to={data.url}>
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
      </Link>
    </div>
  );
}

export default Card;
