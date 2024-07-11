import type { PageServerLoad, Actions } from './$types';
import { fetchComicId, fetchComic, type Comic } from './comic';
import { fail } from '@sveltejs/kit';

export const load = (async () => {
	const email = 'i.kuzmenkov@innopolis.university';

	try {
		const comicId: string = await fetchComicId(email);
		const comic: Comic = await fetchComic(comicId);

		return {
			comic: comic
		};
	} catch (error) {
		console.error('Error fetching comic data:', error);
		return fail(500, { error: 'Failed to load comic' });
	}
}) satisfies PageServerLoad;

export const actions = {
	fetchComic: async () => {
		const email = 'i.kuzmenkov@innopolis.university';

		try {
			const comicId = await fetchComicId(email);
			const comic = await fetchComic(comicId);
			const serializeNonPOJOs = (value: object | null) => {
				return structuredClone(value);
			};

			return {
				comic: serializeNonPOJOs(comic)
			};
		} catch (error) {
			console.error('Error fetching comic data:', error);
			return fail(500, { error: 'Failed to fetch comic' });
		}
	}
} satisfies Actions;
