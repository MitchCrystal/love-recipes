import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import { DownloadRecipeForm, CreateRecipe } from '../features';

function Import () {
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (recipe) {
      // navigate to save recipe page
      navigate('/create-recipe', {
        state: {
          recipe,
          textContent:
            'Make any necessary changes and save the recipe to add it to your list.',
        },
      });
    }
  }, [recipe]);

  return (
    <div className="page-import">
      <Dashboard>
        <section className="section">
          <div className="container mx-auto">
            <div className="flex flex-col flex-wrap content-center text-center">
              <div className="prose lg:prose-xl w-full">
                <h1>Import a recipe</h1>
                <p>Import a recipe from your favourite recipe website</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container mx-auto">
            <div className="flex justify-center">
              <DownloadRecipeForm setRecipe={setRecipe} />
            </div>
          </div>
        </section>
      </Dashboard>
    </div>
  );
}

export default Import;
