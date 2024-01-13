import setSearchParams from '@/utils/setSearchParams';

import type { SearchResult } from '@/utils/types';

const LIMIT = 10;

const SEARCH_PATH = new URL(
  'https://en.wikipedia.org/w/rest.php/v1/search/title'
);

const searchWikipedia = async (query: string) => {
  try {
    if (!query) throw 'No query';

    const url = new URL(SEARCH_PATH);
    setSearchParams(url, { q: query, limit: LIMIT });

    const res = await fetch(url);
    if (!res.ok) throw res.status;
    const { pages: results }: { pages: SearchResult[] } = await res.json();

    return results;
  } catch {
    return [];
  }
};

export default searchWikipedia;
