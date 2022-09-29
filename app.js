const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");
const errorText = document.querySelector(".error-text");

const serverUrl = "https://api.funtranslations.com/translate/navi.json";

const translatedText = function (text) {
  errorText.innerText = "";
  return serverUrl + "?" + "text=" + text;
};

const errorHandler = function (error) {
  errorText.innerText =
    "Hey! something is wrong with the server!! Can you please try again later.";
  errorText.style.color = "white";
  outputDiv.innerText = "";
};

const clickHandler = function () {
  const inputText = txtInput.value;

  fetch(translatedText(inputText))
    .then((response) => response.json())
    .then((json) => {
      const outputText = json.contents.translated;
      outputDiv.innerText = outputText;
    })
    .catch(errorHandler);
};

btnTranslate.addEventListener("click", clickHandler);
