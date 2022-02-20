//* VARIABLES
let blockquote = document.getElementById("advice");
let adviceId = document.getElementById("adviceId");
let button = document.getElementById("button");
let icon = document.getElementsByClassName("icon")[0];
const URL = "https://api.adviceslip.com";
//* ENDPOINTS

const endpoints = {
  random: "/advice",
  byID: "/advice/{slip_id}",
  bySearch: "/advice/search/{query}",
};

//* Functions Declarations

const getAdvice = async () => {
  let randomURL = "https://api.adviceslip.com/advice";
  try {
    let response = await fetch(randomURL);
    return await response.json();
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

const renderAdvice = async () => {
  let randomAdvice = await getAdvice();
  blockquote.innerText = randomAdvice.slip.advice;
  adviceId.innerText = randomAdvice.slip.id;
};
const createAdvice = () => {
  getAdvice();
  renderAdvice();
};
//* Function Calls

// getAdvice(); // ! WORKS => RETURN JSON FORMAT RESPONSE HERE!
// renderAdvice(); // ! WORKS
button.addEventListener("click", (e) => {
  if (icon.style.transform == "rotate(360deg)") {
    icon.style.transform = "";
  } else icon.style.transform = "rotate(360deg)";
  createAdvice();
});
