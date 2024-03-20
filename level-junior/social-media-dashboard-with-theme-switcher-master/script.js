const toggle = document.getElementById("mode_selector");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  document.getElementById("dark_mode_label").classList.toggle("dashboard__display")
  document.getElementById("light_mode_label").classList.toggle("dashboard__display")
});
