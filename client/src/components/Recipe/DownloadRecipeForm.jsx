import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import BackendService from '../../services/BackendService';

const domain = 'https://www.simplyrecipes.com/';

const inputControl = {
  url: 'cheeseburger-casserole-recipe-6835713',
};

DownloadRecipeForm.propTypes = {
  setRecipe: PropTypes.func.isRequired,
};

function DownloadRecipeForm ({ setRecipe }) {
  const [inputs, setInputs] = useState(inputControl);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { url } = inputs;
    const fullUrl = domain + url;
    BackendService.getUrlData(fullUrl).then((response) => {
      response.url = fullUrl;
      setRecipe(response);
    });
    // setInputs(inputControl);
  };

  return (
    <div className="DownloadRecipeForm">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe URL</span>
          </label>
          <label className="input-group">
            <span>{domain.replace(/^http[s]?:\/\/www\./, '')}</span>
            <input
              type="text"
              placeholder="cheeseburger-casserole-recipe-6835713"
              className="input input-bordered"
              name="url"
              value={inputs.url}
              onChange={(e) => setInputs({ ...inputs, url: e.target.value })}
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn"
        >
          Import Recipe
        </button>
      </form>
    </div>
  );
}

export default DownloadRecipeForm;
