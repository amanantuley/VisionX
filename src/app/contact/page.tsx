import { ContactForm } from '@/components/contact-form';

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
        <ContactForm />
      </div>
    </div>
  );
}
