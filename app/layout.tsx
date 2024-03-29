import type { Metadata } from 'next';
import { Inter, Nunito } from 'next/font/google';
import './globals.css';
import Navbar from './components/navbar/Navbar';

const font = Nunito({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'AirBnB',
  description: 'AirBnB 2024 is the future of travel and hospitality.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
