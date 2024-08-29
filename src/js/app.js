/* eslint no-console:0 */

// Rails Unobtrusive JavaScript (UJS) is *required* for links in Lucky that use DELETE, POST and PUT.
// Though it says "Rails" it actually works with any framework.
import Rails from "@rails/ujs";
Rails.start();

const url = "/api/session";
const btnApiTrue = document.getElementById("set-api-state-true");
const btnApiFalse = document.getElementById("set-api-state-false");
const btnBrowserTrue = document.getElementById("set-browser-state-true");
const btnBrowserFalse = document.getElementById("set-browser-state-false");

const update = (el, state) => {
  fetch(url, {
    method: 'POST',
    headers: {
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

btnApiTrue.addEventListener("click", el => update(el, true));
btnApiFalse.addEventListener("click", el => update(el, false));
btnBrowserTrue.addEventListener("click", el => update(el, true));
btnBrowserFalse.addEventListener("click", el => update(el, false));
