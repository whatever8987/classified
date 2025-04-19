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
        <header className="bg-secondary text-secondary-foreground py-4">
          <div className="container mx-auto flex justify-between items-center">
            <div>
              <a href="/" className="text-xl font-bold">Zenith Spa Directory</a>
            </div>
            <div>
              <span>Contact Us:</span>
              <a href="mailto:info@zenithspa.com" className="ml-2">info@zenithspa.com</a>
            </div>
          </div>
        </header>
        {children}
        <Footer />
      </body>
    </html>
  );
}

