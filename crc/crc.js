const counter = document.querySelector("#Visit-count");
async function updateCounter() {
  let response = await fetch("https://3phcmbrxbc5llfjc2i6ls6qvse0orsci.lambda-url.us-east-1.on.aws/");
  let data = await response.json();
  counter.innerHTML = `Visit-count: ${data}`;
}

updateCounter();
