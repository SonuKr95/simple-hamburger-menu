function expandmenu() {
  const menuIcon = document.querySelector(".menu").classList.toggle("hidden");
  const hambr = document.querySelectorAll(".bar").forEach((bar, index) => {
    if (index === 0) {
      bar.classList.toggle("active--bar1");
    }
    if (index === 1) {
      bar.classList.toggle("hidden");
    }
    if (index === 2) {
      bar.classList.toggle("active--bar2");
    }
  });
}
