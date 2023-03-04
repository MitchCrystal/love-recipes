import React from 'react';

import Dashboard from '../Dashboard';
import CreateRecipe from '../recipe/CreateRecipe';

function Create () {
  return (
    <div className="page-create">
      <Dashboard>
        <CreateRecipe />
      </Dashboard>
    </div>
  );
}

export default Create;
