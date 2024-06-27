const dayjs = require("dayjs");
var relativeTime = require("dayjs/plugin/relativeTime");

dayjs.extend(relativeTime);

interface Comic {
    title: string;
    img: string;
    alt: string;
    year: string;
    month: string;
    day: string;
}

async function fetchComicId(email: string): Promise<string> {
    const params = new URLSearchParams({ email });
    const response = await fetch(`https://fwd.innopolis.university/api/hw2?${params}`);
    if (!response.ok) {
        throw new Error('Failed to fetch comic ID');
    }
    return response.text();
}

async function fetchComic(id: string): Promise<Comic> {
    const params = new URLSearchParams({ id });
    const response = await fetch(`https://fwd.innopolis.university/api/comic?${params}`);
    if (!response.ok) {
        throw new Error('Failed to fetch comic');
    }
    return response.json();
}

function updateComicDisplay(comic: Comic): void {
    const comicTitle = document.getElementById('comic-title') as HTMLHeadingElement;
    const comicImg = document.getElementById('comic-img') as HTMLImageElement;
    const comicDate = document.getElementById('comic-date') as HTMLParagraphElement;
    const comicFromNowDate =  document.getElementById('comic-from-now') as HTMLParagraphElement;
    const myPhoto = document.querySelector("body > main > section.whoami > img") as HTMLImageElement;
    const comicContainer = document.querySelector(".comic-container") as HTMLDivElement;

    comicTitle.textContent = comic.title;

    comicImg.src = comic.img;
    comicImg.alt = comic.alt;

    const date = new Date(`${comic.year}-${comic.month}-${comic.day}`);
    comicDate.textContent = date.toLocaleDateString();

    const fromNowDate: string = dayjs(date).fromNow();
    comicFromNowDate.textContent = fromNowDate;

    myPhoto.style.display = "none";

    comicContainer.style.display = "block";
}

async function fetchAndDisplayComic(): Promise<void> {
    const email = 'i.kuzmenkov@innopolis.university';
    try {
        const comicId = await fetchComicId(email);
        const comic = await fetchComic(comicId);
        updateComicDisplay(comic);
    } catch (error) {
        console.error('Error fetching and displaying comic:', error);
    }
}

const button = document.querySelector("#comicButton") as HTMLButtonElement;
button.addEventListener('click', () => fetchAndDisplayComic(), false);
