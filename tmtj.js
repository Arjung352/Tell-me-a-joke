let url = "https://official-joke-api.appspot.com/random_joke";
const joke = document.querySelector("#joke");
const puch = document.querySelector("#punchline");
const button = document.querySelector("#button");
let response = async () => {
  try {
    let data = await fetch(url);
    data = await data.json();
    joke.innerText = data.setup;
    puch.innerText = data.punchline;
  } catch (error) {
    console.log(error);
  }
};

window.addEventListener("load", () => {
  response();
});
button.addEventListener("click", () => {
  response();
});
