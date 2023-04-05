workflow.recipeInfo = []
const myCards = await Promise.all(
  workflow.recipes.map(async (recipe) => {
    workflow.recipeInfo.push({
      title: recipe.title,
      vegetarian: recipe.vegetarian,
      vegan: recipe.vegan,
      glutenFree: recipe.glutenFree,
      dairyFree: recipe.dairyFree,
      veryHealthy: recipe.veryHealthy,
      cheap: recipe.cheap,
      veryPopular: recipe.veryPopular,
      readyInMinutes: recipe.readyInMinutes,
      servings: recipe.servings,
      summary: recipe.summary
    })
    // create the card object
    return {
      type: 'card',
      title: {
        dynamicValue: `${recipe.title}`,
        valueType: 'dynamic'
      },
      subtitle: {
        dynamicValue: '',
        valueType: 'dynamic'
      },
      imageUrl: {
        dynamicValue: `${recipe.image}`,
        valueType: 'dynamic'
      },
      actions: [
        {
          action: 'url',
          label: 'View Recipe',
          value: `${recipe.sourceUrl}`
        }
      ]
    }
  })
)
workflow.cards = []
for (var card of myCards) {
  workflow.cards.push({
    //in order to render a card, we only need these three fields
    title: card.title,
    imageUrl: card.imageUrl,
    actions: card.actions[0]
  })
}
