const burgerMenuButton = document.querySelector("#burger_menu_button");
const burgerMenuImg = document.querySelector("#burger_menu_img");
const navigation = document.querySelector("#navigation");
const navigationLinks = document.querySelectorAll("#navigation a");

const BURGER_MENU_IMG_DEFAULT = "assets/header_assets/burger_menu_icon.svg";
const BURGER_MENU_IMG_ACTIVE = "assets/header_assets/burger_menu_active.svg";
const BURGER_MENU_VISIBILITY_WIDTH = 768;

let isBurgerMenuOpen = false;

const closeBurgerMenu = () => {
  burgerMenuImg.src = BURGER_MENU_IMG_DEFAULT;
  navigation.classList.remove("navigation-mobile");
  document.body.style.overflow = "";
  isBurgerMenuOpen = false;
};

const openBurgerMenu = () => {
  burgerMenuImg.src = BURGER_MENU_IMG_ACTIVE;
  navigation.classList.add("navigation-mobile");
  document.body.style.overflow = "hidden";
  isBurgerMenuOpen = true;
};

burgerMenuButton.addEventListener("click", () => {
  if (isBurgerMenuOpen) {
    closeBurgerMenu();
  } else {
    openBurgerMenu();
  }
});

navigationLinks.forEach(link => link.addEventListener("click", () => closeBurgerMenu()));

const closeOnResize = () => {
  if (window.innerWidth > BURGER_MENU_VISIBILITY_WIDTH) {
    closeBurgerMenu();
  }
};

window.addEventListener("resize", () => closeOnResize());