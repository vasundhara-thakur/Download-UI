let btn = document.querySelector(".btn");
let text = document.querySelector(".text");
let inner = document.querySelector(".inner");
let bottom = document.querySelector(".bottom");
let percentage = document.querySelector(".percentage");
let loader = document.querySelector(".loader");

let grow = 0;

btn.addEventListener("click", () => {

    btn.style.pointerEvents = "none";
    let num = 50 + Math.floor(Math.random()*50);
    
    let int = setInterval(() => {
        grow++ 
        btn.style.display = "none";
        loader.style.display = "block";
        percentage.innerHTML = grow+"%";
        inner.style.width = grow+"%";
    }, num);

    setTimeout(() => {
        clearInterval(int);
        btn.innerHTML = "Downloaded";
        btn.style.display = "block";
        loader.style.display = "none";
        text.innerHTML = "Your file has been downloaded"

    }, num*100);
})