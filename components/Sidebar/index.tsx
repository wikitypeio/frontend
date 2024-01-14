'use client';

import ArticleSearch from '@/components/ArticleSearch';
import Queue from '@/components/Queue';

type Props = {};
const Sidebar = (props: Props) => {
  return (
    <div className='w-80 h-screen p-4 bg-gray-50 border-r border-gray-300'>
      <h1 className='pb-8 text-2xl font-bold'>WikiType</h1>
      <ArticleSearch />
      <div className='h-4'></div>
      <Queue />
    </div>
  );
};

export default Sidebar;
