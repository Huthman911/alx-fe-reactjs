import { useRecipeStore } from './store/recipeStore';

const FavoritesList = () => {
  const recipes = useRecipeStore(state => state.recipes);
  const favorites = useRecipeStore(state => state.favorites.map(id => recipes.find(recipe => recipe.id === id)));

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.map(recipe => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FavoritesList;