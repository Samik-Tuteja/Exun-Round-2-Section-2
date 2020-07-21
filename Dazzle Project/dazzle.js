var username = window.prompt("Enter your name: ");

alert([
  "Hi " + username + "!! I am new to Javascript. Hope you like the website",
]);

if (window.innerWidth > 1900) {
  alert(
    "BTW you have a big screen! Probably you are working on a Desktop. Your screen resolution is" +
      screen.width +
      " x " +
      screen.height
  );
} else if (window.innerWidth < 600) {
  alert(
    "Probably a mobile phone. Your screen resolution is" +
      screen.width +
      " x " +
      screen.height
  );
} else {
  alert(
    "BTW You have a decent size laptop. Your screen resolution is: " +
      screen.width +
      " x " +
      screen.height
  );
}

document.getElementById("h1").innerHTML = "Welcome to my website, " + username;

function classfun() {
  var guessclass = window.prompt("What is your age");
  if (guessclass == 16) {
    alert("Whoa!! last year of schooling. Probably in class 12");
  } else if (guessclass == 15) {
    alert("Probably in class 11");
  } else if (guessclass == 14) {
    alert("Probably in class 10");
  } else if (guessclass == 13) {
    alert("Probably in class 9");
  } else if (guessclass == 12) {
    alert("Probably in class 8");
  } else if (guessclass == 11) {
    alert("Probably in class 7");
  } else if (guessclass == 10) {
    alert("Wecome to DPS RKP!! Probably in class 6");
  } else if (guessclass < 10) {
    alert("You are a junior");
  } else {
    alert("Finished schooling!!");
  }
}
function saqrt() {
  var root = Math.sqrt(document.getElementById("sqrt").value).toFixed(2);
  alert(root);
}
function square() {
  var square = document.getElementById("square").value;
  alert(square * square);
}
function funcircum() {
  var radius = document.getElementById("radius").value;
  var formula = [2 * Math.PI * radius];
  alert(formula);
}
function funradcir() {
  var circum = document.getElementById("radcircle").value;
  var formulae = [circum / (2 * Math.PI)];
  alert(formulae);
}
function getmultiples() {
  var multipleval = document.getElementById("multiples").value;
  var text = "";
  for (let i = 1; i <= 20; i++) {
    text += multipleval + " x " + i + " = " + multipleval * i + "<br>";
  }
  document.getElementById("showmultiples").innerHTML = text;
  if (multipleval == 0 || multipleval == "") {
    document.getElementById("showmultiples").innerHTML = "";
  }
}
function reset1() {
  document.getElementById("showmultiples").innerHTML = "";
}

// --------------------------------------------------Stopwatch=---------------------------------------------------------//

var ms = 0;
s = 0;
m = 0;
var timer;

var stopwatch = document.querySelector(".stopwatch");

function start() {
  if (!timer) {
    timer = setInterval(run, 10);
  }
}
function run() {
  stopwatch.textContent =
    (m < 10 ? "0" + m : m) +
    ":" +
    (s < 10 ? "0" + s : s) +
    ":" +
    (ms < 10 ? "0" + ms : ms);
  ms++;
  if (ms == 100) {
    ms = 0;
    s++;
  }
  if (s == 60) {
    s = 0;
    m++;
  }
}

function pause() {
  clearInterval(timer);
  timer = false;
}
function restart() {
  clearInterval(timer);
  timer = false;
  ms = 0;
  s = 0;
  m = 0;
  stopwatch.textContent =
    (m < 10 ? "0" + m : m) +
    ":" +
    (s < 10 ? "0" + s : s) +
    ":" +
    (ms < 10 ? "0" + ms : ms);
}