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

    const recipeSection = React.useRef(null);

    const spinnerSection = React.useRef(null);  

    async function getRecipe() {
        setLoading(true); // show spinner
        const recipeMarkdown = await getRecipeFromMistral(ingredients);
        setRecipe(String(recipeMarkdown));
        setLoading(false); // hide spinner
    }

    React.useEffect(() => {
        if (loading && spinnerSection.current !== null) {
            spinnerSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [loading])

    React.useEffect(() => {
        if (recipe !== "" && recipeSection.current !== null) {
            recipeSection.current.scrollIntoView({behavior: "smooth"})
        }
    }, [recipe])

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
            {loading && <div ref={spinnerSection} className="spinner"></div>}
            {recipe && (
            <div ref={recipeSection}>
                <ClaudeRecipe recipe={recipe} />
            </div>
            )}
        </main>
    )
}