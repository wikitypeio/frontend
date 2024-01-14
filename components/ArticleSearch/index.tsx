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
    <div className='w-full'>
      <input
        type='text'
        value={query}
        placeholder='Search Wikipedia'
        onChange={(e) => setQuery(e.target.value)}
        className='w-full p-1 border border-gray-300 relative z-[11] focus:outline-none focus:border-blue-500'
      />
      {debouncedQuery && (
        <>
          <div className='w-[500px] max-h-[80vh] py-2 border border-gray-300 flex flex-col bg-white overflow-scroll absolute z-[11]'>
            {results.length || loading ? (
              results.map((result) => (
                <div key={result.title} className='py-2 px-4 flex gap-4'>
                  {/*eslint-disable-next-line @next/next/no-img-element*/}
                  <img
                    src={result.thumbnail?.url ?? '/wikipediaLogo.png'}
                    alt='thumbnail'
                    className='w-12 h-12 shrink-0 border object-contain object-center'
                  />
                  <div className='text-left'>
                    <h3 className='font-bold'>{result.title}</h3>
                    <p className='text-gray-600'>{result.description}</p>
                  </div>
                  <div className='flex-grow'></div>
                  <button
                    className='w-16 h-16 shrink-0 border border-gray-300 hover:bg-gray-100'
                    onClick={() => {
                      handleGoTo(result.id);
                    }}
                  >
                    Go To
                  </button>
                  <button
                    className='w-16 h-16 shrink-0 border border-gray-300 hover:bg-gray-100'
                    onClick={() => {
                      handleAddToQueue(result.id);
                    }}
                  >
                    Add to Queue
                  </button>
                </div>
              ))
            ) : (
              <p className='py-2 px-4 text-gray-600'>No results</p>
            )}
          </div>
          <div
            onClick={clearSearch}
            className='bg-black opacity-10 w-screen h-screen fixed top-0 left-0 z-10'
          ></div>
        </>
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
