/* eslint no-console:0 */

// Rails Unobtrusive JavaScript (UJS) is *required* for links in Lucky that use DELETE, POST and PUT.
// Though it says "Rails" it actually works with any framework.
import Rails from "@rails/ujs";
Rails.start();

const csrfToken = document.querySelector("meta[name='csrf-token']").getAttribute('content');
const urlApi = "/api/session";
const browserApi = "/session";
const btnApiTrue = document.getElementById("set-api-state-true");
const btnApiFalse = document.getElementById("set-api-state-false");
const btnBrowserTrue = document.getElementById("set-browser-state-true");
const btnBrowserFalse = document.getElementById("set-browser-state-false");

const update = (el, state, api = false) => {
  const url = api ? urlApi : browserApi;
  fetch(url, {
    method: 'POST',
    headers: {
      'X-CSRF-TOKEN': csrfToken,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({state: state})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    location.reload();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
};

btnApiTrue.addEventListener("click", el => update(el, true, true));
btnApiFalse.addEventListener("click", el => update(el, false, true));
btnBrowserTrue.addEventListener("click", el => update(el, true));
btnBrowserFalse.addEventListener("click", el => update(el, false));
