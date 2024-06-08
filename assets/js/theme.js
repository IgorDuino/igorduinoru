const body = document.querySelector("body");
const themeBtn = document.querySelector("#theme_switcher_btn");

function updateTheme(isNightTheme) {
    localStorage.setItem("theme", isNightTheme ? "night" : "day");
    themeBtn.innerHTML = isNightTheme ? 'light' : 'dark';
    body.className = isNightTheme ? "dark-theme" : "";
}

function switchTheme() {
    const isNightTheme = localStorage.getItem("theme") === "night";
    updateTheme(!isNightTheme);
}

themeBtn.addEventListener('click', switchTheme);

const isNightThemeInitial = localStorage.getItem("theme") === "night";
updateTheme(isNightThemeInitial);
