'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const frameCount = 240;
const getFramePath = (frame: number) => `/sequence/ezgif-frame-${String(frame).padStart(3, '0')}.jpg`;

const HeroContent = ({ isVisible }: { isVisible: boolean }) => (
    <div className={cn(
        "relative z-10 max-w-4xl p-4 text-center text-white transition-opacity duration-700",
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
    )}>
        <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold drop-shadow-lg">
            Capture the Future
        </h1>
        <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/90 max-w-3xl mx-auto drop-shadow-md">
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
);


export function HeroSequence() {
  const [frame, setFrame] = useState(1);
  const sequenceContainerRef = useRef<HTMLDivElement>(null);
  const [images, setImages] = useState<string[]>([]);

  // Generate image paths and preload a portion of them
  useEffect(() => {
    const newImages = [];
    for (let i = 1; i <= frameCount; i++) {
        const path = getFramePath(i);
        newImages.push(path);
    }
    setImages(newImages);

    // Preload the first few images to ensure a smooth start
    const imagesToPreload = newImages.slice(0, 60);
    imagesToPreload.forEach(src => {
        const img = new (window as any).Image();
        img.src = src;
    });
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const el = sequenceContainerRef.current;
      if (!el) return;

      const { top, height } = el.getBoundingClientRect();
      const scrollableHeight = height - window.innerHeight;
      
      let newFrame;
      if (top > 0) {
        newFrame = 1;
      } else if (top < -scrollableHeight) {
        newFrame = frameCount;
      } else {
        const scrollFraction = Math.abs(top) / scrollableHeight;
        newFrame = Math.max(1, Math.min(frameCount, Math.floor(scrollFraction * frameCount) + 1));
      }
      
      requestAnimationFrame(() => {
          setFrame(newFrame);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={sequenceContainerRef} className="relative h-[300vh] w-full bg-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <Image
          src={images[frame - 1] || getFramePath(1)}
          alt="Sony Alpha Camera Animation"
          fill
          className="object-cover w-full h-full"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <HeroContent isVisible={frame < 90} />
      </div>
    </div>
  );
}
