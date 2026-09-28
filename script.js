const lightThemeButton = document.querySelector("#light_theme_toggle");
const darkThemeButton = document.querySelector("#dark_theme_toggle");
const logoImg = document.querySelector("#logo_img");
const lightThemeToggleImg = document.querySelector("#light_theme_toggle_img");
const darkThemeToggleImg = document.querySelector("#dark_theme_toggle_img");
const menuLink = document.querySelector("#menu_link");
const menuLinkIcon = document.querySelector("#menu_link_img");

const LOGO_IMAGE_LIGHT = "assets/header_assets/logo.svg";
const LOGO_IMAGE_DARK = "assets/header_assets/logo_dark.svg";
const TOGGLE_DARK_THEME_DEFAULT = "assets/header_assets/dark_theme.svg";
const TOGGLE_DARK_THEME_IS_ON = "assets/header_assets/dark_theme_is_on.svg";
const TOGGLE_LIGHT_THEME_DEFAULT = "assets/header_assets/light_theme.svg";
const TOGGLE_LIGHT_THEME_IS_OFF = "assets/header_assets/light_theme_is_off.svg";
const MENU_LINK_ICON_LIGHT = "assets/header_assets/coffee_cup_icon_light.svg";
const MENU_LINK_ICON_DARK = "assets/header_assets/coffee_cup_icon_dark.svg";

const theme = localStorage.getItem("theme");

const setTheme = (theme) => {
  if (theme == "dark") {
    document.body.classList.add("dark");
    menuLink.classList.add("menu-link-dark");
    lightThemeToggleImg.src = TOGGLE_LIGHT_THEME_IS_OFF;
    darkThemeToggleImg.src = TOGGLE_DARK_THEME_IS_ON;
    logoImg.src = LOGO_IMAGE_DARK;
    menuLinkIcon.src = MENU_LINK_ICON_LIGHT;
    localStorage.setItem("theme", "dark");
  } else {
    document.body.classList.remove("dark");
    menuLink.classList.remove("menu-link-dark");
    lightThemeToggleImg.src = TOGGLE_LIGHT_THEME_DEFAULT;
    darkThemeToggleImg.src = TOGGLE_DARK_THEME_DEFAULT;
    logoImg.src = LOGO_IMAGE_LIGHT;
    menuLinkIcon.src = MENU_LINK_ICON_DARK;
    localStorage.setItem("theme", "light");
  }
};

if (theme) {
  setTheme(theme);
}

lightThemeButton.addEventListener("click", () => setTheme("light"));

darkThemeButton.addEventListener("click", () => setTheme("dark"));