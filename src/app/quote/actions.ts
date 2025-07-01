
'use server';

import { z } from 'zod';
import {
  estimatePriceRange as estimatePriceRangeFlow,
  type EstimatePriceRangeOutput,
} from '@/ai/flows/estimate-price-range';

const QuoteSchema = z.object({
  serviceRequest: z.string().min(20, { message: 'Please provide a more detailed description of your needs (at least 20 characters).' }),
});

export type QuoteState = {
  result?: EstimatePriceRangeOutput;
  error?: string;
  validationErrors?: {
    serviceRequest?: string[];
  };
  submittedRequest?: string;
};

export async function getQuote(
  prevState: QuoteState,
  formData: FormData
): Promise<QuoteState> {
  const validatedFields = QuoteSchema.safeParse({
    serviceRequest: formData.get('serviceRequest'),
  });

  const serviceRequest = formData.get('serviceRequest') as string;

  if (!validatedFields.success) {
    return {
      error: 'Validation failed.',
      validationErrors: validatedFields.error.flatten().fieldErrors,
      submittedRequest: serviceRequest,
    };
  }

  try {
    const result = await estimatePriceRangeFlow({ serviceRequest: validatedFields.data.serviceRequest });
    return { result, submittedRequest: serviceRequest };
  } catch (e) {
    console.error(e);
    const errorMessage = e instanceof Error ? e.message : 'An unexpected error occurred.';
    return { error: `AI estimation failed: ${errorMessage}`, submittedRequest: serviceRequest };
  }
}
