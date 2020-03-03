let text = document.getElementById("answer");

function fib(num) {
  if (num === 0 || num === 1) {
    return num;
  } else {
    return fib(num - 2) + fib(num - 1);
  }
}

function buttonClicked() {
  let http = new XMLHttpRequest();
  const url = "http://localhost:5050/fibonacci/" + document.getElementById("question").value;
  http.open("GET", url, true);
  http.onreadystatechange = function() {
    if (http.readyState == 4 && http.status == 200) {
      let f = http.responseText;
      const a = JSON.parse(f).result;
      text.innerText = a;
    }
  };
  http.send();
}


// var x = document.getElementById("question").value;
//   if (x == "") {
//     alert("Number must be filled out!");
//     return false;
//   } else if (!(x > 0) || !(x < 20)) {
//     alert("Must put in a number in between 0 and 20!");
//     return false;
//   }
//   text.innerText = `${fib(x)}`;