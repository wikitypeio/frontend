import setSearchParams from '@/utils/setSearchParams';

type SearchResult = {
  description: string;
  id: number;
  thumbnail: { url: string };
  title: string;
};

const LIMIT = 10;

const SEARCH_PATH = new URL(
  'https://en.wikipedia.org/w/rest.php/v1/search/title'
);

const searchWikipedia = async (query: string) => {
  try {
    const url = new URL(SEARCH_PATH);
    setSearchParams(url, { q: query, limit: LIMIT });

    const res = await fetch(url);
    if (!res.ok) throw res.status;
    const results: SearchResult = await res.json();

    return results;
  } catch {
    return null;
  }
};

export default searchWikipedia;
