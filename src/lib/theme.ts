const body: HTMLElement = document.querySelector("body")!;
const themeBtn: HTMLElement = document.querySelector("#theme_switcher_btn")!;

function updateTheme(isNightTheme: boolean): void {
    localStorage.setItem("theme", isNightTheme ? "night" : "day");
    themeBtn.innerHTML = isNightTheme ? 'light' : 'dark';
    body.className = isNightTheme ? "dark-theme" : "";
}

function switchTheme(): void {
    const isNightTheme: boolean = localStorage.getItem("theme") === "night";
    updateTheme(!isNightTheme);
}

themeBtn.addEventListener('click', switchTheme);

const isNightThemeInitial: boolean = localStorage.getItem("theme") === "night";
updateTheme(isNightThemeInitial);
