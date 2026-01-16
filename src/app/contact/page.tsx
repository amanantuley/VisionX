import { Suspense } from 'react';
import { ContactForm } from '@/components/contact-form';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';

function ContactFormSkeleton() {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="space-y-6">
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-10 w-full" />
          </div>
          <div className="space-y-2">
            <Skeleton className="h-4 w-1/4" />
            <Skeleton className="h-24 w-full" />
          </div>
          <Skeleton className="h-11 w-full" />
        </div>
      </CardContent>
    </Card>
  );
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-headline font-bold">Contact Us</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Have a question about a product or need assistance? Fill out the form below and we'll get back to you.
          </p>
        </div>
        <Suspense fallback={<ContactFormSkeleton />}>
          <ContactForm />
        </Suspense>
      </div>
    </div>
  );
}
