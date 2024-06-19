async function fetchAndDisplayComic() {
    const email = 'i.kuzmenkov@innopolis.university';
    const getIdParams = new URLSearchParams({ email });

    const response = await fetch(`https://fwd.innopolis.university/api/hw2?${getIdParams}`);
    const id = await response.text();
    const getComicParams = new URLSearchParams({ id });

    const comicResponse = await fetch(`https://fwd.innopolis.university/api/comic?${getComicParams}`);
    const comic = await comicResponse.json();

    document.getElementById('comic-title').textContent = comic.title;
    document.getElementById('comic-img').src = comic.img;
    document.getElementById('comic-img').alt = comic.alt;
    const date = new Date(`${comic.year}-${comic.month}-${comic.day}`);
    document.getElementById('comic-date').textContent = date.toLocaleDateString();

    var myPhoto = document.querySelector("body > main > section.whoami > img");
    myPhoto.style.display = "none";

    var comicContainer = document.querySelector(".comic-container");
    comicContainer.style.display = "block";
}