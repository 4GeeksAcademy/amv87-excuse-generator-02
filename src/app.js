/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#excuse").innerHTML = generateExcuse();
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

let generateExcuse = () => {
  let whoRandom = bringPosition(who);
  let actionRandom = bringPosition(action);
  let whatRandom = bringPosition(what);
  let whenRandom = bringPosition(when);
  return (
    who[whoRandom] +
    " " +
    action[actionRandom] +
    " " +
    what[whatRandom] +
    " " +
    when[whenRandom]
  );
};
