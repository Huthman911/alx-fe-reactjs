import { useState } from "react";

const AddRecipeForm = () => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !ingredients || !steps) {
      setError("All fields are required");
      return;
    }
    setError("");
    console.log({ title, ingredients, steps });
    alert("Recipe submitted successfully!");
  };

  return (
    <div className="container mx-auto p-6 max-w-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Add New Recipe</h1>
      {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
      <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700">Recipe Title</label>
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Ingredients (comma separated)</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Preparation Steps</label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded-lg"
            value={steps}
            onChange={(e) => setSteps(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;