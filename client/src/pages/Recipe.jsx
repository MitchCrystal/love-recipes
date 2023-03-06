import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import BackendService from '../services/BackendService';

import Dashboard from '../components/Dashboard';
import Success from '../utils/Success';

function Recipe () {
  const [recipe, setRecipe] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const navigateTo404 = () =>
    navigate('/404', { state: { url: location.pathname } });

  useEffect(() => {
    BackendService.fetchRecipe(location.pathname)
      .then((response) => {
        console.log(response);
        if (response.errorCode && response.errorCode === 404) {
          navigateTo404();
        } else {
          setRecipe(response.data);
        }
      })
      .catch((error) => {
        console.log(error);
        navigateTo404();
      });
  }, []);

  useEffect(() => console.log(recipe));

  return (
    <div className="page-recipe">
      <Dashboard>
        <section className="section">
          <div className="container mx-auto">
            <div className="flex flex-col flex-wrap content-center text-center">
              {location.state && location.state.success && (
                <Success
                  className="mb-8"
                  text={location.state.success}
                />
              )}

              <div className="prose lg:prose-xl w-full">
                <h1>Create Recipe</h1>
                <p>textContent</p>
              </div>
            </div>
          </div>
        </section>
      </Dashboard>
    </div>
  );
}

export default Recipe;
