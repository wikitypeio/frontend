'use client';

import { useState, useEffect } from 'react';
import useDebounce from '@/hooks/useDebounce';
import searchWikipedia from '@/utils/searchWikipedia';
import type { SearchResult } from '@/utils/types';

type Props = {};

const ArticleSearch = (props: Props) => {
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce(query, 500);
  const [results, setResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    const fetchResults = async () => {
      setResults(await searchWikipedia(debouncedQuery));
    };
    fetchResults();
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type='text'
        className='border border-slate-400'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div>
        {results.map((result) => (
          <div key={result.title}>{result.title}</div>
        ))}
      </div>
    </div>
  );
};

export default ArticleSearch;
