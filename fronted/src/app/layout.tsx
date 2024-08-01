import './globals.css';
import NavBar from '@/components/NavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        <main className="container mx-auto mt-6">
          {children}
        </main>
      </body>
    </html>
  );
}
