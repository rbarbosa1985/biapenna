import Link from 'next/link';
import { Avatar, AvatarImage } from '../ui/avatar';
import { Palette } from 'lucide-react';

export default function Header() {
  return (
    <div
      className="flex flex-row justify-around items-center py-4 px-8 shadow-lg"
      style={{ backgroundColor: '#F7D6C5' }}
    >
      <div className="flex flex-row ">
        <Link href="/" className="flex flex-row items-center">
          <Avatar>
            <AvatarImage
              src="https://yt3.googleusercontent.com/ytc/AIdro_kZnEiKxZfrqUuvvYHP1-5tm8UMqE6aav4M34eu8Il63Q=s160-c-k-c0x00ffffff-no-rj"
              alt="biapenna"
            />
          </Avatar>

          <h1 className="ml-2 font-bold">BiaPenna</h1>
        </Link>
      </div>
      <div className="flex flex-row gap-4 w-full justify-center">
        <Link href="/gallery">
          <h1 className="font-bold">Minha Galeria</h1>
        </Link>
        <Link href="/gallery">
          <h1 className="font-bold">Galeria de Alunos</h1>
        </Link>
        <Link href="/gallery">
          <h1 className="font-bold">Sobre</h1>
        </Link>
      </div>
      <Avatar>
        <AvatarImage
          src="https://yt3.googleusercontent.com/ytc/AIdro_kZnEiKxZfrqUuvvYHP1-5tm8UMqE6aav4M34eu8Il63Q=s160-c-k-c0x00ffffff-no-rj"
          alt="biapenna"
        />
      </Avatar>
    </div>
  );
}
