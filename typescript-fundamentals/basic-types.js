// boolean
var isPaid = true;
// number
var age = 20;
var value = 29.99;
// string
var company = "AlgaWorks";
var userName = "João";
console.log("Hello my name is ".concat(userName, ", i have ").concat(age, " years old"));
// arrays
var notes = [8, 6, 7, 9];
// tuple
var students = ["João", 10, "Math"];
console.log(students[0]);
console.log(students[1]);
// Enum
var Colors;
(function (Colors) {
    Colors[Colors["Green"] = 0] = "Green";
    Colors[Colors["Yellow"] = 1] = "Yellow";
    Colors[Colors["Blue"] = 2] = "Blue";
    Colors[Colors["White"] = 3] = "White";
})(Colors || (Colors = {}));
var backgroundColor = Colors.Green;
// Any
var anyValue = 4;
anyValue = "Now is a string";
anyValue = true;
// Third-party library...
// JavaScript to TypeScript migration...
// Another example: an array with various data types
// void
function alert() {
    //... alert('hello world');
}
// null and undefined -> make not sense
var u = undefined;
var n = null;
// null and undefined are subtypes of the other types
userName = undefined;
userName = null;
