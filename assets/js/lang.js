const langBtn = document.querySelector("#lang_switcher_btn");

function switchLang() {
    const nextLang = localStorage.getItem("lang") === "rus" ? "eng" : "rus";
    localStorage.setItem("lang", nextLang);
    langBtn.innerHTML = nextLang === "rus" ? "eng" : "rus"; 
    loadLang(nextLang);
}

langBtn.addEventListener('click', switchLang);

function changeLang(langData) {
    Object.keys(langData).forEach(key => {
        const element = document.querySelector(`.${key}`);
        if (element) {
            element.innerHTML = langData[key];
        } else {
            console.error(`Element with class ${key} not found`);
        }
    });
}

function loadLang(code) {
    fetch(`././languages/${code}.json`)
        .then(response => response.json())
        .then(data => changeLang(data))
        .catch(error => console.error(error));
}

const initialLang = localStorage.getItem("lang") === "rus" ? "rus" : "eng";
localStorage.setItem("lang", initialLang);
langBtn.innerHTML = initialLang === "rus" ? "eng" : "rus";
loadLang(initialLang);
