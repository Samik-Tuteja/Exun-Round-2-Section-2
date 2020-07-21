const name = document.querySelector("input#name");
const form = document.querySelector("form");
const email = document.querySelector("input#email");
const select = document.querySelector("select#class");
const section = document.querySelector("select#section");

function validateForm() {
  if (name.value == "") {
    alert("Name can't be empty");
    return false;
  } else if (email.value == "") {
    alert("Email must not be empty");
    return false;
  } else if (select.selectedIndex === 0) {
    alert("Invalid class");
    document.getElementById("section").disabled = true;
    return false;
  } else if (section.selectedIndex === 0) {
    alert("Invalid section");
    return false;
  }
  return true;
}

function disable() {
  if (select.selectedIndex === 0) {
    section.disabled = true;
  } else {
    section.disabled = false;
  }
}
form.addEventListener("submit", function myfun(e) {
  e.preventDefault();
  const details = [
    "Hello, " +
      name.value +
      " " +
      "<" +
      email.value +
      "> " +
      "from " +
      select.value +
      " " +
      section.value,
  ];
  if (validateForm() == true) {
    alert(details);
    return;
  }
});