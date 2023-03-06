import React from 'react';
import Dashboard from '../components/Dashboard';
import { Link } from 'react-router-dom';

function NotFound () {
  return (
    <div className="page-not-found">
      <Dashboard>
        <section className="section">
          <div className="container mx-auto">
            <div className="flex flex-col flex-wrap content-center text-center">
              <div className="prose lg:prose-xl w-full">
                <h1>Page not found!</h1>
                <Link
                  className="btn btn-wide mt-8"
                  to="/"
                >
                  Return to the Home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </Dashboard>
    </div>
  );
}

export default NotFound;
