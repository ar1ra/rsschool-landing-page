import products from "./sliderProducts.json" with { type: "json" };

const sliderContainer = document.querySelector("#slider_container");

const sliderLeftArrrow = document.querySelector("#slider_left_arrow");
const sliderRightArrrow = document.querySelector("#slider_right_arrow");

const sliderControlTab = document.querySelector("#slider_control_tabs");

let currentSlide = products.indexOf(products[0]);

const generateTheSlide = (slide) => {
  sliderContainer.innerHTML = products.map(({ id, img, name, description, price }) => {
    return `<div class="slider ${slide + 1 === id ? 'active' : 'non-active'}">
          <img id="slider_image" width="480" height="480" src=${img}
            alt="coffee image">
          <h3 id="slider_product">${name}</h3>
          <p id="slider_description" class="medium-text slider-description">${description}</p>
          <h3>$<span id="slider_price">${price.toFixed(2)}</span></h3>
        </div>`
  }).join("");
};

const generateControlTabs = (slide) => {
  sliderControlTab.innerHTML = products
    .map(({ id }) => {
      return `
        <button
          data-slide="${id - 1}"
          class="${slide + 1 === id ? "active-slide" : ""}"
        ></button>
      `;
    })
    .join("");

  sliderControlTab.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => {
      currentSlide = Number(button.dataset.slide);

      generateTheSlide(currentSlide);
      generateControlTabs(currentSlide);
    });
  });
};

const controlLeftButton = (activeSlide) => {
  if (activeSlide > 0) {
    activeSlide--;
  } else {
    activeSlide = products.length - 1;
  }
  generateTheSlide(activeSlide);
  generateControlTabs(activeSlide);
  currentSlide = activeSlide;
};

const controlRightButton = (activeSlide) => {
  if (activeSlide < products.length - 1) {
    activeSlide++;
  } else {
    activeSlide = 0;
  }
  generateTheSlide(activeSlide);
  generateControlTabs(activeSlide);
  currentSlide = activeSlide;
};

sliderLeftArrrow.addEventListener("click", () => controlLeftButton(currentSlide));
sliderRightArrrow.addEventListener("click", () => controlRightButton(currentSlide));

generateTheSlide(currentSlide);
generateControlTabs(currentSlide);

