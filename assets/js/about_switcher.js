const toggleItems = [
    document.querySelector("#toggle_item_first"),
    document.querySelector("#toggle_item_second"),
    document.querySelector("#toggle_item_third")
];

const aboutDivs = [
    document.querySelector('.about_div.university'),
    document.querySelector('.about_div.learn'),
    document.querySelector('.about_div.foss')
];

toggleItems.forEach((item, index) => {
    item.addEventListener('click', () => switchAbout(index + 1));
});

function switchAbout(number) {
    toggleItems.forEach((item, index) => {
        const isActive = number === index + 1;
        item.classList.toggle('active', isActive);
        aboutDivs[index].style.display = isActive ? 'block' : 'none';
    });
}

switchAbout(Math.floor(Math.random() * 3) + 1);
