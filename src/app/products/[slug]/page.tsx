import { getCameraBySlug } from '@/lib/data';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { placeholderImages } from '@/lib/placeholder-data';
import { CheckCircle } from 'lucide-react';

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  const cameras = getCameraBySlug(''); // In a real app, this would be `getCameras()`
  if (!cameras) return [];
  
  return [{ slug: 'sony-alpha-a7-iv' }, { slug: 'sony-alpha-a6400' }, { slug: 'sony-alpha-a6700' }, { slug: 'sony-fx30' }, { slug: 'sony-zv-e10' }, { slug: 'sony-alpha-1' }, { slug: 'sony-alpha-7r-v' }];
}

export default function ProductDetailPage({ params }: Props) {
  const camera = getCameraBySlug(params.slug);
  const imageSet = placeholderImages.find((img) => img.id === params.slug);

  if (!camera) {
    notFound();
  }

  const specs = [
    { label: 'Sensor', value: camera.specs.sensor },
    { label: 'Megapixels', value: camera.specs.megapixels },
    { label: 'ISO Range', value: camera.specs.iso },
    { label: 'Video Capabilities', value: camera.specs.video },
    { label: 'Autofocus', value: camera.specs.autofocus },
    { label: 'Connectivity', value: camera.specs.connectivity },
  ];

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="grid lg:grid-cols-2 gap-12">
        <div>
          <Carousel className="w-full">
            <CarouselContent>
              {imageSet?.gallery.map((image, index) => (
                <CarouselItem key={index}>
                  <Card className="overflow-hidden">
                    <CardContent className="p-0 aspect-[4/3] relative">
                      <Image
                        src={image.imageUrl}
                        alt={`Image ${index + 1} of ${camera.name}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        data-ai-hint={image.imageHint}
                      />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-16" />
            <CarouselNext className="mr-16" />
          </Carousel>
        </div>
        <div>
          <h1 className="font-headline text-4xl md:text-5xl font-bold">{camera.name}</h1>
          <p className="mt-4 text-lg text-muted-foreground">{camera.shortDescription}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {camera.bestFor.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>

          <div className="mt-8 text-3xl font-bold font-headline">${camera.price.toLocaleString()}</div>
          
          <div className="mt-8 space-y-4">
            <Button size="lg" className="w-full" asChild>
                <Link href={`/contact?camera=${encodeURIComponent(camera.name)}`}>
                    Enquire / Contact
                </Link>
            </Button>
            <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/compare">
                    Compare with other models
                </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline text-2xl">Technical Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableBody>
                {specs.map((spec) => (
                  <TableRow key={spec.label}>
                    <TableCell className="font-medium w-1/3">{spec.label}</TableCell>
                    <TableCell>{spec.value}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
