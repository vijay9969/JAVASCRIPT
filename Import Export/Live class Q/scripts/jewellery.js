import navbar from "../components/navbar.js";
document.getElementById("container").innerHTML = navbar();

import {getData,append} from "../components/fetch.js";

const url = `https://fakestoreapi.com/products/category/jewelery`;

let container = document.getElementById("cont");
getData(url).then((res) => {
append(res,container);
});

    // let append = async (data) => {
    //     let cont = document.getElementById("cont");
    //     data.forEach(({image,title,price}) => {
    //         let img = document.createElement("img");
    //         img.src = image;
    //         let t = document.createElement("h3");
    //         t.innerText = title;
    //         let p = document.createElement("p");
    //         t.innerText = price;
    //         let div = document.createElement("div");
    //         div.append(img,t,p);
    //         cont.append(div);
    //     });
    //     }
