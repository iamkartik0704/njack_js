const output = document.getElementById("output");

// A promise that waits 2 seconds, then succeeds or fails randomly
function getData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve("Data loaded!");
      } else {
        reject("Something went wrong!");
      }
    }, 2000);
  });
}

function show(text, type) {
  output.textContent = text;
  output.className = type;
}

// 1. Using .then() and .catch()
document.getElementById("promiseBtn").addEventListener("click", () => {
  show("Loading...", "loading");

  getData()
    .then((result) => show(result + " (Promise)", "success"))
    .catch((error) => show(error + " (Promise)", "error"));
});

// 2. Using async / await
document.getElementById("asyncBtn").addEventListener("click", async () => {
  show("Loading...", "loading");

  try {
    const result = await getData();
    show(result + " (Async/Await)", "success");
  } catch (error) {
    show(error + " (Async/Await)", "error");
  }
});