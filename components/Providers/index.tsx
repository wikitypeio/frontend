'use client';

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const index = ({ children }: Props) => {
  return <>{children}</>;
};

export default index;
