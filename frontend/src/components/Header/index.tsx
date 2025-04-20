import Link from 'next/link';

import { Avatar, AvatarImage } from '../ui/avatar';

export default function Header() {
  return (
    <div
      className="grid grid-cols5 items-center pt-4 pb-2 px-8 shadow-lg"
      style={{ backgroundColor: '#F7D6C5' }}
    >
      <div className="flex flex-row col-start-1">
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
      <div className="col-span-3 col-start-2 flex flex-row justify-center items-center">
        <div className="flex flex-row w-full gap-10 justify-center">
          <Link href="/gallery">
            <h1 className="font-bold">Minha Galeria</h1>
          </Link>
          <Link href="/gallery">
            <h1 className="font-bold">Galeria de Alunos</h1>
          </Link>
          <Link href="/gallery">
            <h1 className="font-bold">Galeria de Alunos</h1>
          </Link>
          <Link href="/gallery">
            <h1 className="font-bold">Sobre</h1>
          </Link>
        </div>
      </div>
      <div className="col-start-5 flex flex-row justify-end items-center">
        <p className="font-bold mr-3">Roberto Barbosa</p>
        <Avatar>
          <AvatarImage
            src="https://yt3.googleusercontent.com/ytc/AIdro_kZnEiKxZfrqUuvvYHP1-5tm8UMqE6aav4M34eu8Il63Q=s160-c-k-c0x00ffffff-no-rj"
            alt="biapenna"
          />
        </Avatar>
      </div>
    </div>
  );
}
