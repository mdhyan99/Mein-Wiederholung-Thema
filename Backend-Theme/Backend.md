## Erste Schritt
- wir erstellen datei.js 
- dann schreiben wir in Terminal npm i express
- npm init -y für package.json installieren
- npm i -D nodemon für node-modules installieren
-   "scripts": {
    "dev": "nodemon serverApi.js",
    "start": "node serverApi.js"
  }, wir äderen wenn wir npm start benuzt oder npm run dev
- dann nodemon datei.js
- dann öfnnen wir Thunder client oder posts
- dann schreiben in datei.js
- wir schreiben in Thunder oder postes  localhost:4444/.....  dann senden

```js
const express = require("express");
const app = express();
app.listen(4444); //localhost:4444/ 

// localhost:4444/is-number/34?q=javascript&oq=java&aqs=chrome.2.69i57j0i433i512l4j69i60l3.7048j0j4&sourceid=chrome&ie=UTF-8
app.get("/is-number/:number", (request, response) => {
    // const { number } = request.params;
        const number= request.params.number; 
        // was wir schreiben nach localhost:4444/is-number/432
    console.log(number); // 34
    console.log(request.params); //{ number: '34' }
    console.log(request.query);  
//   {
//   q: 'javascript',
//   oq: 'java',
//   aqs: 'chrome.2.69i57j0i433i512l4j69i60l3.7048j0j4',
//   sourceid: 'chrome',
//   ie: 'UTF-8'
// }
    if (isNaN(number)) {
        response.json("Dies ist Kein Zahl");
    } else {
        response.json("Dies ist eine Zahl");
    }
    // if (isNaN(number)) {
    //   return  response.json("Dies ist Kein Zahl");
    // } 
    //     response.json("Dies ist eine Zahl");
    
});
```
## Wichtige Codes
```js
const express = require("express");
const app = express();
server.listen(4002);

let notizen =[1,2,3]
let user =["a","b","c"]
server.get("/users", (req,res) => {res.json(users) }); // ["a","b","c"]
//Notiz lesen
server.post("/", (req,res) => {res.json() });
// Notiz erstellen
server.put("/", (req,res) => {res.json() });
// Notiz akualisieren  (überschreiben des Datensatzes)
server.patch("/", (req,res) => {res.json() });
// Notiz bearbeiten des bestehenden Datensatzes

server.delete("/", (req,res) => {res.json() });
// Notiz löschen 
```

## 

