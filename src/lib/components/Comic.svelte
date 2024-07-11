<script context="module">
	export const ssr = true;
</script>

<script>
	export let comic = null;
	export let error = null;

	import dayjs from 'dayjs';
	import relativeTime from 'dayjs/plugin/relativeTime';

	dayjs.extend(relativeTime);

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
</script>

<div class="wrapper">
	{#if comic}
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
