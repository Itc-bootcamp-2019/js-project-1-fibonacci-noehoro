let text = document.getElementById("answer");

let set = [];
let y = 10; //Until where do you wanna go?

function calc(y) {
    set[0] = 0;
    set[1] = 1;
  for (let i = 0; i < y; i++) {
    set[i+2] = set[i]+set[i+1];
    console.log(`The Fib of ${i+1}is  ${set[i+1]}`);
  }
  text.innerText = `${set[y]}`;
}

function validateForm() {
  var x = document.getElementById("question").value;
  if (x == "") {
    alert("Number must be filled out");
    return false;
  }
}


function buttonClicked() {
  var x = document.getElementById("question").value;
  if (x == "") {
    alert("Number must be filled out!");
    return false;
  } else if(!(x>0) || !(x<20)){
    alert("Must put in a number in between 0 and 20!");
    return false;
  }
  calc(x);
}







