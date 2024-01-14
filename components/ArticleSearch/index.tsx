'use client';

import { useState, useEffect } from 'react';
import useDebounce from '@/hooks/useDebounce';
import searchWikipedia from '@/utils/searchWikipedia';
import type { SearchResult } from '@/utils/types';

type Props = {};

const ArticleSearch = (props: Props) => {
  const [query, setQuery] = useState<string>('');
  const debouncedQuery = useDebounce(query, 200);
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
      {results.length !== 0 && (
        <div className='bg-white border absolute py-2 flex flex-col'>
          {results.map((result) => (
            <button
              className='py-2 px-4 flex gap-4 hover:bg-gray-100'
              key={result.title}
            >
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img
                className='w-12 h-12 border object-contain'
                src={result.thumbnail?.url ?? '/wikipediaLogo.png'}
                alt='thumbnail'
              />
              <div className='text-left'>
                <h3 className='font-bold'>{result.title}</h3>
                <p>{result.description}</p>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default ArticleSearch;
