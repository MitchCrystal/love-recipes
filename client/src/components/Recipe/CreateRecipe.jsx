import React from 'react';
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import BackendService from '../../services/BackendService';

import FormInput from '../form/FormInput';
import IngredientsFormList from '../form/IngredientsFormList';
import InstructionsFormList from '../form/InstructionsFormList';

function recipeHasChanged (currRecipe) {
  return JSON.stringify(originalRecipe) !== JSON.stringify(currRecipe);
}

const formFields = {
  title: {
    id: 'title',
    placeholder: 'e.g. Spaghetti Bolognese',
  },
  description: {
    id: 'description',
  },
  prepTime: {
    id: 'prepTime',
    label: 'Preparation time',
    placeholder: 'e.g. 20 mins',
    customClass: ' w-6/12',
  },
  cookTime: {
    id: 'cookTime',
    label: 'Cook time',
    customClass: ' w-6/12',
  },
  totalTime: {
    id: 'totalTime',
    label: 'Total time',
    customClass: ' w-6/12',
  },
  servings: {
    id: 'servings',
    placeholder: 'e.g. 4',
    customClass: ' w-6/12',
  },
  ingredients: {
    id: 'ingredients',
    placeholder: 'Add ingredient',
  },
  instructions: {
    id: 'instructions',
  },
};

const inputControl = {
  title: '',
  description: '',
  prepTime: '',
  cookTime: '',
  totalTime: '',
  servings: '',
  ingredients: [],
  instructions: [],
};

let originalRecipe = null;

CreateRecipe.propTypes = {
  fetchedRecipe: PropTypes.object,
};

function CreateRecipe ({ fetchedRecipe }) {
  const [inputs, setInputs] = useState(inputControl);

  useEffect(() => {
    if (fetchedRecipe) {
      originalRecipe = fetchedRecipe;
      setInputs(fetchedRecipe);
    }
  }, [fetchedRecipe]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecipe = { ...inputs };

    if (recipeHasChanged(newRecipe)) {
      delete newRecipe.id; // remove current id so that it is assigned a new id
      newRecipe.original = false;

      BackendService.addRecipe(newRecipe).then((response) => {
        // Error handling-------
        console.log(response);
      });
    }
  };

  return (
    <div className="CreateRecipe">
      <form
        className="_form"
        onSubmit={handleSubmit}
      >
        <div className="_form__inner form-control w-full">
          <FormInput
            field={formFields.title}
            value={inputs.title}
            setInputs={setInputs}
          />
          <FormInput
            field={formFields.description}
            value={inputs.description}
            setInputs={setInputs}
          />
          <FormInput
            field={formFields.prepTime}
            value={inputs.prepTime}
            setInputs={setInputs}
          />
          <FormInput
            field={formFields.cookTime}
            value={inputs.cookTime}
            setInputs={setInputs}
          />
          <FormInput
            field={formFields.totalTime}
            value={inputs.totalTime}
            setInputs={setInputs}
          />
          <FormInput
            field={formFields.servings}
            value={inputs.servings}
            setInputs={setInputs}
          />

          <IngredientsFormList
            field={formFields.ingredients}
            list={inputs.ingredients}
            setInputs={setInputs}
          />

          <InstructionsFormList
            field={formFields.instructions}
            list={inputs.instructions}
            setInputs={setInputs}
          />
        </div>

        <button
          type="submit"
          className="btn"
        >
          Save
        </button>
      </form>
    </div>
  );
}

export default CreateRecipe;
