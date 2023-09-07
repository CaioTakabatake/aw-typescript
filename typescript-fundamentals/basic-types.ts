// boolean
let isPaid: boolean = true;

// number
let age: number = 20;
let value: number = 29.99;

// string
let company: string = "AlgaWorks";
let userName: string = "João";
console.log(`Hello my name is ${userName}, i have ${age} years old`);

// arrays
let notes: number[] = [8, 6, 7, 9];

// tuple
let students: [string, number, string] = ["João", 10, "Math"];
console.log(students[0]);
console.log(students[1]);

// Enum
enum Colors {
  Green,
  Yellow,
  Blue,
  White,
}
let backgroundColor: Colors = Colors.Green;

// Any
let anyValue: any = 4;
anyValue = "Now is a string";
anyValue = true;
// Third-party library...
// JavaScript to TypeScript migration...
// Another example: an array with various data types

// void
function alert(): void {
  //... alert('hello world');
}

// null and undefined -> make not sense
let u: undefined = undefined;
let n: null = null;
// null and undefined are subtypes of the other types

userName = undefined;
userName = null;
