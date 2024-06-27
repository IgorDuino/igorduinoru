const langBtn: HTMLElement = document.querySelector("#lang_switcher_btn")!;

if (langBtn) {
    function switchLang(): void {
        const nextLang: string = localStorage.getItem("lang") === "rus" ? "eng" : "rus";
        localStorage.setItem("lang", nextLang);
        langBtn.innerHTML = nextLang === "rus" ? "eng" : "rus";
        loadLang(nextLang);
    }

    langBtn.addEventListener('click', switchLang);

    function changeLang(langData: { [key: string]: string }): void {
        Object.keys(langData).forEach(key => {
            const element = document.querySelector(`.${key}`);
            if (element) {
                element.innerHTML = langData[key];
            } else {
                console.error(`Element with class ${key} not found`);
            }
        });
    }

    async function loadLang(code: string): Promise<void> {
        try {
            const response = await fetch(`././languages/${code}.json`);
            const data = await response.json();
            changeLang(data);
        } catch (error) {
            console.error(error);
        }
    }

    const initialLang: string = localStorage.getItem("lang") === "rus" ? "rus" : "eng";
    localStorage.setItem("lang", initialLang);
    langBtn.innerHTML = initialLang === "rus" ? "eng" : "rus";
    loadLang(initialLang);
} else {
    console.error("Language switcher button not found in the document.");
}
