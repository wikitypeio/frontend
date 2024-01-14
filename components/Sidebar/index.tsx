'use client';

import ArticleSearch from '@/components/ArticleSearch';

type Props = {};
const Sidebar = (props: Props) => {
  return (
    <div className='w-80 h-screen bg-gray-50 border-r border-gray-300'>
      <h1 className='p-4 text-2xl font-bold'>WikiType</h1>
      <ArticleSearch />
    </div>
  );
};

export default Sidebar;
