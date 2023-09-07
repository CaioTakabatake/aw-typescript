class Client {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    return `Hello, I am ${this.name} and I am ${this.age} years old`;
  }
}

let john: Client = new Client("John", 25);
let introduction: string = john.introduce();
console.log(introduction);

let maria: Client = new Client("Maria", 23);
console.log(maria.introduce());
