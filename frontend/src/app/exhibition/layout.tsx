import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="h-full">{children}</main>
      <Footer />
    </div>
  );
}
