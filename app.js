// const express = require('express');
// const APIHandler = require('./APIHandler')
// const app = express();
// const port = 8000; 
// const api = new APIHandler('http://localhost:8000')
// const recipes=[]

// api.getFullList()
// .then(recipe=>{
//     console.log(recipe)
//     recipes.push(recipe)
// })
// .catch(error=>{
//     console.log("error in creating recipe array", error)
// })



// app.get('/recipes/:title', (req, res) => {
//   const title = req.params.title;
//   const recipe = recipes.find((recipe) => recipe.title === title);

//   if (!recipe) {
//     res.status(404).json({ error: 'Recipe not found' });
//   } else {
//     res.json(recipe);
//   }
// });

// // Start the server
// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const axios = require('axios');
const express = require('express');
const app = express();
const port = 3000;
const recipes = [];

async function fetchRecipesData() {
  try {
    const response = await axios.get('http://localhost:8000/recipes');
    recipes.push(...response.data);
    console.log('Recipe data fetched and populated.');
  } catch (error) {
    console.error('Error fetching recipe data:', error);
  }
}

// Fetch recipe data when the server starts
fetchRecipesData();

app.get('/recipes/:title', (req, res) => {
  const title = req.params.title;
  const recipe = recipes.find((recipe) => recipe.title === title);

  if (!recipe) {
    res.status(404).json({ error: 'Recipe not found' });
  } else {
    res.json(recipe);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
