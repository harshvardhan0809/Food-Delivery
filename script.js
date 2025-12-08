document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  const pin = document.getElementById("pin").value;
  if (pin) {
    alert("Searching for restaurants near " + pin);
  } else {
    alert("Please enter a postcode");
  }
});

document.getElementById("dark-mode").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  const btn = document.getElementById("dark-mode");
  btn.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌙";
});
let restaurantCount = 0;
const targetCount = 500;

const counterInterval = setInterval(() => {
  restaurantCount += 5;
  document.getElementById("restaurant").textContent = restaurantCount + "+ Restaurants";
  
  if (restaurantCount >= targetCount) {
    clearInterval(counterInterval);
  }
}, 30);
