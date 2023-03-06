import React from 'react';
import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Carousel from '../components/Carousel';

import Dashboard from '../components/Dashboard';
import BackendService from '../services/BackendService';

function Recipes () {
  const [allRecipes, setAllRecipes] = useState([]);

  useEffect(() => {
    BackendService.fetchRecipes().then((response) => {
      setAllRecipes(response);
    });
  }, []);

  useEffect(() => {
    console.log(allRecipes);
  });

  const renderRecipeCards = (recipes) => {
    const cards = recipes.map((recipe, i) => (
      <Card
        key={i}
        data={recipe}
      />
    ));
    return cards;
  };

  return (
    <div className="page-recipes">
      <Dashboard>
        {allRecipes.length && (
          <section className="section">
            <div className="container mx-auto">
              <Carousel>{renderRecipeCards(allRecipes)}</Carousel>
            </div>
          </section>
        )}
      </Dashboard>
    </div>
  );
}

export default Recipes;
