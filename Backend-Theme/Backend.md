## Erste Schritt
- wir erstellen datei.js 
- dann schreiben wir in Terminal npm i express
- dann nodemon datei.js
- dann öfnnen wir Thunder client oder posts
- dann schreiben in datei.js
- wir schreiben in Thunder localhost:4444/.....  dann senden

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

server.post("/photos", () => { });
server.put("/photos", () => { });
server.patch("/photos", () => { });
server.delete("/photos", () => { });
```
```js
const http = require("http");
console.log("starting server...")

const server = http.createServer((request, response) => {
    // In request sind viele nützliche Informationen zur Anfrage enthalten,
    // bspw. die HTTP Method und die angefragte URL.
    console.log("getting a request!", request.method, request.url);
    switch (request.url) {
        case "/photos": {
            const photos = [
                "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=600",
                "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600",
            ];
            console.log("requested photos");
            response.setHeader("Content-Type", "application/json"); // MIME Types
            response.write(JSON.stringify(photos));
            response.end();
            break;
        }
        case "/albums": {
            console.log("requested albums");
            response.write("my albums");
            response.end();
            break;
        }
    }
});
server.listen(4001);
```
```js
// Wir nutzen für unsere zukünftigen Server das Modul "express".
// Express bietet viele nützliche Funktionen,
// die unseren Code einfach und übersichtlich halten werden.
const express = require("express");
// import express from "express";

// Nach dem Import erstellen wir eine neue Server-Instanz,
// indem wir express() aufrufen.
const server = express();

// Endpoints einzurichten geht ganz einfach mit der neuen Server-Variable:
// Wir rufen die HTTP Method als JavaScript-Methode auf (server.get(), server.post(),...)
// und übergeben den Pfad und eine Callback-Function als Argumente.
// Die Callback-Function bekommt wie auch beim HTTP-Server die zwei Nachrichten request und response.
server.get("/photos", (request, response) => {
    console.log("GET /photos");
    const photos = [
        "https://images.pexels.com/photos/167699/pexels-photo-167699.jpeg?auto=compress&cs=tinysrgb&w=600",
        "https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?auto=compress&cs=tinysrgb&w=600",
    ];
    response.json({ photos });
    // response.send("test");
});
server.get("/albums", (request, response) => {
    console.log("GET /albums");
    const albums = [];
    response.json({ albums });
    // response.send("test");
});
server.post("/photos", () => { });
server.put("/photos", () => { });
server.patch("/photos", () => { });
server.delete("/photos", () => { });
// Auch dieser Server muss natürlich wieder auf einen Port hören.
server.listen(4002);

```
## 

