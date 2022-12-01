// let myElement = document.createElement("div"); // <div></div>

// let myAttr = document.createAttribute("data-custom");

// let myText = document.createTextNode("Product One");

// let myComment = document.createComment("This Is Div");

// myElement.className = "product"; //  <div (class="product") data-custom >Product One</div>

// myElement.setAttributeNode(myAttr); // <div (data-custom) ></div>

// myElement.setAttribute("data-test", "Testing"); //  <div class="product" (data-test="Testing") data-custom >Product One</div>

// // Append Text To Element
// myElement.appendChild(myText); // <div data-custom >(Product One)</div>
// // Append Commint To Element
// myElement.appendChild(myComment);
// // Append Element To Body
// document.body.appendChild(myElement); // fügt in body alle element unt zeigt  text das in browser

let mySelectElement = document.createElement("div");

let myH2Element = document.createElement("h3");
let myPElement = document.createElement("p");

let myH2Text = document.createTextNode("Product Title");
let myPText = document.createTextNode("Product Description");
myH2Element.appendChild(myH2Text);
mySelectElement.appendChild(myH2Element);

myPElement.appendChild(myPText);
mySelectElement.appendChild(myPElement);

mySelectElement.className = "product2";
document.body.appendChild(mySelectElement);

let myBtn = document.getElementById("btn");
myBtn.onclick = function () {
    console.log("Clicked");
};

// Form Validate Beispiel
// form ist in html
let userInput = document.querySelector(".username");
let ageInput = document.querySelector(".age");
document.forms[0].onsubmit = function (e) {
    let userValid = false;
    let ageValid = false;
    if (userInput.value !== "" && userInput.value.length <= 10) {
        userValid = true;
    }
    if (ageInput.value !== "") {
        ageValid = true;
    }
    if (userValid === false || ageValid === false) {
        e.preventDefault();
    }
};

// Event Focus Blur
let one = document.querySelector(".one");
let two = document.querySelector(".two");
window.onload = function () {
    two.focus();
}; // wenn die seite auf die mouse dierekt in this feld
one.onblur = function () {
    document.links[0].click();
}; // wenn wir dieses feld ausfüllen und raus von dieses feld die seite öffnet dierekt zu links[0]

// ClassList add remove toggle
let element = document.getElementById("my-div");
console.log(element.classList); // zeigt uns was von class hat
console.log(typeof element.classList); // object
console.log(element.classList.contains("show")); // true weil hat ein class show
console.log(element.classList.contains("osama")); // false weil hat nicht ein class osama
console.log(element.classList.item(0)); // one  0 ist erste class
element.onclick = function () {
    element.classList.add("add-one", "add-two");
};
// <div id="my-div" class="one two show test (add-one add-two) ">Div with Many Classes</div>
//wenn wir auf div klicken hier hat  neu classen hinzufügt
element.onclick = function () {
    element.classList.remove("one", "two");
};
//     <div id="my-div" class="show test">Div with Many Classes</div>
// wenn wir auf div klicken hier hat  die classen gelöcht
element.onclick = function () {
    element.classList.toggle("ahmad");
};
// <div id="my-div" class="one two show test (ahmad) ">Div with Many Classes</div>
//wenn wir auf div klicken hier wenn class ist in div dann löcht dass class wenn ist nicht in div dann fügt zu
// dass bedeudet toggle == add() und remove()

// Css styling and stylesheets
let element2 = document.getElementById("my-div2");
element2.style.color = "red";
element2.style.backgroundColor = "green";
element2.style.cssText = "font-weight:bold ;color:red ;opacity:0.3";
// hier wir können alles css style schreiben  aber was vor ist ignoriert

element2.style.removeProperty("color"); // hier löcht die color von inline property
element2.style.setProperty("font-size", "40px", "important");
// hier fügt neu property die color in inline property
// hier muss drei werte in setProperty (propertyName,value,priority)

// wenn css in ein datei ist main.css
document.styleSheets[0].rules[0].style.removeProperty("background-color");
// hier löcht die property von main.css
document.styleSheets[0].rules[0].style.setProperty("color", "red", "important");
// hier fügt property in  main.css

// Befor,After,,Remove
let element3 = document.getElementById("my-div3");
let createdP = document.createElement("p");
let createdP2 = document.createElement("p");

element3.before("Hello before DIV"); // auser element
//"Hello before DIV"
//<div id="my-div3">Div has <span>Span</span></div>
// hier zeig die text vor dem div
element3.before(createdP); // auser element
// <p></p>
//<div id="my-div3">Div has <span>Span</span></div>
// hier zeig die <p></p>  vor dem div

element3.after("Hello after DIV"); // auser element
//<div id="my-div3">Div has <span>Span</span></div>
//"Hello after DIV"
// hier zeig die text nach dem div
element3.after(createdP2); // auser element
//<div id="my-div3">Div has <span>Span</span></div>
// <p></p>
// hier zeig die <p></p>  nach dem div

// Prepend,Append
element3.prepend("Hello prepend DIV");
// innerhalb das element in start element
//<div id="my-div3"> "Hello prepend DIV"  Div has <span>Span</span></div>
element3.prepend(createdP);
// innerhalb das element in start element
//<div id="my-div3"> <p></p>  Div has <span>Span</span></div>

element3.append("Hello append DIV");
// innerhalb das element am ende element
//<div id="my-div3">   Div has <span>Span</span> "Hello prepend DIV"</div>
element3.append("Hello append DIV");
// innerhalb das element am ende element
//<div id="my-div3">   Div has <span>Span</span> <p></p> </div>

// Dom Travering (nextSibling,previosSibling...)(parentElement)

let span = document.querySelector(".span-two");
console.log(span.nextSibling); // die next
// <!--Commit-->
console.log(span.nextElementSibling); // die next
//  <span class="span-three">three</span>
console.log(span.previousSibling); // die vorher
// <!--Commit-->
console.log(span.previousElementSibling); // die vorher
//   <span class="span-one">one</span>

console.log(span.parentElement);
// zeigt uns die eltern element
span.onclick = function () {
    span.parentElement.style.opacity = "0.3";
};
// wenn wir auf eltern element klicken zeigt opacite 0.3

//Promise bedeudet versprochen

const myPromise = new Promise((resolveFunction, rejectFunction) => {
    let connect = true;
    if (connect) {
        resolveFunction("Connection Established");
    } else {
        rejectFunction(Error("Connection Failed"));
    }
}).then(  // nach dem Promise überprüft
    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
);
console.log(myPromise);
// Promise {<pending>} 
// Good  Connection Established
// hier weil connet true  hat resolveFunction then resolveValue


// wenn wir  die Promisestate sehen wollen :
const myPromise1 = new Promise((resolveFunction, rejectFunction) => {
    let connect = true;
    if (connect) {
        resolveFunction("Connection Established");
    } else {
        rejectFunction(Error("Connection Failed"));
    }
})
console.log(myPromise1);
myPromise1.then(  // nach dem Promise überprüft
    (resolveValue) => console.log(`Good ${resolveValue}`),
    (rejectValue) => console.log(`Bad ${rejectValue}`)
);
//// Promise {<fulfilled>:`Connection Established`} 
// Good  Connection Established

/*
Start

try  

Exception    no  => finally
Exception    yes => catch

End

*/