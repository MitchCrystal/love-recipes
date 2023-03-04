import { Route, Routes } from 'react-router-dom';

import { Create, Discover, Import, Recipes } from './pages';
import Navbar from './Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Discover />}
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
      </Routes>
    </div>
  );
}

export default App;
