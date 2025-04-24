import Pagination from '@/components/Pagination';
import { PictureCard } from '@/components/PictureCard';
import Link from 'next/link';

export default function Exhibition() {
  return (
    <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-5 mb-10">
        <Link href="/gallery/1">
          <PictureCard />
        </Link>
        <Link href="/gallery/2">
          <PictureCard />
        </Link>
        <Link href="/gallery/3">
          <PictureCard />
        </Link>
        <Link href="/gallery/4">
          <PictureCard />
        </Link>
        <Link href="/gallery/5">
          <PictureCard />
        </Link>
        <Link href="/gallery/6">
          <PictureCard />
        </Link>
        <Link href="/gallery/7">
          <PictureCard />
        </Link>
        <Link href="/gallery/8">
          <PictureCard />
        </Link>
      </div>
      <Pagination />
    </div>
  );
}
