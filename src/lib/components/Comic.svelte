<script lang="ts">
	interface Comic {
		title: string;
		safeTitle: string;
		img: string;
		alt: string;
		year: number;
		month: number;
		day: number;
	}

	export let comic: Comic;
</script>

<article>
	<h1>{comic.title}</h1>
	<h2>{comic.safeTitle}</h2>
	<img src={comic.img} alt={comic.alt} />
	<p>{comic.alt}</p>
	<footer>
		<p>Published on: {comic.year}-{comic.month}-{comic.day}</p>
	</footer>
</article>

<style>
	article {
		text-align: center;
	}

	img {
		max-width: 100%;
		height: auto;
	}
</style>
