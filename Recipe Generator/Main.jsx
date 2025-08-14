import React from "react"
import IngredientsList from "./components/IngredientsList"
import ClaudeRecipe from "./components/ClaudeRecipe"
import {getRecipeFromMistral } from "./ai"

export default function Main() {
    const [ingredients, setIngredients] = React.useState(
        []
    )
    const [recipe, setRecipe] = React.useState("")

    const [loading, setLoading] = React.useState(false);

    async function getRecipe() {
        setLoading(true); // show spinner
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(String(recipeMarkdown));
        setLoading(false); // hide spinner
}

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input
                    type="text"
                    placeholder="e.g. oregano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>

            {ingredients.length > 0 &&
                <IngredientsList
                    ingredients={ingredients}
                    getRecipe={getRecipe}
                />
            }
            {loading && <div className="spinner"></div>}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}