
// src/ai/actions.ts
'use server';

import {generateMarketingPhrases} from '@/ai/flows/generate-marketing-phrases';

export async function generateSpaMarketingPhrases(serviceDescription: string, hasUniqueTechniques: boolean, hasSatisfactionGuarantee: boolean) {
  try {
    const phrases = await generateMarketingPhrases({serviceDescription, hasUniqueTechniques, hasSatisfactionGuarantee});
    return phrases.marketingPhrases;
  } catch (e) {
    console.error('Error generating marketing phrases:', e);
    return ['Failed to generate marketing phrases.'];
  }
}
