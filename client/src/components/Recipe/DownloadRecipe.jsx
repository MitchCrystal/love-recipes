import { useState } from 'react';

import DownloadRecipeForm from '../DownloadRecipeForm';
import CreateRecipe from './CreateRecipe';

function DownloadRecipe() {
  const [recipe, setRecipe] = useState(null);

  return (
    <div className="DownloadRecipe section">
      <div className="container mx-auto grid h-screen place-items-center">
        <DownloadRecipeForm setRecipe={setRecipe} />
        <CreateRecipe fetchedRecipe={recipe} />
      </div>
    </div>
  );
}

export default DownloadRecipe;
