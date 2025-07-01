'use server';

/**
 * @fileOverview This file defines a Genkit flow for estimating the price range of IT services.
 *
 * - estimatePriceRange - A function that takes a service request and returns an estimated price range.
 * - EstimatePriceRangeInput - The input type for the estimatePriceRange function.
 * - EstimatePriceRangeOutput - The return type for the estimatePriceRange function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const EstimatePriceRangeInputSchema = z.object({
  serviceRequest: z
    .string()
    .describe(
      'A detailed description of the requested IT services, including networking, computing, CCTV, alarm systems, or general IT support needs.'
    ),
});
export type EstimatePriceRangeInput = z.infer<typeof EstimatePriceRangeInputSchema>;

const EstimatePriceRangeOutputSchema = z.object({
  priceRange: z
    .string()
    .describe(
      'An estimated price range for the requested services, based on the details provided in the service request.'
    ),
  confidenceLevel: z
    .string()
    .describe(
      'A qualitative assessment of the confidence level in the estimated price range (e.g., Low, Medium, High).'    
    )
});
export type EstimatePriceRangeOutput = z.infer<typeof EstimatePriceRangeOutputSchema>;

export async function estimatePriceRange(
  input: EstimatePriceRangeInput
): Promise<EstimatePriceRangeOutput> {
  return estimatePriceRangeFlow(input);
}

const prompt = ai.definePrompt({
  name: 'estimatePriceRangePrompt',
  input: {schema: EstimatePriceRangeInputSchema},
  output: {schema: EstimatePriceRangeOutputSchema},
  prompt: `You are an AI assistant specializing in estimating the price range for IT services provided by ICARO TECHNOLOGY.

  Based on the following service request, provide an estimated price range and a confidence level for that estimate.

  Service Request: {{{serviceRequest}}}

  Consider the complexity, scope, and potential resource requirements when determining the price range.

  Output the price range as a string, including currency (e.g., "$500 - $1000").
  Output the confidence level as one of "Low", "Medium", or "High".
`,
});

const estimatePriceRangeFlow = ai.defineFlow(
  {
    name: 'estimatePriceRangeFlow',
    inputSchema: EstimatePriceRangeInputSchema,
    outputSchema: EstimatePriceRangeOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
