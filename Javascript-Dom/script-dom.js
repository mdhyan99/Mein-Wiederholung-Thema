const title = document.getElementsByTagName("h1");
console.log(title);
const title2 = document.querySelectorAll("h1");
console.log(title);
title2.forEach((elem) => elem.classList.add("title"));

// html element zu erstellen  mit der hilfe von Dom
// const body = document.querySelector("body");
const secondTitle = title[1];
const ourList = document.createElement("ul");
secondTitle.before(ourList);
const listItem = document.createElement("li");
ourList.appendChild(listItem);
listItem.innerHTML = "Hallo muhannad";
const listItem2 = document.createElement("li");
const listItem3 = document.createElement("li");
ourList.append(listItem2, listItem3);
listItem2.innerHTML = "<h2>Hallo muhannad 2</h2>";
listItem3.innerText = "Hallo muhannad 3";
listItem3.textContent = "Hallo muhannad 3";

// html element zu gestalten  mit der hilfe vom Dom
listItem.style.color = "red";

// event beim  Dom
const button = document.createElement("button");
title[1].after(button);
button.innerText = "Cick me !!";


const message = document.createElement("p");
button.after(message);
message.innerHTML = "you have already clicked";
message.style.fontSize = "1.2rem";
message.style.color = "red";
message.style.display = "none"
button.addEventListener("click", (e) => {
    if(message.style.display ==="none") 
    message.style.display ="block"
    else message.style.display="none"
});

const nameInput = document.createElement("input")
button.after(nameInput)
const myName =document.createElement("p")
nameInput.after(myName)
nameInput.addEventListener("input",(e)=>{
    myName.innerText ="Name"
})