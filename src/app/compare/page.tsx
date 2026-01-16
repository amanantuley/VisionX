'use client';

import { useState } from 'react';
import { getCameras, getCameraById } from '@/lib/data';
import type { Camera } from '@/lib/definitions';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ComparisonTable } from '@/components/comparison-table';

export default function ComparePage() {
  const allCameras = getCameras();
  const [selectedIds, setSelectedIds] = useState<(string | null)[]>([allCameras[0]?.id || null, allCameras[1]?.id || null]);

  const handleSelectChange = (index: number, value: string) => {
    const newSelectedIds = [...selectedIds];
    newSelectedIds[index] = value;
    setSelectedIds(newSelectedIds);
  };

  const selectedCameras = selectedIds
    .map(id => id ? getCameraById(id) : null)
    .filter((c): c is Camera => c !== null);

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">Compare Cameras</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Select up to two cameras to compare their specifications side-by-side.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-4xl mx-auto">
        {[0, 1].map(index => (
          <div key={index}>
            <h3 className="text-center font-semibold mb-2">Camera {index + 1}</h3>
            <Select
              value={selectedIds[index] ?? ''}
              onValueChange={(value) => handleSelectChange(index, value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a camera" />
              </SelectTrigger>
              <SelectContent>
                {allCameras.map(camera => (
                  <SelectItem key={camera.id} value={camera.id}>
                    {camera.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        ))}
      </div>

      {selectedCameras.length > 0 && (
        <ComparisonTable cameras={selectedCameras} />
      )}
    </div>
  );
}
