const questions = [
  {
    q: "What is 2 + 2?",
    options: ["3", "4", "5"],
    answer: "4"
  },
  {
    q: "Capital of India?",
    options: ["Delhi", "Mumbai", "Chennai"],
    answer: "Delhi"
  }
];

let current = 0, score = 0;

function loadQuestion() {
  document.getElementById("question").textContent = questions[current].q;
  const opts = questions[current].options.map(option =>
    `<button onclick="checkAnswer('${option}')">${option}</button>`
  ).join("");
  document.getElementById("options").innerHTML = opts;
}

function checkAnswer(ans) {
  if (ans === questions[current].answer) score++;
  current++;
  if (current < questions.length) loadQuestion();
  else alert(`Quiz Over! Score: ${score}`);
}

loadQuestion();
const images = ["C:\Users\kisha\OneDrive\Desktop\APEX PLANET\Task 3\1_mlwlOVUecef7whn31chIqw.png", "C:\Users\kisha\OneDrive\Desktop\APEX PLANET\Task 3\5f458c26f4bec4ddf0a4507cbd4f26af.jpg", "C:\Users\kisha\OneDrive\Desktop\APEX PLANET\Task 3\tumblr_b7c5fc6c0fcca4cfa5200cb1d0dfd883_50ff04ae_1280.jpg"];
let index = 0;

function showImage() {
  document.getElementById("slider").src = images[index];
}

function next() {
  index = (index + 1) % images.length;
  showImage();
}

function prev() {
  index = (index - 1 + images.length) % images.length;
  showImage();
}

showImage();
async function getJoke() {
  const res = await fetch("https://official-joke-api.appspot.com/random_joke");
  const data = await res.json();
  document.getElementById("joke").textContent = `${data.setup} — ${data.punchline}`;
}

getJoke();
