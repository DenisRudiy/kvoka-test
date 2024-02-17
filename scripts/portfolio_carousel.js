const d = document;
const $q = d.querySelectorAll.bind(d);
const $g = d.querySelector.bind(d);
const $prev = $g(".prev");
const $next = $g(".next");
const $list = $g(".carousel__list");
let auto;
let pauser;
let item;

const getActiveIndex = () => {
  const $active = $g("[data-active]");
  return getSlideIndex($active);
};

const getSlideIndex = ($slide) => {
  return [...$q(".carousel__item")].indexOf($slide);
};

const prevSlide = () => {
  const index = getActiveIndex();
  const $slides = $q(".carousel__item");
  const $last = $slides[$slides.length - 1];
  $last.remove();
  $list.prepend($last);
  activateSlide($q(".carousel__item")[index]);
};
const nextSlide = () => {
  const index = getActiveIndex();
  const $slides = $q(".carousel__item");
  const $first = $slides[0];
  $first.remove();
  $list.append($first);
  activateSlide($q(".carousel__item")[index]);
};

const chooseSlide = (e) => {
  const max = window.matchMedia("screen and ( max-width: 600px)").matches ? 5 : 8;
  const $slide = e.target.closest(".carousel__item");
  const index = getSlideIndex($slide);
  if (index < 3 || index > max) return;
  if (index === max) nextSlide();
  if (index === 3) prevSlide();
  activateSlide($slide);
};

const activateSlide = ($slide) => {
  if (!$slide) return;
  const $slides = $q(".carousel__item");
  $slides.forEach((el) => el.removeAttribute("data-active"));
  $slide.setAttribute("data-active", true);
  $slide.focus();
};

const autoSlide = () => {
  nextSlide();
};

const pauseAuto = () => {
  clearInterval(auto);
  clearTimeout(pauser);
};

const handleNextClick = (e) => {
  pauseAuto();
  nextSlide(e);
};

const handlePrevClick = (e) => {
  pauseAuto();
  prevSlide(e);
};

const handleSlideClick = (e) => {
  pauseAuto();
  chooseSlide(e);
};

const handleSlideKey = (e) => {
  switch (e.keyCode) {
    case 37:
    case 65:
      break;
    case 39:
    case 68:
      break;
  }
};

async function fetchData(id) {
  try {
    const response = await fetch("db.json");
    const data = await response.json();
    item = data.projects[id];

    const itemNameElement = document.getElementById("item_name");
    const itemDescriptionElement = document.getElementById("item_description");
    const itemVideoElement = document.getElementById("video");

    itemNameElement.textContent = item.name;
    itemDescriptionElement.textContent = item.description;
    itemVideoElement.querySelector("source").src = item.video;
    itemVideoElement.load();
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

$next.addEventListener("click", handleNextClick);
$prev.addEventListener("click", handlePrevClick);
$list.addEventListener("focusin", handleSlideClick);
$list.addEventListener("keyup", handleSlideKey);

const handleItemClick = (e) => {
  pauseAuto();
  const $clickedSlide = e.target.closest(".carousel__item");
  const tabIndexValue = $clickedSlide.getAttribute("tabindex");

  fetchData(parseInt(tabIndexValue));
};

$q(".carousel__item").forEach(($slide) => {
  $slide.addEventListener("click", handleItemClick);
});

document.addEventListener("DOMContentLoaded", () => {
  fetchData(5);
});
