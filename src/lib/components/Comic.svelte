<script>
  import { onMount } from 'svelte';
  import dayjs from 'dayjs';
  import relativeTime from 'dayjs/plugin/relativeTime';

  dayjs.extend(relativeTime);

  /**
   * @type {{ title: string; img: string; alt: string; year: number; month: number; day: number; } | null}
   */
  let comic = null;
  /**
   * @type {string | null}
   */
  let error = null;

  /**
   * Fetch the comic ID based on the provided email.
   * @param {string} email
   * @returns {Promise<string>}
   */
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

  /**
   * Fetch the comic based on the provided ID.
   * @param {string} id
   * @returns {Promise<{ title: string; img: string; alt: string; year: number; month: number; day: number; }>}
   */
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

  /**
   * Fetch and display the comic based on the email.
   */
  async function fetchAndDisplayComic() {
    const email = 'i.kuzmenkov@innopolis.university';
    try {
      const comicId = await fetchComicId(email);
      comic = await fetchComic(comicId);
      showComic = true;
    } catch (err) {
      error = /** @type {Error} */ (err).message;
      console.error('Error fetching and displaying comic:', err);
    }
  }

  /**
   * Format the date to a readable string.
   * @param {string | number | Date} dateString
   * @returns {string}
   */
  function formattedDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  }

  /**
   * Format the date to a relative time string.
   * @param {string | number | Date} dateString
   * @returns {string}
   */
  function fromNowDate(dateString) {
    const date = new Date(dateString);
    return dayjs(date).fromNow();
  }

  let showComic = false;

  /**
   * Toggle the display of the comic.
   */
  function toggleComicDisplay() {
    if (!showComic) {
      fetchAndDisplayComic();
    } else {
      showComic = false;
    }
  }
</script>

<div class="wrapper">
  <button id="comicButton" on:click={toggleComicDisplay}>
    {#if showComic}
      Hide comic
    {:else}
      Show comics
    {/if}
  </button>
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
</div>

<style>
  .wrapper {
    width: 100%;
    height: 100%;
    min-height: 30vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  img {
    border-radius: 2%;
    width: 450px;
    height: 450px;
  }

  button {
    margin-top: 30px;
    padding: 10px 20px;
    background-color: #f3f4f6;
    border: 1px solid #d1d5db;
    border-radius: 5px;
    cursor: pointer;
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
