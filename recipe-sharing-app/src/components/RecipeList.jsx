import { Link } from 'react-router-dom';
import useRecipeStore from './store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore(state => state.filteredRecipes.length ? state.filteredRecipes : state.recipes);

  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
          <Link to={`/recipe/${recipe.id}`}>View Details</Link>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;