import Image from 'next/image';
import { placeholderImages } from '@/lib/placeholder-data';

export default function AboutPage() {
  const sensorImage = placeholderImages.find(img => img.id === 'about-1');
  const afImage = placeholderImages.find(img => img.id === 'about-2');

  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">The Art of Imaging</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            A legacy of innovation, from the sensor to the final image.
          </p>
        </div>

        <div className="space-y-16">
          <section>
            <h2 className="text-3xl font-headline font-semibold mb-4">A Brief History of Sony Imaging</h2>
            <p className="text-muted-foreground leading-relaxed">
              Sony's journey in digital imaging began with a relentless pursuit of quality and innovation. From the iconic Mavica in the 1980s to the game-changing Alpha series, Sony has consistently pushed the boundaries of what's possible. Our commitment to developing key technologies in-house—including sensors, image processors, and lenses—has allowed us to create cameras that are not just tools, but extensions of a creator's vision.
            </p>
          </section>

          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-headline font-semibold mb-4">The Power of the Sensor</h2>
              <p className="text-muted-foreground leading-relaxed">
                At the heart of every Sony camera is a state-of-the-art image sensor. As the world's leading sensor manufacturer, we pour decades of expertise into creating full-frame and APS-C sensors that deliver breathtaking dynamic range, low noise, and incredible detail. Our Exmor R™ and Exmor RS™ CMOS sensors are the foundation of the image quality that defines the Sony Alpha experience.
              </p>
            </div>
            {sensorImage && (
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image 
                  src={sensorImage.imageUrl} 
                  alt={sensorImage.description} 
                  fill 
                  className="object-cover" 
                  data-ai-hint={sensorImage.imageHint}
                />
              </div>
            )}
          </section>

          <section className="grid md:grid-cols-2 gap-8 items-center">
            <div className="md:order-2">
              <h2 className="text-3xl font-headline font-semibold mb-4">Revolutionary Autofocus</h2>
              <p className="text-muted-foreground leading-relaxed">
                Never miss a moment with Sony's industry-leading autofocus technology. Our Fast Hybrid AF systems combine the speed of phase-detection with the accuracy of contrast-detection. With the advent of our AI processing unit, Real-time Recognition AF can now track subjects—from human eyes to animals, birds, and vehicles—with astonishing precision, freeing you to focus on composition and creativity.
              </p>
            </div>
            {afImage && (
              <div className="aspect-video relative rounded-lg overflow-hidden md:order-1">
                <Image 
                  src={afImage.imageUrl} 
                  alt={afImage.description} 
                  fill 
                  className="object-cover" 
                  data-ai-hint={afImage.imageHint}
                />
              </div>
            )}
          </section>

          <section>
            <h2 className="text-3xl font-headline font-semibold mb-4">Alpha & Cinema Line: Tools for Every Creator</h2>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a photographer, a videographer, or a hybrid creator, there's a Sony camera for you. The **Alpha series** offers the ultimate in hybrid performance, blending high-resolution stills with professional video features in compact bodies. The **Cinema Line**, including cameras like the FX30, brings the coveted cinematic look of Sony's professional cinema cameras to a new generation of filmmakers, offering features like S-Cinetone and flexible post-production workflows.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
