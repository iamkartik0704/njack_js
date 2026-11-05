const data = {
  1: { emoji: "😡", text: "Terrible, we're sorry!", bg: "#fdecea" },
  2: { emoji: "😕", text: "Not great.", bg: "#fff3e0" },
  3: { emoji: "😐", text: "Okay.", bg: "#fffde7" },
  4: { emoji: "😊", text: "Good, thanks!", bg: "#e8f5e9" },
  5: { emoji: "🤩", text: "Excellent! You're awesome!", bg: "#f3e5f5" },
};

const stars = document.querySelectorAll("#stars span");
const emoji = document.getElementById("emoji");
const message = document.getElementById("message");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = Number(star.dataset.value);

    // fill stars up to the clicked one
    stars.forEach((s) => {
      s.classList.toggle("active", Number(s.dataset.value) <= rating);
    });

    // show the matching feedback
    emoji.textContent = data[rating].emoji;
    message.textContent = data[rating].text;
    document.body.style.background = data[rating].bg;
  });
});