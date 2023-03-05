import React from 'react';
import { useState } from 'react';

import BackendService from '../services/BackendService';

const domain = 'https://www.simplyrecipes.com/';

const inputControl = {
  url: 'cheeseburger-casserole-recipe-6835713',
};

function DownloadRecipeForm ({ setRecipe }) {
  const [inputs, setInputs] = useState(inputControl);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { url } = inputs;
    const fullUrl = domain + url;
    BackendService.getUrlData(fullUrl)
      .then((response) => {
        response.extUrl = fullUrl;
        setRecipe(response);
      })
      .catch((error) => {
        console.log('Error saving recipe:\n', error);

        //show error
      });
    // setInputs(inputControl);
  };

  return (
    <div className="DownloadRecipeForm">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="input-group">
            <span>{domain.replace(/^http[s]?:\/\/www\./, '')}</span>
            <input
              type="text"
              placeholder="cheeseburger-casserole-recipe-6835713"
              className="input input-bordered flex-1"
              name="url"
              value={inputs.url}
              onChange={(e) => setInputs({ ...inputs, url: e.target.value })}
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn btn-wide mt-8"
        >
          Import Recipe
        </button>
      </form>
    </div>
  );
}

export default DownloadRecipeForm;
