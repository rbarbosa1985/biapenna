import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from '@/components/ui/card';
import Perfil from '@/assets/Live2.jpeg';
import Image from 'next/image';

export default function ExhibitionDetails() {
  return (
    <div className="flex p-3 w-full items-center justify-center">
      <Card className="p-4">
        <h1 className="font-bold">Exhibition Details</h1>
        <div className="flex flex-row">
          <Image alt="Obra" src={Perfil} className="flex w-2 h-2 rounded-md" />
          <div>
            <CardContent>
              <CardTitle>Titulo</CardTitle>
              <CardDescription>Nome do Artista</CardDescription>
              <CardDescription>Técnica: Técnica utilizada</CardDescription>
              <CardDescription>Dimensões: 12x30 cm </CardDescription>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  );
}
