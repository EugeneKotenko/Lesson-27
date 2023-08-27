import "./styles.css";

const options = [
  "Це напевно",
  "Це однозначно так",
  "Без сумніву",
  "Однозначно так",
  "Покладіться на це",
  "Як я бачу,так",
  "Ймовірно",
  "Прогнози хороші",
  "Так",
  "Знаки вказують на так",
  "Відповідь туманна",
  "Запитай пізніше",
  "Краще не казати тобі зараз",
  "Не можу передбачити зараз",
  "Зосередься і запитай ще раз",
  "Не розраховуйте на це",
  "Моя відповідь - ні",
  "Мої джерела кажуть, що ні",
  "Перспективи не дуже хороші",
  "Дуже сумнівно",
];
const magicBall = document.getElementById("mb-container");
const response = document.getElementById("response");

magicBall.addEventListener("click", function () {
  response.textContent = "8";
  response.style.fontSize = "8rem";
  magicBall.className = "mb-outer animateNow";
  const index = Math.floor(Math.random() * options.length);
  const message = options[index];
  setTimeout(() => {
    response.textContent = message;
    response.style.fontSize = "14px";
    magicBall.className = "mb-outer";
  }, 3000);
});
