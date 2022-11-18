//can be changed afterwards
var str = "Prakash";
let name = "Prakash";
//value can't be changed
const surname = "jaiswal";
const a = 10;
const b = 11;
// if (a > b) {
//   console.log("A is greater");
// } else {
//   console.log("B is greater");
// }
//for loop

/*try {
  if (a > b) {
    console.log("a is greater");
  } else {
    throw new Error("b is greater");
  }
} catch (err) {}*/

//function
const c = "10";
// function square(x) {
//   return x * x;
// }
// console.log(square(10));

// function p(x) {
//   return console.log(x);
// }
// p(c);
const Quote = require("inspirational-quotes");
var cowsay = require("cowsay");

console.log(
  cowsay.say({
    text:'hello Prakash',
    e: "pp",
    T: "t",
  })
);

// const Quote = require('inspirational-quotes');

// console.log(Quote.getQuote()); // returns quote (text and author)
//console.log(Quote.getQuote({ author: false }));// return quote without author
 console.log(Quote.getRandomQuote()); // return any random quote
