'use client';

import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    const getData = async () => {
      const res = await fetch('http://localhost:8080');
      const json = await res.json();
      console.log(json);
    };
    getData();
  });
  return <div></div>;
}
