import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import Perfil from '@/assets/Live2.jpeg';

export function PictureCard() {
  return (
    <Card className="m-2">
      <CardHeader className="flex flex-col justify-center items-center">
        <CardTitle>Nome do Artista</CardTitle>
        <CardDescription>Nome da Obra</CardDescription>
      </CardHeader>
      <CardContent className="flex justify-center">
        <Image
          alt="Nome da Obra"
          src={Perfil}
          className="max-w-40 max-h-40 rounded-md"
        />
      </CardContent>
      <CardFooter className="flex flex-col justify-center items-center">
        <CardDescription className="text-center">
          Técnica: Nome da técnica
        </CardDescription>
        <CardDescription className="text-center">
          Dimensões: 21 x 14,8 cm
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
