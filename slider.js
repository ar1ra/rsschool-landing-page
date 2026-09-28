import products from "./sliderProducts.json" with { type: "json" };

const sliderContainer = document.querySelector("#slider_container");
const sliderImage = document.querySelector("#slider_image");
const sliderProduct = document.querySelector("#slider_product");
const sliderDescription = document.querySelector("#slider_description");
const sliderPrice = document.querySelector("#slider_price");

const sliderLeftArrrow = document.querySelector("#slider_left_arrow");
const sliderRightArrrow = document.querySelector("#slider_right_arrow");

let currentSlide = products.indexOf(products[0]);

const generateTheSlide = (slide) => {
  sliderContainer.innerHTML = products.map(({ id, img, name, description, price }) => {
    return `<div class="slider ${slide + 1 === id ? 'active' : 'non-active'}">
          <img id="slider_image" width="480" height="480" src=${img}
            alt="coffee image">
          <h3 id="slider_product">${name}</h3>
          <p id="slider_description" class="medium-text slider-description">${description}</p>
          <h3>$<span id="slider_price">${price}</span></h3>
        </div>`
  }).join("");
};

const controlLeftButton = (activeSlide) => {
  if (activeSlide > 0) {
    activeSlide--;
  } else {
    activeSlide = products.length - 1;
  }
  generateTheSlide(activeSlide);
  currentSlide = activeSlide;
};

const controlRightButton = (activeSlide) => {
  if (activeSlide < products.length - 1) {
    activeSlide++;
  } else {
    activeSlide = 0;
  }
  generateTheSlide(activeSlide);
  currentSlide = activeSlide;
};

sliderLeftArrrow.addEventListener("click", () => controlLeftButton(currentSlide));
sliderRightArrrow.addEventListener("click", () => controlRightButton(currentSlide));

