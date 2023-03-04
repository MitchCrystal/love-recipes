import React from 'react';
import { useState } from 'react';

import Dashboard from '../Dashboard';
import { DownloadRecipeForm, CreateRecipe } from '../recipe';

function Import () {
  const [recipe, setRecipe] = useState(null);

  return (
    <div className="page-import">
      <Dashboard>
        {!recipe ? (
          <>
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
          </>
        ) : (
          <section className="section">
            <div className="container mx-auto">
              <div className="flex justify-center">
                <CreateRecipe fetchedRecipe={recipe} />
              </div>
            </div>
          </section>
        )}
      </Dashboard>
    </div>
  );
}

export default Import;
