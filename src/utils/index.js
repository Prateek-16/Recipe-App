
export async function fetchRecipes (filter){
    const {query, limit} = filter;

    const url = `https://api.edamam.com/search?q=${query}&app_id=dc0ec3d8&app_key=cb4277d720daa9de9924fd0675e5c5b3&from=0&to=${limit}&`;


    const response = await fetch(url)

    const data = await response.json();

    return data?.hits;
}

export async function fetchRecipe(id){
const url = `https://api.edamam.com/search?r=http://www.edamam.com/ontologies/edamam.owl%23${id}&app_id=dc0ec3d8&app_key=cb4277d720daa9de9924fd0675e5c5b3`

const response = await fetch(url)

const data = await response.json();

return data[0];
}