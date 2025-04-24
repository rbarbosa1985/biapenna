import Live1 from '@/assets/home.jpg';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="grid grid-cols-2 h-fit">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-center mt-8">
          Bem-vindo ao meu portfólio!
        </h1>
        <p className="text-center mt-4">
          Aqui você encontrará uma seleção dos meus melhores trabalhos e
          projetos.
        </p>
      </div>
      <div className="p-4 flex flex-col justify-center items-center">
        <Image
          src={Live1}
          alt="BiaPenna"
          className="rounded-full scale-[0.6] "
        />
      </div>
    </div>
  );
}
