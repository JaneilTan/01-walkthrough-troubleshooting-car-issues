import { getReply } from "../script.js";

const onSubmit = (event) => {
  event.preventDefault();
  const inputEl = document.querySelector("#chat-input");
  const resultEl = document.querySelector("#result");

  const inputVal = inputEl.value;
  const reply = getReply(inputVal);
  resultEl.innerText = reply;

  inputEl.value = "";
  inputEl.focus();
};

const formEl = document.querySelector("#troubleshooting");
formEl.addEventListener("submit", onSubmit);
