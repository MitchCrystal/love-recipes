import React from 'react';

function Card ({ data }) {
  return (
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
        <div className="card-actions justify-end">
          <div className="icon-text">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
            >
              <g fill="none">
                <path
                  d="M16 30c7.732 0 14-6.268 14-14S23.732 2 16 2S2 8.268 2 16s6.268 14 14 14zM14 9a1 1 0 1 1 2 0v7h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1V9z"
                  fill="currentColor"
                ></path>
              </g>
            </svg>
            <div className="icon-text__text">{data.totalTime}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
