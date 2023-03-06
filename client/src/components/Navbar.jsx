import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Navbar () {
  return (
    <div className="Navbar">
      <div className="navbar mb-2 shadow-lg bg-primary">
        <div className="px-2 mx-2 navbar-start">
          <div className="flex items-stretch">
            <Link
              to="/"
              className="Navbar__logo"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g fill="none">
                  <path
                    d="M18 3a1 1 0 0 1 .993.883L19 4v16a1 1 0 0 1-1.993.117L17 20v-5h-1a1 1 0 0 1-.993-.883L15 14V8c0-2.21 1.5-5 3-5zm-6 0a1 1 0 0 1 .993.883L13 4v5a4.002 4.002 0 0 1-3 3.874V20a1 1 0 0 1-1.993.117L8 20v-7.126a4.002 4.002 0 0 1-2.995-3.668L5 9V4a1 1 0 0 1 1.993-.117L7 4v5a2 2 0 0 0 1 1.732V4a1 1 0 0 1 1.993-.117L10 4l.001 6.732a2 2 0 0 0 .992-1.563L11 9V4a1 1 0 0 1 1-1z"
                    fill="currentColor"
                  ></path>
                </g>
              </svg>
              <span className="Navbar__logo__text text-lg font-bold">
                Love
                <br />
                Recipes
              </span>
            </Link>
          </div>
        </div>
        <div className="px-2 mx-2 navbar-center lg:flex">
          <div className="flex items-stretch">
            {/* <Link
              to="/"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Discover
            </Link> */}
            <NavLink
              to="/my-recipes"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              My Recipes
            </NavLink>
            <NavLink
              to="/import-recipe"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Import
            </NavLink>
            <NavLink
              to="/create-recipe"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Create recipe
            </NavLink>
          </div>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              className="btn btn-ghost rounded-btn"
            >
              <div className="avatar">
                <div className="rounded-full w-10 h-10 m-1">
                  <img src="https://i.pravatar.cc/500?img=32" />
                </div>
              </div>
            </div>
            <ul
              tabIndex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Sign out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
