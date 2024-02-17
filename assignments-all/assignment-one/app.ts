// zubair arif 16/feb/2024

import { log } from "console";

// question two
var person:String = "Ali";
console.log(`Hello, ${person} would you like to learn some Python today?`)

// question three
var person2:String = "Ali";
console.log("lowercase" , person2.toLocaleLowerCase())
console.log("lowercase" , person2.toLocaleUpperCase())
console.log("lowercase" , person2)

// question four
var quote:String = "I have no special talent , i am passionately curious"
var author:String = "Albert Einstein"
console.log(`${author} once said , "${quote}"`)

// question five
var famous_person:String = "Albert Einstine"
var message:String = `${famous_person} once said I have no special talent , i am passionately curious`
console.log(message)

// question six
let person3:String = "\t \n John Doe \n \t";
console.log("Name with whitespace:" ,person3);
console.log("\nName after stripping whitespace:",person3.trim());

// question seven & eigth
console.log(6+2)
console.log(12-4)
console.log(4*2)
console.log(24/3)

// question nine
var fav_number:Number = 6;
console.log(`My Favourite Number is ${fav_number}`)

// question eleven
var names:String[] = ["Ali","Raza","Umar","Mustafa"]
names?.forEach((item)=>{
    console.log(item)
})

// question twelve
var names2:String[] = ["Ali","Raza","Umar","Mustafa"]
names2?.forEach((item)=>{
    console.log(`Hello ${item} , how are you ?`)
})

// question thirteen
var transport:String[] = ["Aqua","Civic","Mercedes"]
transport?.forEach((item)=>{
    console.log(`I would like to own a ${item} car`)
})

// question fourteen 
var guest:String[] = ["Haider","Aziz","Rizwan","Bilal","Rehan"]
guest?.forEach((item)=>{
    console.log(`I would like to invite Mr.${item} for a dinner tonight`)
})

// question fifteen 
guest?.slice(2 , guest?.length -1)?.forEach((item)=>{
    console.log(`${item} can't make tonight`)
})
guest?.splice(2 , guest?.length -1 , "Mubeen","Asif")?.forEach((item)=>{
    console.log(`I would like to invite Mr.${item} for a dinner tonight`)
   
})

// question sixteen 
console.log("Hey, i've found a new bigger table")

guest.unshift("Murtaza")
guest.splice(3,0,"Usman")
guest.push("Qasim")
guest?.forEach((item)=>{
    console.log(`I would like to invite Mr.${item} for a dinner at bigger table`)
})


// question seventeen 
console.log("Attention please! i can invite only two people for dinner.")

for(var i = 1 ; i <= guest?.length + 2 ; i++ ){
    console.log(`Dear Mr.${guest[guest?.length - i]}, i am sorry , i can't invite you for tonight's dinner`)
    guest.pop()
}

guest?.forEach((item)=>{
    console.log(`I am glad to say that Mr.${item} is still invited for a dinner at bigger table`)

})

guest?.length === 0
console.log(guest)   


// question eighteen
var places:String[] = ["Karachi","Canada","Ohio","Belgium","Russia"]
console.log(places);

var sortedPlaces = places.slice().sort();
console.log(sortedPlaces);
console.log(places);

var reverseSortedPlaces = places.slice().sort().reverse();
console.log(reverseSortedPlaces);
console.log(places);

var reverseSortedPlaces = places.slice().reverse();
console.log(reverseSortedPlaces);

var reverseSortedPlaces = places.slice().reverse().reverse();
console.log(reverseSortedPlaces);

places.sort()
console.log(places);

places.reverse();
console.log(places);


// question nineteen
console.log("I am inviting 5 people at dinner");

// question twenty
var mountains:String[] = [
    "Mount Everest",
    "K2",
    "Nanga Parbat",  
];
console.log(mountains);

// question twenty one 
var student={
name:"Zubair Arif",
email:"zubair@gmail.com",
phone:12345678901,
rollNo:123,
class:"7",
section:"c",
subjects:["maths","english","urdu","computer","islamiat","science","arts"]
}
console.log(student);


// question twenty three
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.")
console.log(car == 'subaru')

let hiddenNumber = 10;
console.log("Is hidden number == '10'? I predict True.")
console.log(hiddenNumber === 10)

let animal = "cat";
console.log("Is animal == 'rabbit'? I predict False.")
console.log(animal === "dog")

let colour = "red";
console.log("Is colour == 'orange'? I predict False.")
console.log(colour === "orange")

let vegetable = "carrot";
console.log("Is vagetable == 'potato'? I predict False.")
console.log(vegetable === "carrot")

let fruit = "mango";
console.log("Is fruit == 'grapes'? I predict False.")
console.log(fruit === "grapes")

let subject = "computer";
console.log("Is subject == 'computer'? I predict True.")
console.log(subject === "computer")

let cartoon = "ben 10";
console.log("Is cartoon == 'ben 10'? I predict True.")
console.log(cartoon === "ben 10")

let food = "koftey";
console.log("Is food == 'kofte'? I predict True.")
console.log(food === "koftey")

let shape = "square";
console.log("Is shape == 'oval'? I predict False.")
console.log(shape === "oval")


// question twenty five
var alien_color = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points.");
}

// question twenty six

var alien_color = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

var alien_color = 'red';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
} else {
    console.log("Congratulations! You just earned 10 points.");
}

// question twenty seven
var alien_color = 'green';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

var alien_color = 'yellow';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

var alien_color = 'red';

if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}

// question twenty eight
var age = 30;

if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}

// question twenty nine
var favorite_fruits:String[] = ["apple", "banana", "strawberry"];

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("grape")) {
    console.log("You really like grapes!");
}


// question thirty
var usernames:String[] = ["admin", "Eric", "Jane", "John", "Alice"];

for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log("Hello " + usernames[i] + ", thank you for logging in again.");
    }
}


// question thrity two
var current_users:string[] = ["John", "Jane", "Alice", "Bob", "Eric"];
var new_users:String[] = ["Bob", "Alice", "Chris", "Mark", "Sarah"];

for (var i = 0; i < new_users.length; i++) {
    if (current_users.some(user => user === new_users[i])) {
        console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
    } else {
        console.log("Congratulations! The username '" + new_users[i] + "' is available.");
    }
}

// question tghirty three
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.forEach(function(number) {
    if (number === 1) {
        console.log(number + "st");
    } else if (number === 2) {
        console.log(number + "nd");
    } else if (number === 3) {
        console.log(number + "rd");
    } else {
        console.log(number + "th");
    }
});


// question thirty four 
var favorite_pizzas:String[] = ["Pepperoni", "Malai boti", "BBQ Chicken"];

for (var i = 0; i < favorite_pizzas.length; i++) {
    console.log("I like " + favorite_pizzas[i] + " pizza.");
}

console.log("I really love pizza!");

// question thrity five 
var animals:String[] = ["Dog", "Cat", "Rabbit"];

for (var i = 0; i < animals.length; i++) {
    console.log("A " + animals[i] + " would make a great pet.");
}

console.log("Any of these animals would make a great pet!");

// question thirty six
function make_shirt(size:String, message:String) {
    console.log("You have ordered a " + size + " shirt with the message: '" + message + "'.");
}

make_shirt("large", "Hello, world!");

// question thirty seven
function make_shirt2(size:string = "large", message:String = "I love TypeScript") {
    console.log("You have ordered a " + size + " shirt with the message: '" + message + "'.");
}

make_shirt2();

make_shirt2("medium");

make_shirt2("small", "JavaScript is awesome!");

// question thirty eight
function describe_city(city:String, country:String = "Pakistan") {
    console.log(city + " is in " + country + ".");
}

describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");

// question thirty nine
function city_country(city:String, country:String) {
    return city + ", " + country;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));

// question fourty
const make_album = (artist: string, title: string, tracks?: number) => {
    let album: { artist: string, title: string, tracks?: number } = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

const album1 = make_album("Adele", "21");
const album2 = make_album("Ed Sheeran", "Divide", 16);
const album3 = make_album("Taylor Swift", "1989");

console.log(album1);
console.log(album2);
console.log(album3);

// question fourty one
const show_magicians = (magicians: string[]) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const magicians: string[] = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];

show_magicians(magicians);

// question fourty two
const show_magicians2 = (magicians: string[]) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const make_great = (magicians: string[]) => {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}

const magicians2: string[] = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];

make_great(magicians2);
show_magicians2(magicians2);

// question fourty three
const show_magicians3 = (magicians: string[]) => {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const make_great3 = (magicians: string[]) => {
    const great_magicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        great_magicians.push("the Great " + magicians[i]);
    }
    return great_magicians;
}

const magicians3: string[] = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
const great_magicians3: string[] = make_great3([...magicians3]);

console.log("Original magicians:");
show_magicians3(magicians3);

console.log("\nGreat magicians:");
show_magicians3(great_magicians3);

// question fourty four
const make_sandwich = (...items: string[]) => {
    console.log("Making a sandwich with the following items:");
    items.forEach(item => {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
}

make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss cheese", "Tomato", "Mayonnaise");
make_sandwich("Peanut Butter", "Jelly");

// question fourty five
const car_info = (manufacturer: string, model: string, ...extras: [string, any][]) => {
    let car: {[key: string]: any} = {
        manufacturer: manufacturer,
        model: model
    };
    extras.forEach(extra => {
        car[extra[0]] = extra[1];
    });
    return car;
}

const car2 = car_info("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
console.log(car2);












