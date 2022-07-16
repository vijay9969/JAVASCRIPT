let getData = async (url) => {
    let res = await fetch(url);
    let data =  await res.json();
    return data;
}


let append = async (data,container,value) => {
    if(value==1){
    container.innerHTML = null;
    console.log(data);
    data.forEach(({strMealThumb,strMeal,strInstructions,strYoutube}) => {
        let img = document.createElement("img");
        img.src = strMealThumb;
        let t = document.createElement("h5");
        t.innerText = strMeal;
        let p1 = document.createElement("p");
        p1.innerText = "YouTube: "+strYoutube;
        let br = document.createElement("br");
        let br1 = document.createElement("br");
        let p2 = document.createElement("p");
        p2.innerText = "Details: "+strInstructions;
        let div = document.createElement("div");
        div.append(img,t,br,p1,br1,p2);
        container.append(div);
    });
}else{
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
}

export {getData,append};