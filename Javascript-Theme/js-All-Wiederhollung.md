## Für random Color
 <!-- var randomColor = Math.floor(Math.random()*16777215).toString(16) -->
# Mutator Methods  in Array.

## wie kann mann die console für datei.js zeigen
- in terminal schreien wir node datei.js
- in terminal schreien wir nodem datei.js
## 1. push() - 0(1)
- Add a new element to the end of the array.
```js
const names = ['Luis','John','Jose'];
names.push("Aaron");
console.log(names); // (4) ["Luis", "John", "Jose", "Aaron"]
```


## 2. pop() - 0(1)- 
Delete the last element of the array
```js
const names = ['Luis','John','Jose','Aaron'];
console.log(names.pop()); //Aaron
console.log(names); // (3) ["Luis", "John", "Jose"]
```


##  3. shift() - 0(n)- 
Delete the first element of the array
```js
const names = ['Luis','John','Jose','Aaron'];
console.log(names.shift()); // Luis
console.log(names); // (3) ["John", "Jose", "Aaron"]
```


 ## 4. unshift() - 0(n)
- Add one or more elements in the beginning of the array
```js
const names = ['Luis','John','Jose'];
console.log(names.unshift("Aaron")); // 4
console.log(names); // (4) ["Aaron", "Luis", "John", "Jose"]

```

 
 
 ## 5. splice() - 0(n)
- Remove, add or replace a new element indicate by index.
```js
const names = ['Luis','John','Jose','Aaron'];
console.log(names.splice(0,0,"Fernando")); // Add Michelle
console.log(names.splice(0,1,"Michelle")); // replace Fernando to Michelle
console.log(names.splice(0,1)); // remove Michelle
console.log(names);
```


 ## 6. sort() - 0(n log(n))
  - Modify the array, ordered by a compare Function, or if this compare function is not provided the default order is by the position of the Unicode values in the array.
```js
const names = ['Luis','Jose','John','Aaron'];
console.log(names.sort()); // (4) ["Aaron", "John", "Jose", "Luis"]

/*complex sorting*/
const users = [
    {name:'Luis', age:25},
    {name:'Jose', age:20},
    {name:'Aaron', age:40}
];
const compareFuc = (item1,item2) => {
  return item1.age - item2.age;
};
console.log(users.sort(compareFuc));
/**
 [{name: "Jose", age: 20}, {name: "Luis", age: 25}, {name: "Aaron", age:40}]
 */
```


## 7. reverse()
```js
const names = ['Luis','John','Jose','Aaron'];
console.log(names.reverse()); // ['Aaron','Jose','John','Luis']

```


## 8. join()
```js
const names = ['Luis','John','Jose','Aaron'];
console.log(names.join()); // Luis,John,Jose,Aaron
console.log(names.join(` `)); // Luis John Jose Aaron
console.log(names.join(`-`)); // Luis-John-Jose-Aaron

``` 

# Accessor methods
##  1. concat() - 0(n)
- Create a new array with the union of two or more arrays.
```js
const names1 = ["Luis","Jose"];
const names2 = ["John","Aaron"];
const newArray = names1.concat(names2,["Michelle"]);
console.log(newArray); // (5) ["Luis", "Jose", "John", "Aaron", "Michelle"]
```

### 2. slice() - 0(n)
- Return a copy of a sub array between two index, start and end.
Important Note: if you modify the original array, the value also will be modify in the copy array.
```js
const users = [
  {name:'Luis', age:15},
  {name:'Jose', age:18},
  {name:'Aaron', age:40}
];

const  adults = users.slice(1, users.length);
console.log(adults); // (2) [{name: "Jose", age: 18}, {name: "Aaron", age: 40}]
```
##  3. indexOf() - 0(n)
- Return the first index of the element that exists in the array, and if not exists return-1.
```js
const names = ['Luis','Jose','John','Aaron'];
console.log(names.indexOf("John")); // 2
console.log(names.indexOf("Michelle")); // -1
```


# Iteration methods
##  1. forEach() - 0(n)
-Just execute a function for each element in the array.
```js
const names = ['Luis','Jose','John','Aaron'];

names.forEach(item => {
    console.log(item);
}); 
/* Print all user names
  Luis Jose John  Aaron 
*/ 
```


## 2. map() - 0(n)
- Create a new array with the result of the callback function (this function is executed for each item same as forEach)
```js
const users = [
    {name:'Luis', age:15},
    {name:'Jose', age:18},
    {name:'Aaron', age:40}
];
const userDescriptions = users.map(item => {
   return `Hello my name is ${item.name} and I have ${item.age} years old.`
});
console.log(userDescriptions); 
/*["Hello my name is Luis and I have 15 years old.",
 "Hello my name is Jose and I have 18 years old.",
 "Hello my name is Aaron and I have 40 years old."] */


 ```
 ```js
 function subtractTwo(numbers) {
    return numbers.map((x) => x - 2);
}
console.log(subtractTwo([4, 3, 2, 5])); // [2,1,0,3]


let k = [1, 3, 2, 5];
console.log(k.map((x) => x - 1)); // [0,2,1,4]

 ```


##  3. filter() - 0(n)
- Create a new array with the elements that apply the given filter condition as true.
```js
const users = [
  {name:'Luis', admin:true},
  {name:'Jose', admin:true},
  {name:'Aaron'}
];
const adminUsers =  users.filter(item => item.admin);
console.log(adminUsers); 
// [{name: "Luis", admin: true},{name: "Jose", admin: true}]
```
```js
const years = [1763, 1972, 1925, 1916, 1984, 1124, 1950, 2020];
console.log(years.filter((y) => y % 2 === 0));
 //[ 1972, 1916, 1984, 1124, 1950, 2020 ]

function getYears(years) {
    return years.filter((years) => years > 1950);
}
console.log(getYears(years)); 
// [ 1972, 1984, 2020 ]
```

## 4. reduce() - 0(n)
- Return a single value after applying the reduction function for each element.
- 
```js
let theBigWord = ["bla","park","parkschein","others","auto"];
let check = theBigWord.reduce((acc,current){
  return acc.length > current.length ? acc : current;
});
console.log(check);
// parkschein
// hier prüft von erst element zu ende welche ist lang 
```

```js
const users = [
  {name:'Luis', age:15},
  {name:'Jose', age:18},
  {name:'Aaron', age:40}
];

const reducer= (accumulator, item)=> accumulator + item.age;
const totalAge =  users.reduce(reducer,0);
const ageAverage = totalAge / users.length;
console.log(`Total ${totalAge}, Average ${ageAverage}`);
 // Total 73, Average 24.333333333333332

```

```js
var arr = ["aaaa", "aa", "aa", "aaaaa", "a", "aaauuuuaaa"];

console.log(arr.reduce((a, i) => (a.length > i.length ? a : i)));
 // aaauuuuaaa

```



# Bonus!!!
## 1. some() - 0(n)
- Return a boolean value as true if found one or more item that apply the given condition, and return false if not (also if the array is empty).

```js
const users = [
  {name:'Luis', admin:true},
  {name:'Jose'},
  {name:'Aaron'}
];
const adminExists = users.some(item => item.admin);
console.log(adminExists); // true
```
## 2. every() - 0(n)
- This function Return a boolean value as true if all the items apply the given condition, and false if not.
```js
const users = [
  {name:'Luis', active:true},
  {name:'Jose', active:true},
  {name:'Aaron', active:false}
];
const isAllUsersActive = users.every(item => item.active);
console.log(isAllUsersActive); // false

```

# For Loop
  ###  for (start  ;  condition  ;  steps)
     (i = 0 ; i< 10 ;  i++)
```js
let cars = ["BMB","Mercedes","Honda"];
let models = [`2020`,`2021`,`2022`];
let color =["black","white","red"],
for(let i = 0 ; i< Car.length ; i++){
  console.log(`car: ${cars[i]}`);
  for(let j = 0 ; j< models.length ; j++){
     console.log(`Model: ${models[j]}`);
  }
    for(let x = 0 ; x< color.length ; x++){
     console.log(`Color: ${color[x]}`);
  }
// Car : BMB
// Model : 2020 
// Model : 2021 
// Model : 2022
// Color : black 
// Color : white 
// Color : red
// und weiter jeder Car gleich ...... 

}
```
# Function 


## 1 - Normal Function 
```js
function print(){
  return 10;
}
console.log(print()) // 10


function multiply(zahl1, zahl2) {
    console.log("multiply", zahl1 * zahl2);
}

multiply(2, 3); // 6
```
# function unbekannt wie viel argument
```js
function calc(...numbers){
  let result = 0 ;
  for(let i = 0 ; i< numbers.length ; i++ ){
    result += numbers[i] ;
    console.log(result)
  }
}
calc(3,2,4,6,7); 
// 22
```
## 2 - Function  Ohne Name 
```js 
let print = function (){
  return 10;
}
console.log(print()) // 10
```
  # Arrow Function
## 3 - Function wenn mehr als  ein zeile gibt 
```js
let print = () => {
  let a = 10;
  return a ;
};
console.log(print()) // 10
```

## 4 - Function wenn nur ein zeile gibt 
```js
let print = () => 10;
console.log(print()) // 10
```
## 5 - Function wenn nur ein zeile gibt und nur ein Parameter
```js
//         Parameter        return
let print =   num     =>    num ;
console.log(print()) // 10
```

# Object
```js
let car = {
  title : "BMW",
   price : 5000,
   color :["white","red","black"],
   model :2020,
   adresses : {
    berlin :`hauptst`,
    bonn : `kollnerstr`
   }
   hallo : function(){
    return `hallo`
   },
}
console.log(car.title);  // BMW  Dot Notation
console.log(car.["title"]);  // BMW bracket  Notation
console.log(car.price);  // 5000
console.log(car.color[1]); // red
console.log(car.adresses);
 // { berlin :`hauptst`,bonn : `kollnerstr` }
console.log(car.adresses.berlin); // hauptst
console.log(car.hallo());  // hallo


```
# New Keyword 
```js
let user = new Object();
 user.firstName = "osama";
 user.lastName = "alzero";
 user.age =37;
 console.log(user);
 // {firstName = "osama",lastName = "alzero",age :37}
 user.gstFullName = function(){
  return `Full Name Is ${user.firstName} ${user.lastName}`;
  
 }
 console.log(user.gstFullName())
 // Full Name Is osama alzero
```
# Delete Operator
```js
const user = {
  name :"osama"
};
delete user.name;  // delete löcht nur parameter löcht nicht object
console.log(user); // {}
console.log(user.name); // undefined


const eObj = {};
Object.defineProperty(eObj,"a",{value,configuvale:false});
console.log(eObj); // {a:1}
console.log(eObj.a); // 1
console.log(delete.eObj.a); // false
// weil hier gibt configuvale:false 
console.log(eObj); // {a:1}

// wenn  configuvale:true dann kann löchen a
console.log(delete.eObj.a); // true
console.log(eObj); // {}


```

 ## for in Loop with Object 
   
 ```js
const user = {
  name : "osama",
  country : "Egypt",
  age : 37,
};
//     property    object
for(let  key   in   user ) {
  console.log(key);
   // name
   // country
   // age

console.log(user.key);
 // osama
 // Egypt
 // 37
console.log(key,user.key);
// name     osama 
// country  Egypt
// age      37
console.log(`The ${key} Is => ${user.key}`);     
 //  The name Is => osama                     
 //  The country Is => Egypt                     
 //  The age  Is => 37                  
}

 ```

# Classes 


 # Closure
 ```js
 function outer(){
 var a = 5;
 return function inner(){
  var b =10 ;
  alert(a+ b)
 }

 }
 var inner = outer();
 inner(); // 15

 ```
 ```js
 function startCounter(n){
  return function(){
    return ++n;
  }
 }
 let counter = startCounter(5); // 5
 console.log(counter());// 6
 console.log(counter());// 7
 console.log(counter());// 8
 // ......


 ```
 ```js
 function veryOld(){
  let pharos = "pharos";
  return function notVeryOld(){
    let arab = "arab";
    return function() nowadays(){
      let egyptians = "egyptians";
      console.log(`${pharos}<< ${arab}<< ${egyptians}`);
    }
  }
 }
 veryOld(); // [function notVeryOld]
 veryOld()(); // [function nowadays]
 veryOld()()(); // pharos << arab << egyptians

 ```
 ```js
 function boxTeilen(teil){
  return function (fahrer){
    return function(kunde){
      console.log(`${teil} << ${fahrer} << ${kunde}`);
    }
  }
 }
 const saveBox = boxTeilen("gerät");
 saveBox("dhl")("Ahmad");
 // gerät << dhl << Ahmad
 ```
 ```js
 function nnn(){
  const isBest = "ofcours , he is the best ";
  setTimeOut(function(){
    console.log(isBest)
  },4000)
 }
 nnn(); // ofcours , he is the best
 // hier nach 4 sekunde drucken
 ```



# Math 

```js
console.log(Math.round(9.3)); // 9
console.log(Math.round(9.5)); // 10

console.log(Math.ceil(7.1)); // 8
console.log(Math.ceil(7.7)); // 8

console.log( Math.floor(16.1)); // 16
console.log( Math.floor(16.7)); // 16

console.log((100.55555).toFixed(2));// 100.56
console.log(Math.trunc(99.5)); // 99

concole.log(Math.abs(-5));  //5
concole.log(Math.sgrt(4)); // 2

concole.log(Math.min(4,1,3,6,2,7)); // 1
concole.log(Math.max(4,1,3,6,2,7)); // 7

concole.log(5 == `5`);
 // true hier vergleich nur  zwischen werte 
concole.log(5 === `5`); 
// false hier vergleich zwischen werte und type


```
# String
```js
let nme = `i love java script`;

console.log(nme.indexOf(`o`)); // 3
console.log(nme.indexOf(`a`, 9)); // 19 such `a` ab index 9

console.log(nme.includes(`a`));  // true
onsole.log(nme.includes(`o`, 4)); // false ab index 4

console.log(nme.startsWith(`a`)); // false 
console.log(nme.startsWith(`l`, 2)); // true ab index 2

console.log(nme.endsWith(`t`)); // true
console.log(nme.endsWith(`e`, 6)); // treu ab index 6

console.log( nme.lastIndexOf(`i`)); // 15
console.log( nme.lastIndexOf(`i`, 14)); // 0 ab index 14

concole.log(nme.trim()); // löcht die leerzeichen vor und nachdem string aber nicht die zwischen die wörte

```

# Slice
```js
let nme1 = `i love java script`;
console.log(nme1.slice());  // i love java script
console.log(nme1.slice(0)); //i love java script

console.log(nme1.slice(2)); // love java script
console.log(nme1.slice(2, 6)); // love
console.log(nme1.slice(-6)); // script

console.log(nme1.substring(2, 6)); // love
console.log(nme1.substr(2, 6));  //// love l


```
# split
```js

let nmes = `haj_mohammad_ahmad`;

console.log(nmes.split()); // [ 'haj_mohammad_ahmad' ]
console.log(nmes.split(` `)) ; // [ 'haj_mohammad_ahmad' ]

console.log(nmes.split(`a`));
 // [ 'h', 'j_moh', 'mm', 'd_', 'hm', 'd' ]

console.log(nmes.split(`_`));
 // [ 'haj', 'mohammad', 'ahmad' ]

console.log(nmes.split(`_`, 1)); 
// [ 'haj' ] cut nur 1 element
console.log(nmes.split(`_`, 2)); 
// [ 'haj', 'mohammad' ] cut nur 2 element

 console.log(nmes.split(``));  
//  ['h', 'a', 'j', '_', 'm','o', 'h', 'a', 'm', 'm','a', 'd', '_', 'a', 'h','m', 'a', 'd']

```
# splice 
```js
let name = ["ahmed", "ali", "maze", "gamal"];

name.splice(0,1); // ["ali", "maze", "gamal"]
name.splice(1,1); // ["ahmed", "maze", "gamal"]

name.splice(1,0,"mona","hasan"); 
// ["ahmed","mona","hasan", "ali", "maze", "gamal"]
//  add ( "mona","hasan") nach index 1
name.splice(1,1,"mona","hasan");
 // ["ahmed","mona","hasan", "maze", "gamal"]
 //  add ( "mona","hasan") nach index 1 und löch 1 element nach index 1
// splice(start,mountdelet,add,add)

```
# replece
 ```js
let v = " hallo world";
let s = v.replace(/[l]/gi, ".");
console.log(s); // ha..o wor.d  statt (l)ein (.)
```
# Number
```js
concole.log(parsInt(`4 ahmed `)) ;  // 4
concole.log(Number(`4`)); // 4
concole.log(parseFloat(`4.5`)); // 4.5
```

# Data Types and type Operator
```JS
console.log("osama mohammed");
console.log(typeof "osama mohammed"); // string
console.log(typeof 500); // number
console.log(typeof 500.556); // number
console.log(typeof [1, 3, 57]); // object
console.log(typeof ["hamed", "hh", "jj"]);  // object
console.log(typeof { name: "ahmed", age: 23});  // object
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof undefined);   // undefined
console.log(typeof null);  // object

// arry => object

```
# If Else 
 ## 1. if els
 ```js
 const alterSuse = 18;
const alterMaria = 19;
const alterJonas = 7;

if (alterSuse >= 18 && alterMaria >= 18 && alterJonas >= 18) {
    console.log("Ihr dürft alle drei auf das Festival");
} else {
    console.log("Alle müssen >= 18 sein!");
}
// Alle müssen >= 18 sein!   weil alterJonas = 7 nicht >= 18 
 ```
 ```js
 const tag = "Dienstag";

if (tag === "Montag") {
    console.log("Montag");
} else if (tag === "Dienstag") {
    console.log("Dienstag");
} else if (tag === "Mittwoch") {
    console.log("Mittwoch");
} else if (tag === "Donnerstag") {
    console.log("Donnerstag");
} else if (tag === "Freitag") {
    console.log("Freitag");
} else if (tag === "Samstag") {
    console.log("Samstag");
} else {
    console.log("Sonntag");
}

 // Dienstag
 ```
## 2. if ternary
```js
const alterJonas = 48;

alterJonas >= 18
    ? console.log("Du darfst Vodka kaufen")
    : console.log("Du darfst Saft kaufen");
    // Du darfst Vodka kaufen

```
 # If Break  If Continue

 ```js
 let user = ["ahmed",1,3,5, "ali", 6,"gamal"];
 for(let i = 0 ; i< user.length ; i++){
  if(typeOf user[i] == `number`){
    contine ; // hier wenn element ist number ignoriert ihn und prüf weiter
  }
  console.log(user[i]); 
  // ahmed
  // ali
  // gamal
 }
 ```
 ```js
for(let i = 0 ; i< user.length ; i++){
 let user = ["ahmed","mohamad", "ali","omar""gamal"];
    if(user[i] == `ali`){
    break ; // hier wenn element gleich ali stop  und prüf nicht  weiter
  }
  console.log(user[i]);  
  // ahmed
  // mohamad

  }

 
 ```

 # While 
  start 
  while(condiion)
  {steps }

 
 ```js
let i = 0;
 while(i<3)
 {
    console.log("hallo"); 
  i++}
  // hallo
  // hallo
  // hallo
  // hier fängt mit 0 dann 1 dann 2 dann stop weil 3 ist nicht < 3 
 ```


 # Do  While 
 start
 do
 {
steps 
 }
 while (condition) 

  ```js
let i = 0;
do{   // zuerst druck
  console.log("hallo"); 
  i++ ;
} while (i === 0) ; // dann prüf
  // hallo

  // hier druckt hallo dann prüf

  ```

# Switch
```js
const tag = "Montag";

switch (tag) {
    case "Montag":
        console.log("Montag");
        break;
    case "Dienstag":
        console.log("Dienstag");
        break;
    case "Mittwoch":
        console.log("Mittwoch");
        break;
    case "Donnerstag":
        console.log("Donnerstag");
        break;
    case "Freitag":
        console.log("Freitag");
        break;
    case "Samstag":
        console.log("Samstag");
        break;
    default:
        console.log("Sonntag");
        // Hier brauch man eigentlich kein break; Aber es sorgt für bessere Lesbarkeit
        break;
}
// erklärung if (case) tag ist Montag stop(break) und druck ("Montag") wenn nicht prüf weiter.
//  else(default) druck ("Sonntag)



// Montag

```