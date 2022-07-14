import navbar from "../componants/navbar.js";
document.getElementById("container").innerHTML = navbar();



 async function getData(){
    let url = `https://www.themealdb.com/api/json/v1/1/random.php`;
    let res = await fetch(url);
    // console.log(res);
    let data = await res.json();
    append(data.meals);
}
getData();
let append = async (data) => {
    console.log(data)
    let cont = document.getElementById("backgroundimg");
    cont.innerHTML = null;
    data.forEach(({strMealThumb,strMeal}) => {
        let img = document.createElement("img");
        img.src = strMealThumb;
        let t = document.createElement("h5");
        t.innerText = strMeal;
        let div = document.createElement("div");
        div.append(img,t);
        cont.append(div);
    });
    }
