import type { Camera } from '@/lib/definitions';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-data';
import Link from 'next/link';

interface ComparisonTableProps {
  cameras: Camera[];
}

export function ComparisonTable({ cameras }: ComparisonTableProps) {
  const specsOrder: (keyof Camera['specs'])[] = [
    'sensor',
    'megapixels',
    'iso',
    'video',
    'autofocus',
    'connectivity',
  ];
  const specLabels: Record<keyof Camera['specs'], string> = {
    sensor: 'Sensor',
    megapixels: 'Megapixels',
    iso: 'ISO Range',
    video: 'Video Capabilities',
    autofocus: 'Autofocus',
    connectivity: 'Connectivity',
  };

  return (
    <Card>
      <CardContent className="p-0">
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-1/4 font-headline text-lg">Feature</TableHead>
                {cameras.map(camera => {
                   const image = placeholderImages.find(img => img.id === camera.slug);
                   return (
                    <TableHead key={camera.id} className="text-center w-3/8">
                        <Link href={`/products/${camera.slug}`} className="flex flex-col items-center gap-2 group">
                            {image && (
                                <div className="relative w-48 h-36 rounded-md overflow-hidden">
                                <Image 
                                    src={image.imageUrl} 
                                    alt={camera.name}
                                    fill
                                    className="object-cover"
                                    data-ai-hint={image.imageHint}
                                />
                                </div>
                            )}
                            <span className="font-headline text-base group-hover:text-primary transition-colors">{camera.name}</span>
                        </Link>
                    </TableHead>
                )})}
              </TableRow>
            </TableHeader>
            <TableBody>
              {specsOrder.map(specKey => (
                <TableRow key={specKey}>
                  <TableCell className="font-semibold">{specLabels[specKey]}</TableCell>
                  {cameras.map(camera => (
                    <TableCell key={`${camera.id}-${specKey}`} className="text-center">
                      {camera.specs[specKey]}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="font-semibold">Best For</TableCell>
                {cameras.map(camera => (
                  <TableCell key={`${camera.id}-bestFor`} className="text-center">
                    <div className="flex flex-wrap justify-center gap-1">
                      {camera.bestFor.map(tag => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                    </div>
                  </TableCell>
                </TableRow>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Price</TableCell>
                {cameras.map(camera => (
                    <TableCell key={`${camera.id}-price`} className="text-center font-bold text-lg">
                        ${camera.price.toLocaleString()}
                    </TableCell>
                ))}
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
}
