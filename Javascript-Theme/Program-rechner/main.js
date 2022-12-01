//  const span = document.querySelectorAll("span")
// const v = window.innerWidth;
// const f = window.innerHeight;

// var x = document.querySelector("p")
// x.innerHTML = `width :  ${v} height: ${f}`
const table = document.querySelector("table");
const tbody = document.querySelector("tbody");

const td1 = document.querySelector(".datum");
const tr1 = document.getElementsByClassName("erste");
const newdatum = document.createElement("input");
td1.addEventListener("click", function(event){
    event.preventDefault()
    // const datum =;

    td1.append(newdatum);
    

});
// td1.addEventListener(("focus",(event) => {
//     event.target.style.border="red"
// }))
// const td2 = document.querySelector(".datum2");
// td2.onmouseenter = function(){
    
//     const newdatum2 = document.createElement("input");
//     td2.append(newdatum2);
// };