import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { svgLogo } from '../assets/svg';

function Navbar ():JSX.Element {
const [theme, setTheme]=useState('light');
const element = document.documentElement;
const options = [
  {
    icon:"sunny",
    text: "light"
  },
  {
    icon:"moon",
    text: "dark"
  }
];

useEffect(()=> {
 switch(theme){
   case "dark":
    element.classList.add("dark");
    localStorage.setItem("theme","dark");
    break;
   case "light":
    element.classList.remove('dark');
    localStorage.setItem("theme","light");
    break;
   default:
    localStorage.removeItem("theme");
    break;
 }
},[theme]);

  return (
    <div className="Navbar">
      <div className="navbar mb-2 shadow-lg bg-primary dark:text-white dark:bg-slate-600 duration-100">
        <div className="px-2 mx-2 navbar-start">
          <div className="flex items-stretch">
            <Link
              to="/my-recipes"
              className="Navbar__logo"
            >
              {svgLogo}
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
        <div className="px-2 text-lg font-bold lg:flex">
         {options?.map((opt)=>(
                      <button 
                      key={opt.text}
                      onClick={()=> setTheme(opt.text)}
                      className={`w-8 h-8 leading-9 tex-xl rounded-full m-1 ${
                        theme===opt.text && 'text-yellow-400'}`}
                      >
                      <ion-icon name={opt.icon}></ion-icon>
                      </button>
         ))}
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="btn btn-ghost rounded-btn"
            >
              <div className="avatar">
                <div className="rounded-full w-10 h-10 m-1">
                  <img src="https://i.pravatar.cc/500?img=2" />
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
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
