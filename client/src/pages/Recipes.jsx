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
        {allRecipes.length ? (
          <section className="section">
            <Carousel>{renderRecipeCards(allRecipes)}</Carousel>
          </section>
        ) : (
          <div className="loader">
            <img
              src="/src/assets/images/loader-3.gif"
              alt="loader"
              width="40"
              height="40"
            />
          </div>
        )}
      </Dashboard>
    </div>
  );
}

export default Recipes;
