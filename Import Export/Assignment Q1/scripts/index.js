import navbar from "../componants/navbar.js"
document.getElementById("container").innerHTML = navbar();


// import {getData,append} from "../componants/fetch.js";

// let url = 'www.themealdb.com/api/json/v1/1/filter.php?c=Seafood';
// let container = document.getElementById("cont");
// getData(url).then((res) => {
// append(res,container);
// });

import {getData,append} from "../componants/fetch.js";

document.getElementById("search").addEventListener("click",searchFun);
searchFun()
function searchFun(){

    let Query = document.getElementById("Query").value;

    if(Query == ""){
                Query = "indian";
            }

    let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${Query}`;

    let container = document.getElementById("backgroundimg");

    getData(url).then((res) => {
        append(res.meals,container);
        });

//  async function getData(Query){
//     console.log(Query);
//     if(Query == ""){
//         Query = "indian";
//     }
    
//     let url = `https://www.themealdb.com/api/json/v1/1/filter.php?a=${Query}`;
//     let res = await fetch(url);
//     // console.log(res);
//     let data = await res.json();
//     append(data.meals);
// }
// getData(Query);
// let append = async (data) => {
//     let cont = document.getElementById("backgroundimg");
//     cont.innerHTML = null;
//     data.forEach(({strMealThumb,strMeal}) => {
//         let img = document.createElement("img");
//         img.src = strMealThumb;
//         let t = document.createElement("h5");
//         t.innerText = strMeal;
//         let div = document.createElement("div");
//         div.append(img,t);
//         cont.append(div);
//     });
//     }
}