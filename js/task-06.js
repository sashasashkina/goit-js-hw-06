document.querySelector("body").style.backgroundColor = "#EBECF0";
const inputRef = document.getElementById("validation-input");
inputRef.addEventListener("blur", onBlurBorderColor);
function onBlurBorderColor(event) {
  const dataLength = Number(inputRef.dataset.length);
  const valueLength = inputRef.value.length;
  if (valueLength === dataLength) {
    changeValid("valid", "invalid");
  } else {
    changeValid("invalid", "valid");
  }
}
function changeValid(firstClass, secondClass) {
  inputRef.classList.add(firstClass);
  inputRef.classList.remove(secondClass);
}
