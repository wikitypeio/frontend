'use client';

import ArticleSearch from '@/components/ArticleSearch';

type Props = {};
const Sidebar = (props: Props) => {
  return (
    <div className='w-80 h-screen'>
      <ArticleSearch />
    </div>
  );
};

export default Sidebar;
