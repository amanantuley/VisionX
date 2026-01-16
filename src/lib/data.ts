import { cameras } from '@/lib/placeholder-data';
import type { Camera } from '@/lib/definitions';

export function getCameras(): Camera[] {
  return cameras;
}

export function getCameraBySlug(slug: string): Camera | undefined {
  return cameras.find((camera) => camera.slug === slug);
}

export function getCameraById(id: string): Camera | undefined {
  return cameras.find((camera) => camera.id === id);
}
