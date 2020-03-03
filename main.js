let text = document.getElementById("answer");

function fib(num) {
  if (num === 0 || num === 1) {
    return num;
  } else {
    return fib(num - 2) + fib(num - 1);
  }
}

function buttonClicked() {
  var x = document.getElementById("question").value;
  if (x == "") {
    alert("Number must be filled out!");
    return false;
  } else if (!(x > 0) || !(x < 20)) {
    alert("Must put in a number in between 0 and 20!");
    return false;
  }
  text.innerText = `${fib(x)}`;
}
