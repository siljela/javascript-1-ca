const updateContainer = document.querySelector("blockquote");
const innerText = updateContainer.innerText;

function updateText() {
  const formattedContainer = innerText
    .replace(/the/g, "banana")
    .replace(/The/g, "Banana");
  updateContainer.innerText = formattedContainer;
}
setTimeout(updateText, 3000);
