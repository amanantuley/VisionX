import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import type { Camera } from '@/lib/definitions';
import { placeholderImages } from '@/lib/placeholder-data';
import { ArrowRight } from 'lucide-react';

type CameraCardProps = {
  camera: Camera;
};

export function CameraCard({ camera }: CameraCardProps) {
  const image = placeholderImages.find((img) => img.id === camera.slug);

  return (
    <Card className="flex flex-col overflow-hidden h-full transition-all duration-300 hover:shadow-lg hover:border-primary/20">
      <CardHeader className="p-0">
        <Link href={`/products/${camera.slug}`} className="block aspect-[4/3] relative overflow-hidden">
          {image && (
            <Image
              src={image.imageUrl}
              alt={`Image of ${camera.name}`}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={image.imageHint}
            />
          )}
        </Link>
      </CardHeader>
      <CardContent className="p-6 flex-grow">
        <CardTitle className="font-headline text-xl mb-2">
            <Link href={`/products/${camera.slug}`} className="hover:text-primary/80 transition-colors">
                {camera.name}
            </Link>
        </CardTitle>
        <CardDescription>{camera.shortDescription}</CardDescription>
      </CardContent>
      <CardFooter className="p-6 pt-0">
        <Button asChild className="w-full">
          <Link href={`/products/${camera.slug}`}>
            View Details <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
