import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content">
        <div className="px-2 mx-2 navbar-start">
          <span className="text-lg font-bold">Logo</span>
        </div>
        <div className="hidden px-2 mx-2 navbar-center lg:flex">
          <div className="flex items-stretch">
            {/* <Link
              to="/"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Discover
            </Link> */}
            <Link
              to="/my-recipes"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              My Recipes
            </Link>
            <Link
              to="/import-recipe"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Import
            </Link>
            <Link
              to="/create-recipe"
              className="btn btn-ghost btn-sm rounded-btn"
            >
              Create recipe
            </Link>
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
                <a>Item 1</a>
              </li>
              <li>
                <a>Item 2</a>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
