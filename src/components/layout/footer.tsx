import Link from 'next/link';
import { Camera } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Camera className="h-6 w-6" />
            <span className="font-bold text-lg">Alpha Vision</span>
          </div>
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link href="/products" className="hover:text-foreground">Products</Link>
            <Link href="/compare" className="hover:text-foreground">Compare</Link>
            <Link href="/about" className="hover:text-foreground">About</Link>
            <Link href="/contact" className="hover:text-foreground">Contact</Link>
          </nav>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Alpha Vision. All Rights Reserved.</p>
          <p className="mt-1">A demonstration website for Sony Cameras.</p>
        </div>
      </div>
    </footer>
  );
}
