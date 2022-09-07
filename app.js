const btnTranslate = document.querySelector("#btn-translate");
const txtInput = document.querySelector("#txt-input");
const outputDiv = document.querySelector("#output");

const serverUrl = "https://api.funtranslations.com/translate/navi.json";

const translatedText = function (text) {
  return serverUrl + "?" + "text=" + text;
};

const errorHandler = function (error) {
  console.log("Some Error occured", error);
  alert("Hey there! Some error occured please try again later ");
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
