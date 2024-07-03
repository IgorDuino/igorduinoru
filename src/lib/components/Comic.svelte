<script>
  import { onMount } from 'svelte';
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';

  dayjs.extend(relativeTime);

  let comic = null;
  let error = null;

  async function fetchComicId(email) {
    const params = new URLSearchParams({ email });
    const response = await fetch(
      `https://fwd.innopolis.university/api/hw2?${params}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch comic ID');
    }
    return response.text();
  }

  async function fetchComic(id) {
    const params = new URLSearchParams({ id });
    const response = await fetch(
      `https://fwd.innopolis.university/api/comic?${params}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch comic');
    }
    return response.json();
  }

  async function fetchAndDisplayComic() {
    const email = 'i.kuzmenkov@innopolis.university';
    try {
      const comicId = await fetchComicId(email);
      comic = await fetchComic(comicId);
      showComic = true;
    } catch (err) {
      error = err.message;
      console.error('Error fetching and displaying comic:', err);
    }
  }

  function formattedDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  function fromNowDate(dateString) {
    const date = new Date(dateString);
    return dayjs(date).fromNow();
  }

  let showComic = false;

  function toggleComicDisplay() {
    if (!showComic) {
      fetchAndDisplayComic();
    } else {
      showComic = false;
    }
  }
</script>

<button id="comicButton" on:click={toggleComicDisplay}>Show comics</button>
{#if showComic && comic}
  <div class="comic-container">
    <h5 id="comic-title">{comic.title}</h5>
    <img id="comic-img" src={comic.img} alt={comic.alt} />
    <p id="comic-date">
      {formattedDate(`${comic.year}-${comic.month}-${comic.day}`)}
    </p>
    <p id="comic-from-now">
      {fromNowDate(`${comic.year}-${comic.month}-${comic.day}`)}
    </p>
  </div>
{:else if error}
  <p class="error">{error}</p>
{/if}
<img class="iam" src="/img/i.jpg" alt="igor" />

<style>
  img {
    border-radius: 2%;
    width: 450px;
    height: 450px;
  }

  .comic-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  #comic-img {
    max-width: 80%;
    height: auto;
  }

  .error {
    color: red;
    font-weight: bold;
  }
</style>
