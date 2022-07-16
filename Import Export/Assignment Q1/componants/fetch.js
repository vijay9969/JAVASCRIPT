let getData = async (url) => {
    let res = await fetch(url);
    let data =  await res.json();
    return data;
}


let append = async (data,container) => {
    container.innerHTML = null;
    console.log(data);
    data.forEach(({strMealThumb,strMeal}) => {
        let img = document.createElement("img");
        img.src = strMealThumb;
        let t = document.createElement("h5");
        t.innerText = strMeal;
        let div = document.createElement("div");
        div.append(img,t);
        container.append(div);
    });
    }

export {getData,append};