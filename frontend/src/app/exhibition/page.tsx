import Pagination from '@/components/Pagination';
import { PictureCard } from '@/components/PictureCard';
import Link from 'next/link';

export default function Exhibition() {
  return (
    <div className="p-3 h-full">
      <div className="grid grid-cols-1 md:grid-cols-5 mb-2">
        <Link href="/exhibition/1">
          <PictureCard />
        </Link>
        <Link href="/exhibition/2">
          <PictureCard />
        </Link>
        <Link href="/exhibition/3">
          <PictureCard />
        </Link>
        <Link href="/exhibition/4">
          <PictureCard />
        </Link>
        <Link href="/exhibition/5">
          <PictureCard />
        </Link>
        <Link href="/exhibition/6">
          <PictureCard />
        </Link>
        <Link href="/exhibition/7">
          <PictureCard />
        </Link>
        <Link href="/exhibition/8">
          <PictureCard />
        </Link>
      </div>
      <Pagination />
    </div>
  );
}
