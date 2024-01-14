'use client';

import { useState, useEffect } from 'react';
import useDebounce from '@/hooks/useDebounce';
import searchWikipedia from '@/utils/searchWikipedia';
import type { SearchResult } from '@/utils/types';
import { setDefaultAutoSelectFamily } from 'net';

type Props = {};

const ArticleSearch = (props: Props) => {
  const [query, setQuery] = useState<string>('');
  const {
    debouncedValue: debouncedQuery,
    setInstantly: setDebouncedQueryInstantly,
  } = useDebounce(query, 200);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchResults = async () => {
      setLoading(true);
      setResults(await searchWikipedia(debouncedQuery));
      setLoading(false);
    };
    fetchResults();
  }, [debouncedQuery]);

  return (
    <div className='w-80 h-screen bg-gray-50'>
      <input
        type='text'
        value={query}
        placeholder='Search Wikipedia'
        onChange={(e) => setQuery(e.target.value)}
        className='w-full border border-gray-300'
      />
      {debouncedQuery && (
        <div className='w-[500px] py-2 border border-gray-300 flex flex-col bg-white'>
          {results.length || loading ? (
            results.map((result) => (
              <div key={result.title} className='py-2 px-4 flex gap-4'>
                {/*eslint-disable-next-line @next/next/no-img-element*/}
                <img
                  src={result.thumbnail?.url ?? '/wikipediaLogo.png'}
                  alt='thumbnail'
                  className='w-12 h-12 border object-contain object-center'
                />
                <div className='text-left'>
                  <h3 className='font-bold'>{result.title}</h3>
                  <p>{result.description}</p>
                </div>
                <div className='flex-grow'></div>
                <button
                  className='w-16 shrink-0 border border-gray-300 hover:bg-gray-100'
                  onClick={() => {
                    handleGoTo(result.id);
                  }}
                >
                  Go To
                </button>
                <button
                  className='w-16 shrink-0 border border-gray-300 hover:bg-gray-100'
                  onClick={() => {
                    handleAddToQueue(result.id);
                  }}
                >
                  Add to Queue
                </button>
              </div>
            ))
          ) : (
            <p>No results</p>
          )}
        </div>
      )}
    </div>
  );

  function clearSearch() {
    setQuery('');
    setDebouncedQueryInstantly('');
  }

  function handleAddToQueue(id: number) {
    clearSearch();
    console.log(id);
  }

  function handleGoTo(id: number) {
    clearSearch();
    console.log(id);
  }
};

export default ArticleSearch;
