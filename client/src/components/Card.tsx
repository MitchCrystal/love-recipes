import React from 'react';
import { Link } from 'react-router-dom';

import Rating from './Rating';
import { svgClock, svgEdit, svgClose } from '../assets/svg';
import { SavedRecipeType } from '../../types';

interface CardPropsType {
  data: SavedRecipeType;
  onDelete: (id: string) => void
}

function Card ({ data , onDelete}:CardPropsType) {
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
        <div className="card-body dark:text-gray-800">
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
