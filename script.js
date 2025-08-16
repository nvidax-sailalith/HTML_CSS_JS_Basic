const items = document.querySelectorAll(".item");

function showItems() {
  const trigger = window.innerHeight * 0.85;

  items.forEach((item) => {
    const itemTop = item.getBoundingClientRect().top;
    if (itemTop < trigger) {
      item.classList.add("show");
    }
  });
}

window.addEventListener("scroll", showItems);
window.addEventListener("load", showItems);
