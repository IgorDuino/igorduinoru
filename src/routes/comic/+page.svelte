<script lang="ts">
	import { onMount } from 'svelte';
	import Comic from '$lib/components/Comic.svelte';
	import type { Comic as ComicType } from './comic';

	export let data: { comic: ComicType };

	let comic: ComicType;

	onMount(() => {
		comic = data.comic;
	});
</script>

{#if comic}
	<Comic {comic} />
{:else}
	<p>Loading comic...</p>
{/if}
