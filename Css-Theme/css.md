## what is CSS
- Cascade Style Sheet
- Language to Great the Presentation and Visuals
  
## wie können Css mit Html verbunden
 ```js
//  in head  verlinken wir css mit html
<link rel="stylesheet" herf="./name.css"> 

// wir können auch in html dierect css schreiben 
in head <style>
</style>

oder innerhalb Tag
<p style= "color :red"></p>

 ```
 ## Font-Family
 ```js
 // wir verlinken in head 
 <link rel="preconnect" herf="link von google für  für font-family">
 // aber wir müssen in  font-family seite was von art hinzufügen
 // <link rel="preconnect" href="https://fonts.googleapis.com">
 //<link href="https://fonts.googleapis.com/css2?family=Abel&family=Abril+Fatface&family=Cinzel&family=EB+Garamond&family=Fira+Sans:wght@200&family=Great+Vibes&family=Koulen&family=Lato:ital,wght@1,300&family=Macondo&family=Merriweather:wght@300&family=Oleo+Script+Swash+Caps&family=Oswald:wght@300&family=Pacifico&family=Poppins:ital,wght@0,200;0,300;0,400;1,100;1,200;1,300&family=Roboto+Condensed:ital,wght@0,300;0,400;1,300;1,400&family=Roboto+Mono:wght@100&family=Roboto:wght@300;700&family=Shadows+Into+Light&family=Signika&family=Signika+Negative:wght@300&family=Smokum&family=Work+Sans:wght@200;300;400;500;600;800&family=Zen+Loop&display=swap" rel="stylesheet">
 ```
##
 ## Codes für schriftart und text
 ```js
 color:red; // für die farbe
 font-size : 20px ; // für die grösse

 em = Time = 16px // kommt darauf an wie viel ist font-size
 // wenn font-size : 20px ; dann 1em =20px
 rem = Root Time 

 vw => viewport   vw = 1% von viewport width

 font-style:italic; // füt schriftart
 
 font-weight: 200; // von 100 bis 900
 font-weight: bold ;
 font-weight: normal ;


 ```
 ## Codes für Background 

 ```js
background-color :blue ; // für Farbe
background-image :url(name das fotto oder link für fotto) ; // für img als background
background-repeat : repeat ;// hier wiederholt das fotto mehr mal
background-repeat : no-repeat ;// hier wiederholt nicht das fotto 
background-repeat : repeat-x ;// hier wiederholt das fotto mehr mal  von links nach recht
background-repeat : repeat-y ;// hier wiederholt das fotto mehr mal  von oben nach unten
background-attachment : scroll; // hier bleibt das fotto fest wenn wir scrollen
background-attachment : fixed; // hier das fott fest aber text bewegt innerhalb das fotto
background-postion : left top; 
background-postion : center center; 
background-postion : 50% 50%;
background-size: auto; // die normal grosse für fotto
background-size: cover;  // nich ganz grosse aber für ganz seite
background-size: contain; // ganz gross und für ganz seite

 ```


 ## Codes für Element
 ```js
 padding: 10px;
 padding : top right bottom left;
 padding-bottom : 20px;


 margin: top right bottom left;
 margin-left : auto; margin-right: auto; // hier macht element in mitte
 width : 200px
 heigth : 200px
 width : fit-content; // hier macht die width passt nur für die text 

 border-color : red green blue yellow ;
 border-color :top right bottom left ;

 border-style : top right bottom left;
 border-style : solid ; // ______
 border-style : dashed; // ------
 border-style : dotted; // ........

 border: 10px solid red; // hier mach füt ganze border und alle seite
 border-radius:20px 15px;

 outline: 10px solid red;
 ```

 ## Display
 ```js
 display: block; // nimmt ganz width in seite wenn gibt kein width gibt auch neue line  respect padding ,margin width ,hight 
 display: inline-block;//  respect die element die vor und nach ihm  respect padding ,margin width ,hight  in alle richtung
 display: inline; // gibt nicht neue line respect padding ,margin (nur left und right) respecet nicht  width ,hight  respect die element die vor und nach ihm

 display:none; // hier verschwendt die element 
 ```

 ## Overflow
 ```js
 overflow:visible ; // gezeigt immer
 overflow: hidden ; // verschwundt
 overflow: scroll ; // zeigt die hight als scroll 
 overflow: auto; // passt mit higth kommt drauf an scroll oder nicht
 overflow-x:  ; // links zu recht
 overflow-y:  ; //oben nach unten

 text-overflow:ellipsis; // hier schneidet dem text kommt darauf an wie viel ist dem width
 // ich bin mohamm....
 ```

 ## Text-Shadow
 ```js
//  text-shadow(H V Blur Color)
//  H: von recht nach link + (- ist gegenteil)
//  V : von oben nach unten + (- ist gegenteil)
//  Blur: für die color Nebel( veschwommen)

text-shadow : +2px  +2px 1px red;
 ```
 ## Text-align
 ```js
 text-align:center;
 text-align:right;
 text-align:left;

 direction: ltr; // von links nach recht die text( für arabisch)
 direction: rtl; // von links nach recht die text( für englisch,deutsch...)

 vertical-align: top;  // ( text  von hochteil bild)
 vertical-align: middle;// ( text  von mittelteil bild)
 vertical-align: bottom;// ( text  von untenteil bild)
 ```
## Text-Decoration und Transform 
 ```JS
 text-decoration:line-through; // macht line auf mittel dem text
 text-decoration:line-through; // macht line unter dem text
 text-decoration:line-through; // ignoriert dem unter line unter dem text

 text-transform:capitalize; // macht erste buchstaben von jeden wort Gross (Ich Bin Mohammad)
 text-transform:uppercase;  // macht buchstaben von jeden wort Gross (ICH BIN MOHAMMAD)
 text-transform:lowercase;  // macht  buchstaben von jeden wort klein (ich bin mohammad)
 ```
## Text-Spacing (die Abstand zwischen Buchstaben und Worte)
 ```js
 letter-spacing:+2px // macht abstand zwischen Buchstaben
 letter-spacing:-2px // gegenteil
 
text-indent :+100px // macht  abstand vor dem ganzen  text
text-indent :-100px // gegenteil

line-height:1.6 // macht abstand zwische die line
//( ich bin

//  ich bin )

word-spcing: +2px ; // macht abstand zwischen worte
word-spcing: -2px ; // gegenteil
white-space;normal ; // hier macht stop und geht line unten
// ich bin   
// mohammad
white-space;nowrap; // hier macht weiter
// ich bin mohammad
word-break:breack-word; // hier macht stop bei eigne wort bei link und geht line runter
//https://www.google.com/search?q=google
//&oq=goo&aqs=chrome.0.0i131i355i433i512j46i131i199i433i465i512j0i131i433i512l2j69i65l2j69i60j69i65.4718j0j7&sourceid=chrome&ie=UTF-8

 ```
## Mous cursor
 ```js
 curser: pointer; // maus wie hand  wenn wir die maus auf ein link zeigt uns dass wir öffenen können

 curser :grab; // maus wie hand hier können wir besser kopieren

 curser: move ; // maus wie vierecke wir können ein elemment zu andere plaz nemmen .und wir können die seit vergrossen oder verkleinen nach oben nach unten links recht .....
 ```
 ## float
 ```js
 float:left; // ich bin mohammad
 float:right; // mohammad bin ich 
 // aber wir müssen hier  (overflow:hidden) benutzen und clear:both
 ```
 ## opacity
 ```js
 opacity:0.13 ; // max wert und die normal wertist 1
 // für klarheit  

 ```
 ## Postion
 ```js
 postion:static ;// haupt wert
  postion:relative ; //bewegt sich die element kommt darauf an von silbst und die voher code 
 postion: absolute; // bewegt frei unbedingt
 postion:fixed ; // bleibt unten egal ob die seite lang
 postion:sticke ; // blebt unten oder  oben kommt daraf an wie ist top:20px..
 ```

## List-styling 
```js
list-style-posion:outside; // macht die inhalt auserhalb gackground
list-style-posion:inside;// macht die inhalt innerhalb gackground
list-style: none ;// für liste ignorieren die ...
```



