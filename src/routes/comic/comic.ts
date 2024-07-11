import fetch from 'node-fetch';
import Comic from '$lib/components/Comic.svelte';

export interface Comic {
	title: string;
	safeTitle: string;
	img: string;
	alt: string;
	year: number;
	month: number;
	day: number;
}

export async function fetchComicId(email: string): Promise<string> {
	const params = new URLSearchParams({ email });
	const response = await fetch(`https://fwd.innopolis.university/api/hw2?${params}`);
	if (!response.ok) {
		throw new Error('Failed to fetch comic ID');
	}
	return response.text();
}

export async function fetchComic(id: string): Promise<Comic> {
	const params = new URLSearchParams({ id });
	const response = await fetch(`https://fwd.innopolis.university/api/comic?${params}`);
	if (!response.ok) {
		throw new Error('Failed to fetch comic');
	}

	const data = await response.json();
	return {
		title: data.title,
		safeTitle: data.safe_title,
		img: data.img,
		alt: data.alt,
		year: parseInt(data.year, 10),
		month: parseInt(data.month, 10),
		day: parseInt(data.day, 10)
	};
}
