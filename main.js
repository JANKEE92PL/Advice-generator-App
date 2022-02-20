let blockquote = document.getElementById("advice");
// blockquote.innerText = "";

const URL = "https://api.adviceslip.com";
const params = {
  //* ENDPOINTS
  random: "/advice",
  byID: "/advice/{slip_id}",
  bySearch: "/advice/search/{query}",
};

const getAdvice = async (url, endpoint) => {
  let querry = endpoint;
  endpoint = url + endpoint;
  fetch(endpoint);
  await ((response) => {
    console.log(response.json());
  });
};
const updateAdviceText = (data) => {
  console.log("DATA: ", data);
};

let randomAdvice = getAdvice(URL, params.random);
