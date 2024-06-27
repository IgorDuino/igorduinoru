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
    const comicTitle = document.getElementById('comic-title');
    const comicImg = document.getElementById('comic-img') as HTMLImageElement;
    const comicDate = document.getElementById('comic-date') as HTMLParagraphElement;
    const myPhoto = document.querySelector("body > main > section.whoami > img") as HTMLImageElement;
    const comicContainer = document.querySelector(".comic-container") as HTMLDivElement;

    if (comicTitle) {
        comicTitle.textContent = comic.title;
    } else {
        console.error('Comic title element not found');
    }

    if (comicImg) {
        comicImg.src = comic.img;
        comicImg.alt = comic.alt;
    } else {
        console.error('Comic image element not found');
    }

    if (comicDate) {
        const date = new Date(`${comic.year}-${comic.month}-${comic.day}`);
        comicDate.textContent = date.toLocaleDateString();
    } else {
        console.error('Comic date element not found');
    }

    if (myPhoto) {
        myPhoto.style.display = "none";
    } else {
        console.error('My photo element not found');
    }

    if (comicContainer) {
        comicContainer.style.display = "block";
    } else {
        console.error('Comic container element not found');
    }
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
