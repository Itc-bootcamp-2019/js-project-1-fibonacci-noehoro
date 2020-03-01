let text = document.getElementById("text");

let set = [];
let y = 10; //Until where do you wanna go?

function calc(index) {
    set[0] = 0;
    set[1] = 1;
  for (let i = 0; i < index; i++) {
    set[i+2] = set[i]+set[i+1];
    console.log(`The Fib of ${i+2}is  ${set[i+2]}`);
  }
}

calc(y);

text.innerText = `The Fibonacci of ${y} is ${set[y]}`;
