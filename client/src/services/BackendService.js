const domain = 'http://localhost:3001';

const getUrlData = async (url) => {
  try {
    const response = await fetch(`${domain}/scrape`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ extUrl: url }),
    });
    const result = await response.json();

    return result;
  } catch (error) {
    console.log('getUrlData error:\n', error);
  }
};

const addRecipe = async (newRecipe) => {
  try {
    const response = await fetch(`${domain}/recipe`, {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newRecipe),
    });

    const result = await response.json();

    return result;
  } catch (error) {
    console.log('addRecipe error:\n', error);
  }
};

const fetchRecipes = async () => {
  try {
    const response = await fetch(`${domain}/recipes`, {
      method: 'GET',
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.log('fetchRecipes error:\n', error);
  }
};

export default {
  getUrlData,
  addRecipe,
  fetchRecipes,
};
