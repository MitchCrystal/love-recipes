import React from 'react';
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import BackendService from '../../services/BackendService';

import FormInput from '../../form/FormInput';
import IngredientsFormList from '../../form/IngredientsFormList';
import InstructionsFormList from '../../form/InstructionsFormList';
import Success from '../../utils/Success';
import Error from '../../utils/Error';

import { recipeDefaultData } from './config';
import { BlankRecipeType, FieldOrderDataType, recipeDefaultDataType } from '../../../types';

interface CreateRecipeDestructuredProps {
    recipe: BlankRecipeType | null;
    title: string;
    textContent?: string;
}


const inputControl = {
  title: '',
  description: '',
  prepTime: '',
  cookTime: '',
  totalTime: '',
  servings: '',
  ingredients: [''],
  instructions: [{ title: '', instructions:['']}],
};

const fieldOrder = [
  'title',
  'description',
  'prepTime',
  'cookTime',
  'totalTime',
  'servings',
];

function CreateRecipe ({ recipe, title, textContent }:CreateRecipeDestructuredProps) {
  const [inputs, setInputs] = useState(Object.create(inputControl));
  const [btnloading, setBtnLoading] = useState(false);
  const [error, setError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (recipe) {
      setInputs(recipe);
    }
  }, [recipe]);

  const handleSubmit = (e: React.SyntheticEvent ): void => {
    e.preventDefault();

    setBtnLoading(true);

    const newRecipe = { ...inputs };

    BackendService.addRecipe(newRecipe).then((response) => {
      // Save to database - or if already exists and user hasn't made changes, pretend to save
      if (response.data) {
        const { data, success } = response;
        navigate(data.url, { state: { recipe: data, success } });
      } else {
        setError(response.error);
        setBtnLoading(false);
      }
    });
  };

  return (
    <div className="CreateRecipe">
      <section className="section">
        <div className="container mx-auto">
          <div className="flex flex-col flex-wrap content-center text-center">
            {location.state && location.state.success && (
              <section className="section flex justify-center">
                <Success text={location.state.success} />
              </section>
            )}

            <div className="prose lg:prose-xl w-full">
              <h1>{title}</h1>
              {textContent && <p>{textContent}</p>}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container mx-auto">
          <div className="flex justify-center">
            <div className="CreateRecipe">
              <form
                className="_form _form--create-recipe"
                onSubmit={handleSubmit}
              >
                <div className="_form__inner form-control w-full">
                  {fieldOrder.map((field, i) => (
                    <FormInput
                      key={i}
                      formField={recipeDefaultData[field as keyof recipeDefaultDataType]}
                      value={inputs[field as keyof FieldOrderDataType]}
                      setInputs={setInputs}
                    />
                  ))}

                  <IngredientsFormList
                    formField={recipeDefaultData.ingredients}
                    list={inputs.ingredients}
                    setInputs={setInputs}
                  />

                  <InstructionsFormList
                    formField={recipeDefaultData.instructions}
                    list={inputs.instructions}
                    setInputs={setInputs}
                  />
                </div>
                <div className="flex flex-col items-center">
                  <button
                    type="submit"
                    className={`btn btn-wide mt-6${
                      btnloading ? ' loading' : ''
                    }`}
                  >
                    Save Recipe
                  </button>

                  {error && (
                    <Error
                      className="mt-8"
                      text={error}
                    />
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default CreateRecipe;
