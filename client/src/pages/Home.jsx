import React from 'react';
import { useEffect } from 'react';

import Dashboard from '../components/Dashboard';
import BackendService from '../services/BackendService';

function Home () {
  useEffect(() => {
    BackendService.fetchRecipes().then((response) => {
      console.log(response);
    });
  }, []);

  return (
    <div className="page-home">
      <Dashboard>
        <section className="section">
          <div className="container mx-auto">Home</div>
        </section>
      </Dashboard>
    </div>
  );
}

export default Home;
