// function data get 
function fethc_data(url, bindfunc, row_Identifier) {
    const xhr = new XMLHttpRequest();
    xhr.open("get", url);
    xhr.onload = function () {
        var response = JSON.parse(xhr.responseText);
        var response_Inkey = Object.keys(response)[0];
        var calling_data = response[response_Inkey];
        bindfunc(calling_data, row_Identifier)
    }
    xhr.send();
}


// function for html 
function htmlbody(logo, nameoflogo) {
    return `
    <div class="col-md-3 col-lg-3 col-sm-3">
    <img src="${logo}" height="240" width="240">
    <p style="color: white; text-align:center">${nameoflogo}</p>
    </div>`
}
//function binding
function bindfunc(calling_data, row_Identifier) {
    for (var i in calling_data) {
        var logo = calling_data[i].strMealThumb;
        var nameoflogo = calling_data[i].strMeal;
        document.getElementById(`${row_Identifier}`).innerHTML += htmlbody(logo, nameoflogo);
    }
}
fethc_data("latest_meals.json", bindfunc, "latest_meal")
fethc_data("Popular_Ingredients.json", bindfunc, "popular_ing")
fethc_data("random_meals.json", bindfunc, "random_meal")
fethc_data("random_ingredients.json", bindfunc, "Random_ing")
