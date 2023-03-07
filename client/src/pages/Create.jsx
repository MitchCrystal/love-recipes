import React from 'react';

import Dashboard from '../components/Dashboard';
import CreateRecipe from '../features/recipe/CreateRecipe';

function Create () {
  return (
    <div className="page-create">
      <Dashboard>
        <CreateRecipe textContent="Fill in the form to create your own recipe." />
      </Dashboard>
    </div>
  );
}

export default Create;
