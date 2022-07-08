let APIkey = "AIzaSyAcRCII21IULT1q6G3wEaqBmSXRo7aSAA4";

// 'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=kgf&key=AIzaSyAcRCII21IULT1q6G3wEaqBmSXRo7aSAA4';
// Search()
let Search = async() => {
let query = document.getElementById("query").value;
let data = await getData(query);
append(data);
console.log(data);
}
let getData = async (query) => {
    let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${APIkey}`;
    let res = await fetch(url);
    let data = await res.json();
    return data.items;
}


let append = (data) => {
let container = document.getElementById("container");
container.innerHTML = null;
data.forEach((el) => {
// snippet ===> title.................
//  snippet ===> thumbnails ---> medium--->url...................
let img = document.createElement("img");
img.src = el.snippet.thumbnails.medium.url;
let h3 = document.createElement("h3");
h3.innerText = el.snippet.title;
let div = document.createElement("div");
div.onclick = () => {
    saveVideo(el);
}
div.setAttribute("class","video");
div.append(img,h3);
container.append(div);
});
}


let saveVideo = (data) => {
localStorage.setItem("video" ,JSON.stringify(data));
window.location.href="video.html";
}