'use server';
/**
 * @fileOverview This file defines a Genkit flow for recommending Sony camera models based on user needs.
 *
 * It includes the following:
 * - `cameraModelRecommendation`: An asynchronous function that takes user needs as input and returns a camera recommendation.
 * - `CameraModelRecommendationInput`: The input type for the `cameraModelRecommendation` function.
 * - `CameraModelRecommendationOutput`: The output type for the `cameraModelRecommendation` function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const CameraModelRecommendationInputSchema = z.object({
  photographyNeeds: z
    .string()
    .describe(
      'A description of the users photography needs (e.g., portrait, landscape, vlogging).'
    ),
});

export type CameraModelRecommendationInput =
  z.infer<typeof CameraModelRecommendationInputSchema>;

const CameraModelRecommendationOutputSchema = z.object({
  recommendedModel: z
    .string()
    .describe('The name of the recommended Sony camera model.'),
  reason: z
    .string()
    .describe(
      'The reason why this model is recommended for the specified needs.'
    ),
});

export type CameraModelRecommendationOutput =
  z.infer<typeof CameraModelRecommendationOutputSchema>;

export async function cameraModelRecommendation(
  input: CameraModelRecommendationInput
): Promise<CameraModelRecommendationOutput> {
  return cameraModelRecommendationFlow(input);
}

const prompt = ai.definePrompt({
  name: 'cameraModelRecommendationPrompt',
  input: {schema: CameraModelRecommendationInputSchema},
  output: {schema: CameraModelRecommendationOutputSchema},
  prompt: `You are an expert in Sony cameras. Based on the user's photography needs, recommend the best Sony camera model and explain why it is suitable.

User Needs: {{{photographyNeeds}}}

Give the output in JSON format. Be brief and concise.
`,
});

const cameraModelRecommendationFlow = ai.defineFlow(
  {
    name: 'cameraModelRecommendationFlow',
    inputSchema: CameraModelRecommendationInputSchema,
    outputSchema: CameraModelRecommendationOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
