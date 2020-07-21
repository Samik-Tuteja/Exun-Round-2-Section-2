const number = document.querySelector("input#number");
const submit = document.querySelector('button[type="submit"]');
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (number.value == "" || number.value == null) {
    alert("Enter a valid number please");
  }

  async function fetchFact() {
    const phrase = await (
      await fetch(`https://numbers-api.vercel.app/${number.value}`)
    ).text();

    alert(phrase);
  }

  fetchFact().then(() => {});
});