import React, { useEffect, useState } from 'react';
import Recipe from './Recipe.js';
import './App.css';
import uuid from 'react-uuid';
import Navbar from './components/Navbar.js';

const App = () => {

  const APP_ID = 'a6145408';
  const APP_KEY = '42b32afc0329428252fae308732ef3ba';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState('chicken');

  useEffect( () => {
    getRecipes();
  }, [query]);

  // This will send a request everytime the user inputs a letter
  // useEffect( () => {
  //   getRecipes();
  // }, [search]);

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  return (
    <div className="App">
      <Navbar 
        getSearch={getSearch}
        search={search}
        updateSearch={updateSearch}
      />
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            key={uuid()}
            title={recipe.recipe.label} 
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            nutrition={recipe.recipe.digest}
            servings={recipe.recipe.yield}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
