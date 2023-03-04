import { useState } from 'react';

import Dashboard from '../Dashboard';
import { DownloadRecipeForm, CreateRecipe } from '../recipe';

function Import() {
  const [recipe, setRecipe] = useState(null);

  return (
    <div className="page-import">
      <Dashboard>
        {!recipe ? (
          <>
            <section className="section">
              <div className="container mx-auto">
                <div className="flex flex-col justify-center text-center">
                  <div className="_title">
                    <h1>Import a recipe</h1>
                  </div>
                  <div className="_content _content--big">
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
