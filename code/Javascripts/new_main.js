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
function htmlbody(logo, nameoflogo, row_Identifier) {
    $.get('temp.html', function (data) {
        let nwData = data.replace('image', logo);
        nwData = nwData.replace('data', nameoflogo);
        document.getElementById(`${row_Identifier}`).innerHTML += nwData;
        // document.getElementById(row_Identifier).innerHTML += nwData;
    })
}
//function binding
function bindfunc(calling_data, row_Identifier) {
    for (var i in calling_data) {
        var logo = calling_data[i].strMealThumb;
        var nameoflogo = calling_data[i].strMeal;
        htmlbody(logo, nameoflogo, row_Identifier);
    }
}

fethc_data("Json_Files/latest_meals.json", bindfunc, "latest_meal")
fethc_data("Json_Files/Popular_Ingredients.json", bindfunc, "popular_ing")
fethc_data("Json_Files/random_meals.json", bindfunc, "random_meal")
fethc_data("Json_Files/random_ingredients.json", bindfunc, "Random_ing")
