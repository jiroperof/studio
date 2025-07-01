
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { WhatsAppIcon } from '@/components/icons/whatsapp';

const navLinks = [
  { href: '/', label: 'Inicio' },
  { href: '/#services', label: 'Servicios' },
  { href: '/quote', label: 'Cotización' },
  { href: '/contact', label: 'Contacto' },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.png" alt="ICARO Technology Logo" width={32} height={32} className="h-8 w-8" />
          <span className="font-bold text-lg font-headline">ICARO TECHNOLOGY</span>
        </Link>
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                (pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href))) ? 'text-primary' : 'text-muted-foreground'
              )}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild variant="ghost" size="icon">
            <Link href="https://w.app/5yzvmg" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <WhatsAppIcon className="h-6 w-6 text-green-600" />
            </Link>
          </Button>
        </nav>
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Alternar menú de navegación</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="grid gap-4 py-6">
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <Image src="/logo.png" alt="ICARO Technology Logo" width={32} height={32} className="h-8 w-8" />
                  <span className="font-bold text-lg font-headline">ICARO TECHNOLOGY</span>
                </Link>
                {navLinks.map((link) => (
                   <SheetTrigger asChild key={link.href}>
                    <Link
                        href={link.href}
                        className="text-lg font-medium transition-colors hover:text-primary"
                    >
                        {link.label}
                    </Link>
                   </SheetTrigger>
                ))}
                 <SheetTrigger asChild>
                    <Link
                        href="https://w.app/5yzvmg"
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-lg font-medium transition-colors hover:text-primary"
                    >
                        <WhatsAppIcon className="h-6 w-6 text-green-600" />
                        WhatsApp
                    </Link>
                </SheetTrigger>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
