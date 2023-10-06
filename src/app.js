import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = theExcuse;
};

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];

function bringPosition(array) {
  return Math.floor(Math.random() * array.length);
}

let theExcuse =
  who[bringPosition(who)] +
  " " +
  action[bringPosition(action)] +
  " " +
  what[bringPosition(what)] +
  " " +
  when[bringPosition(when)];
