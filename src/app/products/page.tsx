import { getCameras } from '@/lib/data';
import { CameraCard } from '@/components/camera-card';

export default function ProductsPage() {
  const cameras = getCameras();

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-headline font-bold">All Cameras</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover our full range of Sony cameras, each designed to deliver exceptional performance and image quality.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {cameras.map((camera, index) => (
           <div
            key={camera.id}
            className="animate-fade-in-up"
            style={{ animationFillMode: 'forwards', animationDelay: `${index * 100}ms`, opacity: 0 }}
          >
            <CameraCard camera={camera} />
          </div>
        ))}
      </div>
    </div>
  );
}
