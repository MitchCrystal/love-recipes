import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Create, Home, Import, Recipes, Recipe, NotFound } from './pages';
import Navbar from './components/Navbar';
import { useState } from 'react';

function App() {

  return (
    <div style={{height: "100%", minHeight: "100vh" }} className="App dark:text-white dark:bg-slate-700">
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
