import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { BlankRecipeType } from '../../types';

import Dashboard from '../components/Dashboard';
import CreateRecipe from '../features/recipe/CreateRecipe';

interface CreateRecipeProps {
  createRecipeState?: {
    recipe: BlankRecipeType;
    title: string;
    textContent?: string;
  }
}

function Create ({createRecipeState}:CreateRecipeProps) {
  const [thisState, setThisState] = useState(createRecipeState || {
    recipe: {
      title: '',
      description: '',
      prepTime: '',
      cookTime: '',
      totalTime: '',
      servings: '',
      ingredients: [''],
      instructions: [{ title: '', instructions: [''] }],
    },
    title: 'Create Recipe',
    textContent: 'Fill in the form to create your own recipe.',
  });

  const location = useLocation();

  // state can be from location state or passed as prop
  useEffect(() => {
    const locationState = location.state;
    setThisState({
      recipe: (locationState && locationState.recipe) || thisState.recipe,
      title: (locationState && locationState.title) || thisState.title,
      textContent:
        (locationState && locationState.textContent) || thisState.textContent,
    });
  }, []);

  return (
    <div className="page-create">
      <Dashboard>
        <CreateRecipe
          recipe={thisState.recipe}
          title={thisState.title}
          textContent={thisState.textContent}
        />
      </Dashboard>
    </div>
  );
}

export default Create;
