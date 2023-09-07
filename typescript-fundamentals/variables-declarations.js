// var, let and const
// // var
// function startTeam(startGameInUberlandia: boolean) {
//   var name: string = "Messi and friends";
//   // HOISTING
//   if (startGameInUberlandia) {
//     var city: string = "in Uberlândia";
//   }
//   console.log(`${name} will play ${city}`);
// }
// // let
// function startTeam(startGameInUberlandia: boolean) {
//   let name: string = "Messi and friends";
//   let city: string = "In São Paulo";
//   if (startGameInUberlandia) {
//     city = "in Uberlândia";
//   }
//   console.log(`${name} will play ${city}`);
// }
// const
function startTeam(startGameInUberlandia) {
    var name = "Messi and friends";
    var city = "In São Paulo";
    if (startGameInUberlandia) {
        city = "in Uberlândia";
    }
    // name = "Ronaldo and friends";
    console.log("".concat(name, " will play ").concat(city));
}
startTeam(true);
