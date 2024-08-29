/* eslint no-console:0 */

// Rails Unobtrusive JavaScript (UJS) is *required* for links in Lucky that use DELETE, POST and PUT.
// Though it says "Rails" it actually works with any framework.
import Rails from "@rails/ujs";
Rails.start();

const url = "/api/session";
const btnTrue = document.getElementById("set-state-true");
const btnFalse = document.getElementById("set-state-false");

btnTrue.addEventListener("click", el => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({state: true})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    location.reload();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});

btnFalse.addEventListener("click", el => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({state: false})
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    location.reload();
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});
