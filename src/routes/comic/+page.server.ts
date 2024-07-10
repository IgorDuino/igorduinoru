import type { PageServerLoad } from '@sveltejs/kit';

async function fetchComicId(email: string): Promise<string> {
  const params = new URLSearchParams({ email });
  const response = await fetch(`https://fwd.innopolis.university/api/hw2?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch comic ID');
  }
  return response.text();
}

async function fetchComic(id: string): Promise<{ title: string; img: string; alt: string; year: number; month: number; day: number; }> {
  const params = new URLSearchParams({ id });
  const response = await fetch(`https://fwd.innopolis.university/api/comic?${params}`);
  if (!response.ok) {
    throw new Error('Failed to fetch comic');
  }
  return response.json();
}


export const load: PageServerLoad = async ({url, fetch}) => {
  const email = 'i.kuzmenkov@innopolis.university';
  let comic: { title: string; img: string; alt: string; year: number; month: number; day: number; } | null = null;

  const comicId = await fetchComicId(email);
  comic = await fetchComic(comicId);
  
  return {
    comic
  };

}