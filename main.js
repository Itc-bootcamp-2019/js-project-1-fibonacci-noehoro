function show(tag) {
  document.getElementById(tag).classList.remove("hide");
}

function hide(tag) {
  document.getElementById(tag).classList.add("hide");
}

function error(message) {
  show("alert-row");
  hide("spinner");
  document.getElementById("alert-message").innerHTML = message;
  return false;
}

function validation(x) {
  switch (true) {
    case x === "":
      error("Must type something!");
      return false;
      break;
    case x < 1:
      error("Must be bigger than 0!");
      return false;
      break;
    case x > 50:
      error("Must be smaller than 50!");
      return false;
      break;
    case isNaN(x):
      error("Must be a number!");
      return false;
      break;
    case x % 1 !== 0:
      error("Cannot be a decimal!");
      return false;
      break;
    default:
      return true;
  }
}

function json2array(json) {
  var result = [];
  var keys = Object.keys(json);
  keys.forEach(function(key) {
    result.push(json[key]);
  });
  return result;
}

function fib(num) {
  if (num === 0 || num === 1) {
    return num;
  } else {
    return fib(num - 2) + fib(num - 1);
  }
}

function buttonClicked() {
  let checkBox = document.getElementById("check");
  let isChecked;
  if (checkBox.checked) {
    isChecked = true;
  } else {
    isChecked = false;
  }
  let answer = document.getElementById("answer");
  let error = document.getElementById("error");
  hide("answer");
  hide("error");
  hide("alert-row");
  show("spinner");
  let index = document.getElementById("input").value;
  if (validation(index) && isChecked) {
    fetch("http://localhost:5050/fibonacci/" + index)
      .then(response => {
        if (response.status === 400) {
          return response.text();
        } else if (response.ok) {
          return response.json();
        }
      })
      .then(data => {
        if (typeof data === "object") {
          answer.innerHTML = data.result;
          hide("spinner");
          show("answer");
        } else {
          hide("spinner");
          show("error");
          error.innerText = data;
        }
      });
    fetch("http://localhost:5050/getFibonacciResults")
      .then(response => {
        return response.json();
      })
      .then(data => {
        const sortedActivities = data.results.sort(
          (a, b) => b.createdDate - a.createdDate
        );
        console.log(sortedActivities);
        let list = document.getElementById("results");
        list.innerHTML = ""; //resets the list
        for (let index of sortedActivities) {
          let time = new Date(index.createdDate);
          time = time.toString();
          list.innerHTML +=
            "<li>" +
            "The Fibonacci of " +
            "<span class='number'>" +
            index.number +
            "</span>" +
            " is " +
            "<span class='number'>" +
            index.result +
            "</span>" +
            " Calculated at: " +
            time +
            "</li>";
        }
      });
  } else if (!isChecked) {
    console.log("HA");
    console.log(fib(index));
    answer.innerHTML = fib(index);
    hide("spinner");
    show("answer");
  }
}

document.getElementById("button").addEventListener("click", buttonClicked);
