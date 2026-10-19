const backendMessage = document.querySelector("#backend-message");

fetch("http://localhost:3000/")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Backend returned ${response.status}`);
    }

    return response.text();
  })
  .then((message) => {
    backendMessage.textContent = message;
  })
  .catch((error) => {
    backendMessage.textContent = `Could not connect to backend: ${error.message}`;
    console.error("Backend request failed:", error);
  });