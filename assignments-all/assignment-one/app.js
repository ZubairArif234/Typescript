"use strict";
// zubair arif 16/feb/2024
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
// question two
var person = "Ali";
console.log("Hello, ".concat(person, " would you like to learn some Python today?"));
// question three
var person2 = "Ali";
console.log("lowercase", person2.toLocaleLowerCase());
console.log("lowercase", person2.toLocaleUpperCase());
console.log("lowercase", person2);
// question four
var quote = "I have no special talent , i am passionately curious";
var author = "Albert Einstein";
console.log("".concat(author, " once said , \"").concat(quote, "\""));
// question five
var famous_person = "Albert Einstine";
var message = "".concat(famous_person, " once said I have no special talent , i am passionately curious");
console.log(message);
// question six
var person3 = "\t \n John Doe \n \t";
console.log("Name with whitespace:", person3);
console.log("\nName after stripping whitespace:", person3.trim());
// question seven & eigth
console.log(6 + 2);
console.log(12 - 4);
console.log(4 * 2);
console.log(24 / 3);
// question nine
var fav_number = 6;
console.log("My Favourite Number is ".concat(fav_number));
// question eleven
var names = ["Ali", "Raza", "Umar", "Mustafa"];
names === null || names === void 0 ? void 0 : names.forEach(function (item) {
    console.log(item);
});
// question twelve
var names2 = ["Ali", "Raza", "Umar", "Mustafa"];
names2 === null || names2 === void 0 ? void 0 : names2.forEach(function (item) {
    console.log("Hello ".concat(item, " , how are you ?"));
});
// question thirteen
var transport = ["Aqua", "Civic", "Mercedes"];
transport === null || transport === void 0 ? void 0 : transport.forEach(function (item) {
    console.log("I would like to own a ".concat(item, " car"));
});
// question fourteen 
var guest = ["Haider", "Aziz", "Rizwan", "Bilal", "Rehan"];
guest === null || guest === void 0 ? void 0 : guest.forEach(function (item) {
    console.log("I would like to invite Mr.".concat(item, " for a dinner tonight"));
});
// question fifteen 
(_a = guest === null || guest === void 0 ? void 0 : guest.slice(2, (guest === null || guest === void 0 ? void 0 : guest.length) - 1)) === null || _a === void 0 ? void 0 : _a.forEach(function (item) {
    console.log("".concat(item, " can't make tonight"));
});
(_b = guest === null || guest === void 0 ? void 0 : guest.splice(2, (guest === null || guest === void 0 ? void 0 : guest.length) - 1, "Mubeen", "Asif")) === null || _b === void 0 ? void 0 : _b.forEach(function (item) {
    console.log("I would like to invite Mr.".concat(item, " for a dinner tonight"));
});
// question sixteen 
console.log("Hey, i've found a new bigger table");
guest.unshift("Murtaza");
guest.splice(3, 0, "Usman");
guest.push("Qasim");
guest === null || guest === void 0 ? void 0 : guest.forEach(function (item) {
    console.log("I would like to invite Mr.".concat(item, " for a dinner at bigger table"));
});
// question seventeen 
console.log("Attention please! i can invite only two people for dinner.");
for (var i = 1; i <= (guest === null || guest === void 0 ? void 0 : guest.length) + 2; i++) {
    console.log("Dear Mr.".concat(guest[(guest === null || guest === void 0 ? void 0 : guest.length) - i], ", i am sorry , i can't invite you for tonight's dinner"));
    guest.pop();
}
guest === null || guest === void 0 ? void 0 : guest.forEach(function (item) {
    console.log("I am glad to say that Mr.".concat(item, " is still invited for a dinner at bigger table"));
});
(guest === null || guest === void 0 ? void 0 : guest.length) === 0;
console.log(guest);
// question eighteen
var places = ["Karachi", "Canada", "Ohio", "Belgium", "Russia"];
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
places.sort();
console.log(places);
places.reverse();
console.log(places);
// question nineteen
console.log("I am inviting 5 people at dinner");
// question twenty
var mountains = [
    "Mount Everest",
    "K2",
    "Nanga Parbat",
];
console.log(mountains);
// question twenty one 
var student = {
    name: "Zubair Arif",
    email: "zubair@gmail.com",
    phone: 12345678901,
    rollNo: 123,
    class: "7",
    section: "c",
    subjects: ["maths", "english", "urdu", "computer", "islamiat", "science", "arts"]
};
console.log(student);
// question twenty three
var car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');
var hiddenNumber = 10;
console.log("Is hidden number == '10'? I predict True.");
console.log(hiddenNumber === 10);
var animal = "cat";
console.log("Is animal == 'rabbit'? I predict False.");
console.log(animal === "dog");
var colour = "red";
console.log("Is colour == 'orange'? I predict False.");
console.log(colour === "orange");
var vegetable = "carrot";
console.log("Is vagetable == 'potato'? I predict False.");
console.log(vegetable === "carrot");
var fruit = "mango";
console.log("Is fruit == 'grapes'? I predict False.");
console.log(fruit === "grapes");
var subject = "computer";
console.log("Is subject == 'computer'? I predict True.");
console.log(subject === "computer");
var cartoon = "ben 10";
console.log("Is cartoon == 'ben 10'? I predict True.");
console.log(cartoon === "ben 10");
var food = "koftey";
console.log("Is food == 'kofte'? I predict True.");
console.log(food === "koftey");
var shape = "square";
console.log("Is shape == 'oval'? I predict False.");
console.log(shape === "oval");
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
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
var alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the alien.");
}
else {
    console.log("Congratulations! You just earned 10 points.");
}
// question twenty seven
var alien_color = 'green';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var alien_color = 'yellow';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
var alien_color = 'red';
if (alien_color === 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color === 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color === 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
// question twenty eight
var age = 30;
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
// question twenty nine
var favorite_fruits = ["apple", "banana", "strawberry"];
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
var usernames = ["admin", "Eric", "Jane", "John", "Alice"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] === 'admin') {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello " + usernames[i] + ", thank you for logging in again.");
    }
}
// question thrity two
var current_users = ["John", "Jane", "Alice", "Bob", "Eric"];
var new_users = ["Bob", "Alice", "Chris", "Mark", "Sarah"];
for (var i = 0; i < new_users.length; i++) {
    if (current_users.some(function (user) { return user === new_users[i]; })) {
        console.log("Sorry, the username '" + new_users[i] + "' is already taken. Please enter a new username.");
    }
    else {
        console.log("Congratulations! The username '" + new_users[i] + "' is available.");
    }
}
// question tghirty three
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    if (number === 1) {
        console.log(number + "st");
    }
    else if (number === 2) {
        console.log(number + "nd");
    }
    else if (number === 3) {
        console.log(number + "rd");
    }
    else {
        console.log(number + "th");
    }
});
// question thirty four 
var favorite_pizzas = ["Pepperoni", "Malai boti", "BBQ Chicken"];
for (var i = 0; i < favorite_pizzas.length; i++) {
    console.log("I like " + favorite_pizzas[i] + " pizza.");
}
console.log("I really love pizza!");
// question thrity five 
var animals = ["Dog", "Cat", "Rabbit"];
for (var i = 0; i < animals.length; i++) {
    console.log("A " + animals[i] + " would make a great pet.");
}
console.log("Any of these animals would make a great pet!");
// question thirty six
function make_shirt(size, message) {
    console.log("You have ordered a " + size + " shirt with the message: '" + message + "'.");
}
make_shirt("large", "Hello, world!");
// question thirty seven
function make_shirt2(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You have ordered a " + size + " shirt with the message: '" + message + "'.");
}
make_shirt2();
make_shirt2("medium");
make_shirt2("small", "JavaScript is awesome!");
// question thirty eight
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log(city + " is in " + country + ".");
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");
// question thirty nine
function city_country(city, country) {
    return city + ", " + country;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Paris", "France"));
console.log(city_country("Tokyo", "Japan"));
// question fourty
var make_album = function (artist, title, tracks) {
    var album = {
        artist: artist,
        title: title
    };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
};
var album1 = make_album("Adele", "21");
var album2 = make_album("Ed Sheeran", "Divide", 16);
var album3 = make_album("Taylor Swift", "1989");
console.log(album1);
console.log(album2);
console.log(album3);
// question fourty one
var show_magicians = function (magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
};
var magicians = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
show_magicians(magicians);
// question fourty two
var show_magicians2 = function (magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
};
var make_great = function (magicians) {
    for (var i_1 = 0; i_1 < magicians.length; i_1++) {
        magicians[i_1] = "the Great " + magicians[i_1];
    }
};
var magicians2 = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
make_great(magicians2);
show_magicians2(magicians2);
// question fourty three
var show_magicians3 = function (magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
};
var make_great3 = function (magicians) {
    var great_magicians = [];
    for (var i_2 = 0; i_2 < magicians.length; i_2++) {
        great_magicians.push("the Great " + magicians[i_2]);
    }
    return great_magicians;
};
var magicians3 = ["David Copperfield", "Penn Jillette", "Teller", "David Blaine"];
var great_magicians3 = make_great3(__spreadArray([], magicians3, true));
console.log("Original magicians:");
show_magicians3(magicians3);
console.log("\nGreat magicians:");
show_magicians3(great_magicians3);
// question fourty four
var make_sandwich = function () {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    items.forEach(function (item) {
        console.log("- " + item);
    });
    console.log("Enjoy your sandwich!");
};
make_sandwich("Ham", "Cheese", "Lettuce");
make_sandwich("Turkey", "Swiss cheese", "Tomato", "Mayonnaise");
make_sandwich("Peanut Butter", "Jelly");
// question fourty five
var car_info = function (manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    extras.forEach(function (extra) {
        car[extra[0]] = extra[1];
    });
    return car;
};
var car2 = car_info("Toyota", "Camry", ["color", "blue"], ["year", 2022]);
console.log(car2);
