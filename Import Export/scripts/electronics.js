
import navbar from "../components/navbar.js";
document.getElementById("container").innerHTML = navbar();

import {getData,append} from "../components/fetch.js";

const url = `https://fakestoreapi.com/products/category/electronics`;
let container = document.getElementById("cont");
getData(url).then((res) => {
append(res,container);
});

// append(getData(url));
// let getData = async () =>{
//     let res = await fetch(url);
//     let data =  await res.json();
//     console.log(data);
//     append(data);
// }

// getData();


// let append = async (data) => {

// data.forEach(({image,title,price}) => {
//     let img = document.createElement("img");
//     img.src = image;
//     let t = document.createElement("h3");
//     t.innerText = title;
//     let p = document.createElement("p");
//     t.innerText = price;
//     let div = document.createElement("div");
//     div.append(img,t,p);
//     cont.append(div);
// });
// }