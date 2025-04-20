import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <div
      className="flex w-screen flex-row justify-center items-center gap-4 p-4"
      style={{ backgroundColor: '#F7D6C5' }}
    >
      <Link
        href="https://www.instagram.com/biapennabarbosa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Instagram />
      </Link>
      <Link
        href="https://www.facebook.com/beatriz.penna.18"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Facebook />
      </Link>
      <Link href="" target="_blank" rel="noopener noreferrer">
        <Linkedin />
      </Link>
      <Link
        href="https://www.youtube.com/@biapenna8675"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Youtube />
      </Link>
    </div>
  );
}
