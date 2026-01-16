import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { placeholderImages } from '@/lib/placeholder-data';
import { getCameras } from '@/lib/data';
import { CameraCard } from '@/components/camera-card';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const heroImage = placeholderImages.find((img) => img.id === 'hero-banner');
  const featuredCameras = getCameras().slice(0, 3);

  return (
    <div className="flex flex-col">
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-center text-white">
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
        <div className="relative z-10 max-w-4xl p-4">
          <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold">
            Capture the Future
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto">
            Experience unparalleled innovation with Sony's Alpha series. From groundbreaking mirrorless technology to industry-leading performance, find the perfect camera to bring your vision to life.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/products">Explore Cameras</Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/compare">Compare Models</Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="featured-products" className="py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-3xl md:text-4xl font-headline font-bold">Featured Cameras</h2>
            <Button asChild variant="link" className="text-base">
               <Link href="/products">
                View All <ArrowRight className="ml-2 h-4 w-4" />
               </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCameras.map((camera, index) => (
              <div
                key={camera.id}
                className="animate-fade-in-up"
                style={{ animationFillMode: 'forwards', animationDelay: `${200 + index * 150}ms`, opacity: 0 }}
              >
                <CameraCard camera={camera} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
