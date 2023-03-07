import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Create, Home, Import, Recipes, Recipe, NotFound } from './pages';
import Navbar from './components/Navbar';

function App () {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/my-recipes"
          element={<Recipes />}
        />
        <Route
          path="/import-recipe"
          element={<Import />}
        />
        <Route
          path="/create-recipe"
          element={<Create />}
        />
        <Route
          path="/recipes/:url"
          element={<Recipe />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  );
}

export default App;
