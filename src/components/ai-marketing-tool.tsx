
// src/components/ai-marketing-tool.tsx
'use client';

import React, {useState} from 'react';
import {generateSpaMarketingPhrases} from '@/ai/actions';
import {Button} from '@/components/ui/button';
import {Textarea} from '@/components/ui/textarea';
import {Checkbox} from '@/components/ui/checkbox';
import {Label} from '@/components/ui/label';

const AIMarketingTool = () => {
  const [serviceDescription, setServiceDescription] = useState('');
  const [hasUniqueTechniques, setHasUniqueTechniques] = useState(false);
  const [hasSatisfactionGuarantee, setHasSatisfactionGuarantee] = useState(false);
  const [marketingPhrases, setMarketingPhrases] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const generatePhrases = async () => {
    setIsLoading(true);
    const phrases = await generateSpaMarketingPhrases(
      serviceDescription,
      hasUniqueTechniques,
      hasSatisfactionGuarantee
    );
    setMarketingPhrases(phrases);
    setIsLoading(false);
  };

  return (
    <div className="p-4 border rounded-md">
      <h2 className="text-xl font-semibold mb-4">AI Marketing Phrase Generator</h2>

      <div className="mb-4">
        <Label htmlFor="serviceDescription">Service Description:</Label>
        <Textarea
          id="serviceDescription"
          placeholder="Enter service description"
          value={serviceDescription}
          onChange={(e) => setServiceDescription(e.target.value)}
          className="mt-1"
        />
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Checkbox
          id="uniqueTechniques"
          checked={hasUniqueTechniques}
          onCheckedChange={(checked) => setHasUniqueTechniques(!!checked)}
        />
        <Label htmlFor="uniqueTechniques">Has Unique Techniques</Label>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <Checkbox
          id="satisfactionGuarantee"
          checked={hasSatisfactionGuarantee}
          onCheckedChange={(checked) => setHasSatisfactionGuarantee(!!checked)}
        />
        <Label htmlFor="satisfactionGuarantee">Has Satisfaction Guarantee</Label>
      </div>

      <Button onClick={generatePhrases} disabled={isLoading}>
        {isLoading ? 'Generating...' : 'Generate Marketing Phrases'}
      </Button>

      {marketingPhrases.length > 0 && (
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-2">Marketing Phrases:</h3>
          <ul>
            {marketingPhrases.map((phrase, index) => (
              <li key={index} className="mb-1">
                - {phrase}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AIMarketingTool;
