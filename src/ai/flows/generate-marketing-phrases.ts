// src/ai/flows/generate-marketing-phrases.ts
'use server';

/**
 * @fileOverview AI-powered marketing phrase generator for service descriptions.
 *
 * - generateMarketingPhrases - A function to generate persuasive marketing phrases.
 * - GenerateMarketingPhrasesInput - The input type for the generateMarketingPhrases function.
 * - GenerateMarketingPhrasesOutput - The output type for the generateMarketingPhrases function.
 */

import {ai} from '@/ai/ai-instance';
import {z} from 'genkit';

const GenerateMarketingPhrasesInputSchema = z.object({
  serviceDescription: z.string().describe('The description of the service.'),
  hasUniqueTechniques: z.boolean().describe('Whether the service uses unique techniques.'),
  hasSatisfactionGuarantee: z.boolean().describe('Whether the service has a satisfaction guarantee.'),
});
export type GenerateMarketingPhrasesInput = z.infer<typeof GenerateMarketingPhrasesInputSchema>;

const GenerateMarketingPhrasesOutputSchema = z.object({
  marketingPhrases: z.array(
    z.string().describe('A persuasive marketing phrase for the service.')
  ).describe('A list of persuasive marketing phrases.'),
});
export type GenerateMarketingPhrasesOutput = z.infer<typeof GenerateMarketingPhrasesOutputSchema>;

export async function generateMarketingPhrases(input: GenerateMarketingPhrasesInput): Promise<GenerateMarketingPhrasesOutput> {
  return generateMarketingPhrasesFlow(input);
}

const generateMarketingPhrasesPrompt = ai.definePrompt({
  name: 'generateMarketingPhrasesPrompt',
  input: {
    schema: z.object({
      serviceDescription: z.string().describe('The description of the service.'),
      hasUniqueTechniques: z.boolean().describe('Whether the service uses unique techniques.'),
      hasSatisfactionGuarantee: z.boolean().describe('Whether the service has a satisfaction guarantee.'),
    }),
  },
  output: {
    schema: z.object({
      marketingPhrases: z.array(
        z.string().describe('A persuasive marketing phrase for the service.')
      ).describe('A list of persuasive marketing phrases.'),
    }),
  },
  prompt: `You are a marketing expert specializing in writing compelling service descriptions for spas.

  Generate 3 persuasive marketing phrases for the following service description:
  {{serviceDescription}}

  {{~#if hasUniqueTechniques~}}
  Incorporate phrases about unique techniques.
  {{~/if~}}

  {{~#if hasSatisfactionGuarantee~}}
  Incorporate phrases about satisfaction guarantees.
  {{~/if~}}

  Format the output as a JSON array of strings.
  `,
});

const generateMarketingPhrasesFlow = ai.defineFlow<
  typeof GenerateMarketingPhrasesInputSchema,
  typeof GenerateMarketingPhrasesOutputSchema
>({
  name: 'generateMarketingPhrasesFlow',
  inputSchema: GenerateMarketingPhrasesInputSchema,
  outputSchema: GenerateMarketingPhrasesOutputSchema,
}, async input => {
  const {output} = await generateMarketingPhrasesPrompt(input);
  return output!;
});
