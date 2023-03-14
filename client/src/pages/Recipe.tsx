import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackendService from '../services/BackendService';
import { recipeDefaultDataType, RecipeType, SavedRecipeType } from '../../types';

import Dashboard from '../components/Dashboard';
import Create from './Create';
import Success from '../utils/Success';

import {
  getRecipeDataLabel,
  recipeDefaultData,
} from '../features/recipe/config';

const sidebarFields_1 = ['servings', 'prepTime', 'cookTime', 'totalTime'];
const sidebarFields_2 = ['ingredients'];

function Recipe () {
  const [recipe, setRecipe] = useState<SavedRecipeType | null>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo404 = () =>
    navigate('/404', { state: { url: location.pathname } });

  useEffect(() => {
    BackendService.fetchRecipe(location.pathname)
      .then((response) => {
        if (response.errorCode && response.errorCode === 404) {
          navigateTo404();
        } else {
          setRecipe(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        navigateTo404();
      });
  }, []);

  // Recipe edited, so display from location.state
  useEffect(() => {
    if (location.state) {
      if (location.state.recipe) setRecipe(location.state.recipe);
    }
  }, [location.state]);

  const render = () => {
    if (location.search === '?edit' && recipe) {
      return (
        <Create
          createRecipeState={{
            recipe,
            title: 'Edit Recipe',
          }}
        />
      );
    }
    return (
      <>
        {location.state && location.state.success && (
          <section className="section flex justify-center">
            <Success text={location.state.success} />
          </section>
        )}
        {recipe &&
          <>
          <section className="section">
            <div className="container mx-auto max-w-screen-xl">
              <div className="flex flex-col flex-wrap">
                <div className="flex">
                  <div className="w-[55%] pr-[3rem]">
                    <section className="section">
                      <div className="prose lg:prose-xl w-full">
                        <h1>{recipe.title}</h1>
                        <p>{recipe.description}</p>
                      </div>
                    </section>

                    <section className="section">
                      <div className="prose lg:prose-xl w-full">
                        <div className="instructions">
                          <ul className="_list _list--numbers _list--dark pl-0">
                            {recipe.instructions.map((instruction, i) => {
                              const { title, instructions } = instruction;
                              return (
                                <li key={i}>
                                  <div className="titleText">
                                    <div className="titleText__title">
                                      {instruction.title}
                                    </div>
                                    <div className="titleText__text">
                                      {instructions.map((value:string, i:number) => (
                                        <p key={i}>{value}</p>
                                      ))}
                                    </div>
                                  </div>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    </section>
                  </div>
                  <div className="sidebar w-[45%]">
                    {recipe.image && (
                      <div className="drop-shadow-xl">
                        <img
                          src={recipe.image}
                          alt={recipe.title}
                        />
                      </div>
                    )}
                    <div className="sidebar__content">
                      <div className="flex flex-wrap">
                        {sidebarFields_1.map((fieldId:string, i:number) => (
                          <div
                            key={i}
                            className="w-1/2"
                          >
                            <div className="labelText">
                              <div className="labelText__label">
                                {getRecipeDataLabel(recipeDefaultData[fieldId as keyof recipeDefaultDataType])}
                              </div>
                              <div className="labelText__text">
                                {recipe[fieldId as keyof SavedRecipeType]}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>

                      {sidebarFields_2.map((fieldId, i) => (
                        <div
                          key={i}
                          className="labelText labelText--big"
                        >
                          <div className="labelText__label">
                            {getRecipeDataLabel(recipeDefaultData[fieldId as keyof recipeDefaultDataType])}
                          </div>
                          <div className="labelText__text">
                            <ul className="_list _list--dark pl-0">
                              {recipe.ingredients.map((value, i) => (
                                <li key={i}>{value}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
      </>}</>
    );
  };

  return (
    <div className="page-recipe">
      <Dashboard>{recipe ? render() : ''}</Dashboard>
    </div>
  );
}

export default Recipe;
