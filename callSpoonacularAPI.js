var options = {
  method: 'GET',
  url: 'https://api.spoonacular.com/recipes/complexSearch',
  params: {
    query: workflow.baseQuery,
    diet: encodeURIComponent(workflow.dietType),
    apiKey: env.apiKey,
    number: '3',
    ignorePantry: 'false',
    sort: 'popularity',
    sortDirection: 'asc',
    addRecipeInformation: 'true',
    addRecipeNutrition: 'false'
  }
}
const response = await axios.request(options)
if (response.status == 200) {
  workflow.recipes = response.data.results
} else {
  console.log(`API call failed with status code ${response.status}`)
}
