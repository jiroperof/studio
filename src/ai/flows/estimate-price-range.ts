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
      'Una descripción detallada de los servicios de TI solicitados, incluidas las necesidades de redes, computación, CCTV, sistemas de alarma o soporte de TI general.'
    ),
});
export type EstimatePriceRangeInput = z.infer<typeof EstimatePriceRangeInputSchema>;

const EstimatePriceRangeOutputSchema = z.object({
  priceRange: z
    .string()
    .describe(
      'Un rango de precios estimado para los servicios solicitados, basado en los detalles proporcionados en la solicitud de servicio.'
    ),
  confidenceLevel: z
    .string()
    .describe(
      'Una evaluación cualitativa del nivel de confianza en el rango de precios estimado (por ejemplo, Bajo, Medio, Alto).'    
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
  prompt: `Eres un asistente de IA especializado en estimar el rango de precios para los servicios de TI proporcionados por ICARO TECHNOLOGY.

  Basado en la siguiente solicitud de servicio, proporciona un rango de precios estimado y un nivel de confianza para esa estimación.

  Solicitud de Servicio: {{{serviceRequest}}}

  Considera la complejidad, el alcance y los posibles requisitos de recursos al determinar el rango de precios.

  Devuelve el rango de precios como una cadena, incluyendo la moneda (p. ej., "$500 - $1000").
  Devuelve el nivel de confianza como uno de "Low", "Medium", o "High".
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
