
const parentElement = document.querySelector(".container");
const keyElement = document.querySelector(".key p");
const keyCodeElement = document.querySelector(".keycode p");

window.addEventListener("keydown", (e) => {
  keyElement.innerText = e.key;
  keyCodeElement.innerText = e.keyCode;

  if (e.keyCode === 32) keyElement.innerText = `Space`;
});

parentElement.addEventListener("click", () => {
  const textArea = document.createElement("textarea");
  textArea.value = keyCodeElement.innerText;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("copy");
  document.body.removeChild(textArea);

  let text = document.querySelector(".keycode i");
  text.innerText = "copied";

  setTimeout(() => {
    text.innerText = "copied";
  }, 1000);
});
