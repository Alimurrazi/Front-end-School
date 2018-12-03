 

//Introduction to JavaScript
//Adding JavaScript to your Page
//*Declaring Variables and Constants
    // var apples;
    // var $apples;
    // var _apples;
    // var app_les;
    // var apples4eva;
    // var apple$

//*Primitive Data Types
    // Number
    // String
    // Boolean
    // Null
    // Undefined

    //Includes
    //The last JavaScript string method we'll take a look at is the includes method. This method checks to see if a substring exists inside another string, and returns true if it is or false if it's not.
    // var sentence = "The house is red.";
    // console.log(sentence.includes("house"));
    // console.log(sentence.includes("tiger"))

    //Replace
    // var sentence = "The house is red.";
    // var newSentence = sentence.replace("red", "blue");
    // console.log(newSentence)

    //ToUpperCase
    //var place = "Mexico City";
    //console.log(place.toUpperCase())

    //ToLowerCase
    //var place = "Mexico City";
    //console.log(place.toLowerCase());

    //String Interpolation
    //var restaurant = "Chipotle";
    //console.log(`My favorite restaurant is ${restaurant}!`)

    //Template Literals
    //console.log(`Look how
    //cool this string is.
    //It is on multiple lines!`)


//*Math: Operators, Properties and Methods

//Arithmetic Operators
//add, Subtraction
//Order of Operations
//var x = (5 * 3) + 10 / 2;
//console.log("The value of x is " + x + ".")



//*Math Properties
//Euler's Number - Math.E
//var euler = Math.E;
//console.log(euler)

//Pi - Math.PI
//var pi = Math.PI;
//console.log(pi);

//*Math Methods
//Absolute Number
// var a = 6;
// var b = -13;
// console.log("Absolute value of a is " + Math.abs(a) + ".");
// console.log("Absolute value of b is " + Math.abs(b) + ".");

//Floor
// var decimal = 24.942;
// var floor = Math.floor(decimal);
// console.log("The value of floor is " + floor + ".");

//Ceiling
// var decimal = 13.37;
// var ceiling = Math.ceil(decimal);
// console.log("The value of ceiling is " + ceiling + ".")

//Maximum
// var number = Math.max(14, 349);
// console.log("The value of number is " + number + ".")

//Maximum
//var number = Math.min(53, 94);
//console.log("The value of number is " + number + ".");

//Random
//var random = Math.random();
//console.log("The value of random is " + random + ".")

//Round
//var rounded = Math.round(3.1459);
//console.log("The value of rounded is " + rounded + ".");


//*Functions: Reuse your Code
// function introduction() {
//     console.log("Hello, my name is Jessica.");
// }

//Parameters
// function introduction(greeting, name) {
//     console.log(greeting + ", my name is " + name + ".");
// }
// introduction("Hi", "Nabeed");

// Returns
// function getAreaOfCircle(radius) {
//     return Math.PI * radius * radius;
// }
// var radius = 3;
// var area = getAreaOfCircle(radius);
// console.log("A circle with a radius of " + radius + " has an area of " + area + ".")

//*Arrays: Lists of Data
//Creation
//var drinks = ["water", "juice", "milk", "soda"];

//Retrieval
//console.log(drinks[0])
// var drinks = ["water", "juice", "milk", "soda"];
// for (var i = 0; i < drinks.length; i++) {
//     console.log(drinks[i]);
// }

//Methods
//Sort
// var drinks = ["water", "juice", "milk", "soda"];
// var sortedDrinks = drinks.sort();
// console.log(sortedDrinks);

//Push
//var drinks = ["water", "juice", "milk", "soda"];
//drinks.push("tea"); // add "tea" to the end of this array
//console.log(drinks);

//Pop
//var drinks = ["water", "juice", "milk", "soda"];
//drinks.pop(); // remove the last item in this array
//console.log(drinks)

//Shift
//var chocolates = ["Snickers", "Kit-Kat", "Twix"];
//var snack = chocolates.shift();

//Unshift
//var chocolates = ["Snickers", "Kit-Kat", "Twix"];
//var newLength = chocolates.unshift("Milky Way", "3 Musketeers");

//Concat
//var healthyDrinks = ["water", "milk"];
//var unhealthyDrinks = ["juice", "soda"];
//var allDrinks = healthyDrinks.concat(unhealthyDrinks);
//console.log(allDrinks);

//Slice
//var colors = ["purple", "red", "white", "blue", "gold"];
//var slice = colors.slice(1, 4);
//console.log(slice);

//Splice
//var foods = ["burger", "pizza", "donut", "bread", "pasta"];
//foods.splice(2);
//console.log(foods);

//Map
// var names = ["Bill", "Kelly", "John"];
// var intros = names.map(function(name) {
//     return "My name is " + name;
// });
// console.log(intros);

//Filter
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// var odd = numbers.filter(function(number) {
//     return number % 2 == 1;
// });
// console.log(odd);

//Reduce
// var numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// var total = numbers.reduce(function(total, number) {
//     return total + number;
// });
// console.log(total);

//*Objects: Properties and Methods
//Creation
// var dog = {
//     name: "Cooper",
//     age: 3,
//     bark: function () {
//         console.log("BORK BORK");
//     }
// };

//Retrieval
// console.log(dog.name);
// console.log(dog.age);

//Methods
//HasOwnProperty
// var dog = {
//     name: "Cooper",
//     age: 3,
//     bark: function () {
//         console.log("BORK BORK");
//     }
// };
// console.log(dog.hasOwnProperty("name"));
// console.log(dog.hasOwnProperty("weight"));

//Keys
// var dog = {
//     name: "Cooper",
//     age: 3,
//     bark: function () {
//         console.log("BORK BORK");
//     }
// };
// console.log(Object.keys(dog))


//*Classes: Constructors, Inheritance, Super
//Defining a Class
// class Pet {
// }
// var pet = new Pet();
// console.log(pet);

//Constructing a Class
// class Pet {
//     constructor(name, weight, price) {
//         this.name = name;
//         this.weight = weight;
//         this.price = price;
//     }

//     getInfo() {
//         return "Hi, my name is " + this.name + ". I weigh " + this.weight + " pounds and cost $" + this.price + ".";
//     }
// }
// var pet = new Pet("Fluffy", 20, 200);
// console.log(pet);
// console.log(pet.getInfo());

//Class Inheritance
// class Dog extends Pet {
//     bark() {
//         console.log("BARK BARK BARK");
//     }
// }
// var dog = new Dog("Cooper", 20, 200);
// console.log(dog.getInfo());
// dog.bark();

//Function Overriding and Super Keyword
// class Cat extends Pet {
//     constructor(name, weight, price, brand) {
//         super(name, weight, price);
//         this.brand = brand;
//     }
//     getFavoriteBrand() {
//         return this.brand;
//     }
//     getInfo() {
//         return "Hi, I'm a cat named " + this.name + " and I like " + this.brand +  ". I weigh " + this.weight + " pounds and cost $" + this.price + ".";
//     }
// }

// var honey = new Cat("Honey", 15, 300, "Purina");
// console.log(honey.getInfo());
// console.log(honey.getFavoriteBrand());


//Document Object Model
//Getting Elements
//Single Elements
//var apples = document.querySelector("#apple");
//var pears = document.querySelector(".pears");
//var oranges = document.querySelector("span");
//console.log(apples);
//console.log(pears);
//console.log(oranges)

//Multiple Elements
//var fruits = document.querySelectorAll(".fruit");
//console.log(fruits);

//Creating Elements
//var span = document.createElement("span");
//span.setAttribute("class", "date");
//span.textContent = new Date().toDateString();
//document.body.appendChild(span);

//Removing Elements
//<div class="parent">
	//<span class="kid">I am a kid that will be removed.</span>
	//<span class="teen">I am a teen that will be removed.</span>
//</div>
//var parent = document.querySelector(".parent");
//var kid = document.querySelector(".kid");
//parent.removeChild(kid);

//var teen = document.querySelector(".teen");
//teen.parentNode.removeChild(teen);

// Browser Events and Event Listeners
//var button = document.querySelector("#button");
//var clickCallback = function(event) {
	//console.log("You've clicked on the button!");
//}
//button.addEventListener("click", clickCallback)

//Introduction to JSON
// JSON supports the following values:
// string
// number
// object
// array
// boolean
// null
// {
//     "name": "Josh",
//     "weight": 175,
//     "age": 40,
//     "eyecolor": "brown",
//     "cars": [ "Chevy", "Toyota", "Honda" ],
//     "favoriteBook": {
//         "title": "When the Fire Nation Attacked",
//         "author": "Nickelodeon",
//         "released": "02-21-2005"
//     }
// }
// Stringify
// var dog = {
//     "name": "Sophie",
//     "age": 3,
//     "weight": 20
//   }
//   var dogJSON = JSON.stringify(dog);
//   console.log(dogJSON);

//   Parse
//   var json = '{"name":"Sophie","age":3,"weight":20}';
//   var dog = JSON.parse(json);
//   console.log(dog);

//Local Storage and Session Storage

//localStorage.setItem("restaurant", "chipotle");
// var game = {
//     "name": "Rocket League",
//     "release": 2015,
//     "developer": "Psyonix"
// }
// var gameJSON = JSON.stringify(game);
// localStorage.setItem("game", gameJSON);

// var restaurant = localStorage.getItem("restaurant");
// console.log(restaurant);

// Errors
// console.log(x);

// Catching Exceptions
// try {
//     console.log(x);
// } catch (error) {
//     console.log(error.message);
// }

