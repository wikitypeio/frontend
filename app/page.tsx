import type { Metadata } from 'next';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'WikiType',
  description:
    'A minimalist typing game for learning about any topic on Wikipedia.',
};

export default function Home() {
  return (
    <div>
      <Sidebar />
    </div>
  );
}
