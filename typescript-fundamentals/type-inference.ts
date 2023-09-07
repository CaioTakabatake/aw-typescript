let quantity = 20;

// quantity = 'any'; -> does not compile!

let x = [1, 2, null];
// x[0] = true; -> does not compile!

// Contextual Typing
window.onmousedown = function (event) {
  console.log(event.button); // OK
  // console.log(event.buton); Does not compile!
};
