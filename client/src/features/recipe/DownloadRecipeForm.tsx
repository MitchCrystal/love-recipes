import React from 'react';
import { useState } from 'react';
import { DownloadRecipeFormProps } from '../../../types';

import BackendService from '../../services/BackendService';

import Error from '../../utils/Error';

const domain = 'https://www.simplyrecipes.com/';

const inputControl = {
  url: '',
};

function DownloadRecipeForm ({ setRecipe }:DownloadRecipeFormProps) {
  const [inputs, setInputs] = useState(inputControl);
  const [btnloading, setBtnLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    setError('');
    setBtnLoading(true);

    const { url } = inputs;
    const fullUrl = domain + url;
    BackendService.getUrlData(fullUrl)
      .then((response: any) => {
        response.data.extUrl = fullUrl;
        if (response.data) {
          setRecipe(response.data);
        } else {
          setError(response.error);
          setBtnLoading(false);
        }
      })
      .catch((error) => {
        console.log('Error saving recipe:\n', error);
        setError(error);
        setBtnLoading(false);
      });
  };

  return (
    <div className="DownloadRecipeForm">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label className="input-group">
            <span>{domain.replace(/^http[s]?:\/\/www\./, '')}</span>
            <input
              type="text"
              placeholder="e.g. cheeseburger-casserole-recipe-6835713"
              className="input input-bordered flex-1 dark:text-black"
              name="url"
              value={inputs.url}
              onChange={(e) => setInputs({ ...inputs, url: e.target.value })}
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className={`btn btn-wide mt-8${btnloading ? ' loading' : ''}`}
        >
          Import Recipe
        </button>
      </form>

      {error && (
        <Error
          className="mt-8"
          text={error}
        />
      )}
    </div>
  );
}

export default DownloadRecipeForm;
