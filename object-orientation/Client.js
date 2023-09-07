var Client = /** @class */ (function () {
    function Client(name, age) {
        this.name = name;
        this.age = age;
    }
    Client.prototype.introduce = function () {
        return "Hello, I am ".concat(this.name, " and I am ").concat(this.age, " years old");
    };
    return Client;
}());
var john = new Client("John", 25);
var introduction = john.introduce();
console.log(introduction);
var maria = new Client("Maria", 23);
console.log(maria.introduce());
