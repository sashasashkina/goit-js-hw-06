const inputRef = document.getElementById("validation-input");

inputRef.addEventListener("blur", onBlurColor);
function onBlurColor(event) {
  const dataLength = Number(inputRef.dataset.length);
  const valueLength = Number(inputRef.value.trim().length);
  if (valueLength === dataLength) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.remove("valid");
    inputRef.classList.add("invalid");
  }
}
