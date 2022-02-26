const searchFood=() =>{
    const searchFild = document.getElementById("search-fild");
    const searchText = searchFild.value;
    searchFild.value = "";
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res =>res.json())
    .then(data => displaySearchResult(data.meals))
}

const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML=`
            <div class="card" onclick="searchDetails(${meal.idMeal})">
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                     <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0,250)}</p>
                </div>
            </div>
        `;
        searchResult.appendChild(div)
    });
}

const searchDetails = idMeal =>{
    const url =`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
   fetch(url)
   .then(res => res.json())
   .then(data => searchDetailsResult(data.meals[0]))  
}

const searchDetailsResult = meal =>{
    const detailResul = document.getElementById('search-details');
    const div = document.createElement('div');
    div.innerHTML=`
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
      <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
        <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>
    `
    detailResul.appendChild(div)

}