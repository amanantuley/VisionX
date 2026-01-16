'use client';

import { useState } from 'react';
import { useForm, type SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

import {
  cameraModelRecommendation,
  type CameraModelRecommendationOutput,
} from '@/ai/flows/camera-model-recommendation';

import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Loader2, Wand2 } from 'lucide-react';

const formSchema = z.object({
  photographyNeeds: z.string().min(10, {
    message: 'Please describe your needs in at least 10 characters.',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export function RecommendationForm() {
  const [recommendation, setRecommendation] = useState<CameraModelRecommendationOutput | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      photographyNeeds: '',
    },
  });

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    setIsLoading(true);
    setError(null);
    setRecommendation(null);
    try {
      const result = await cameraModelRecommendation(data);
      setRecommendation(result);
    } catch (e) {
      setError('An error occurred while getting your recommendation. Please try again.');
      console.error(e);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-6">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="photographyNeeds"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-lg">What are you looking for?</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="e.g., 'I need a camera for vlogging and travel photography with great autofocus' or 'professional wildlife photography'."
                      className="min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Getting Recommendation...
                </>
              ) : (
                <>
                  <Wand2 className="mr-2 h-4 w-4" />
                  Get AI Recommendation
                </>
              )}
            </Button>
          </form>
        </Form>
        
        {error && <p className="mt-4 text-center text-destructive">{error}</p>}
        
        {recommendation && (
          <div className="mt-8 pt-8 border-t">
            <h3 className="text-2xl font-headline font-semibold text-center mb-4">Our Recommendation For You</h3>
            <Card className="bg-secondary">
                <CardHeader>
                    <CardTitle className="font-headline text-2xl">{recommendation.recommendedModel}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{recommendation.reason}</p>
                </CardContent>
            </Card>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
