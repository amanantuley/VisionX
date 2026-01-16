import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { getCameras } from '@/lib/data';
import { CameraCard } from '@/components/camera-card';
import { ArrowRight } from 'lucide-react';
import { HeroSequence } from '@/components/hero-sequence';

export default function Home() {
  const featuredCameras = getCameras().slice(0, 3);

  return (
    <div className="flex flex-col">
      <HeroSequence />

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
