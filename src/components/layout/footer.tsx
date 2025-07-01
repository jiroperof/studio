
import Link from 'next/link';
import { Twitter, Linkedin, Facebook } from 'lucide-react';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto max-w-7xl px-4 py-8 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="ICARO Technology Logo" width={28} height={28} className="h-7 w-7" />
            <span className="font-bold text-lg font-headline">ICARO TECHNOLOGY</span>
          </div>
          <p className="text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} ICARO TECHNOLOGY. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" aria-label="Twitter">
              <Twitter className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="LinkedIn">
              <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
            <Link href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5 hover:text-primary transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
