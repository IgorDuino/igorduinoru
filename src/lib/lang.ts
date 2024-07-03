
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
        const response = await fetch(`languages/${code}.json`);
        const data = await response.json();
        changeLang(data);
    } catch (error) {
        console.error(error);
    }
}

export default loadLang;