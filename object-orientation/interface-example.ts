interface Person {
  age: number;
  gender?: string;
}

function printAge(person: Person) {
  console.log(person.age);
}

let joaoMarcos = { name: "João Marcos", age: 22 };

printAge(joaoMarcos);
