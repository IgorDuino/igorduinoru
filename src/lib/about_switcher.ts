const toggleItems: HTMLElement[] = [
    document.querySelector("#toggle_item_first")!,
    document.querySelector("#toggle_item_second")!,
    document.querySelector("#toggle_item_third")!
];

const aboutDivs: HTMLElement[] = [
    document.querySelector('.about_div.university')!,
    document.querySelector('.about_div.learn')!,
    document.querySelector('.about_div.foss')!
];

toggleItems.forEach((item, index) => {
    if (item) {
        item.addEventListener('click', () => switchAbout(index + 1));
    } else {
        console.error(`Toggle item at index ${index} not found.`);
    }
});

function switchAbout(number: number): void {
    toggleItems.forEach((item, index) => {
        const isActive = number === index + 1;
        if (item) {
            item.classList.toggle('active', isActive);
        }
        if (aboutDivs[index]) {
            aboutDivs[index].style.display = isActive ? 'block' : 'none';
        }
    });
}

switchAbout(Math.floor(Math.random() * 3) + 1);
