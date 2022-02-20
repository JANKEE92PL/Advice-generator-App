//* VARIABLES
let blockquote = document.getElementById("advice");
let adviceId = document.getElementById("adviceId");
let button = document.getElementById("button");
const URL = "https://api.adviceslip.com";
const endpoints = {
  //* ENDPOINTS
  random: "/advice",
  byID: "/advice/{slip_id}",
  bySearch: "/advice/search/{query}",
};

//* Functions Declarations

const getAdvice = async () => {
  let randomURL = "https://api.adviceslip.com/advice";
  try {
    let response = await fetch(randomURL);
    console.log(response);
    return await response.json();
  } catch (error) {
    console.log("ERROR: ", error);
  }
};

const renderAdvice = async () => {
  let randomAdvice = await getAdvice();
  console.log("OBJECT => ", randomAdvice);
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
  createAdvice();
});
