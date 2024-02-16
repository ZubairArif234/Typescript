// zubair arif 16/feb/2024
var _a, _b;
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
