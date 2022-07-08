// callback

// 1.login logout
// 2.searching movies
// 3.payment
// 4.Zomato
// 5.downloading




// step:-3-------------------------------------------------------
// let url = "https://course.masaischool.com/assignments";

// function download(url,callback){
//     setTimeout(function(){
//         console.log(`Downloading ${url}`);
//         callback(url);
//     },1000);
   
// }
// function process(url){
//     console.log(`Processing ${url}`);
// }
// download(url,process);
// process(url);


// step :-4--------------------------------------------------
// let url1 = "https://course.masaischool.com/assignments";
// let url2 = "https://course.masaischool.com/assignments";
// let url3 = "https://course.masaischool.com/assignments";
// let url4 = "https://course.masaischool.com/assignments";
// function download(url,callback){
//     setTimeout(function(){
//         console.log(`Downloading ${url}`);
//         callback(url);
//     },1000);
// }
// function process(url){
//     console.log(`Processing ${url}`);
// }
// download(url1,function process(url){
//     console.log(`Processing ${url}`);
//     download(url2,function process(url){
//         console.log(`Processing ${url}`);
//         download(url3,function process(url){
//             console.log(`Processing ${url}`);
//             download(url4,function process(url){
//                 console.log(`Processing ${url}`);
//             });
//         });
//     });
// });
// process(url);


// let p = new Promise();

// let p = new Promise(function(resolve, rejected){
//     // resolve("Resolve");
//     rejected("Nothing");
// });


// console.log(p);

function banksurver(){  
    return true;
}

let payment_promise = new Promise(function(resolve, rejected){
    let pin = banksurver();

setTimeout(function(){
    if(pin){
        resolve("Payment Successful!");
        // document.querySelector("img").src="https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif";
        // document.querySelector("body").style.backgroundColor="#11ba67";
    }else{
        rejected("Try Again later!");
    }
     },1000);
    });

// console.log(payment_promise);

    // Handing the promise
    // .then .catch
    // async await

    // payment_promise.then(function (res) {
    //     console.log(res);
    //     document.querySelector("img").src="https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif";
    //     document.querySelector("body").style.backgroundColor="#11ba67";
    // })
    // payment_promise.catch(function (rej) {
    //     console.log(rej);
    //     document.querySelector("img").src="https://c.tenor.com/flmQIupAKBkAAAAC/steven-he-failure.gif";
    //     document.querySelector("body").style.backgroundColor="red";
    // })
async function content(){
    try {
        let res = await payment_promise;
        console.log(res)
        document.querySelector("img").src="https://i.pinimg.com/originals/e8/06/52/e80652af2c77e3a73858e16b2ffe5f9a.gif";
            document.querySelector("body").style.backgroundColor="#11ba67";
    }
    catch(err){
        // let res = await payment_promise;
        // console.log(res);
    document.querySelector("img").src="https://c.tenor.com/flmQIupAKBkAAAAC/steven-he-failure.gif";
        document.querySelector("body").style.backgroundColor="red";
    }
}
content();