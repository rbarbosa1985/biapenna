import Live1 from '@/assets/Live1.jpeg';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="p-10">
      <div
        className="flex flex-col items-center justify-center"
        style={{ height: 'calc(100vh - 300px)' }}
      >
        <Link href="/exhibition">
          <Image src={Live1} alt="Live1" className="flex w-auto h-auto mt-5" />
        </Link>
      </div>
    </div>
  );
}
