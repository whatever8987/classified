
import type {Metadata} from 'next';
import './globals.css';
import {Footer} from '@/components/footer';

export const metadata: Metadata = {
  title: 'Zenith Spa Directory',
  description: 'Find the best spas in your area.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
