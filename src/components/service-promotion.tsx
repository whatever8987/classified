
// src/components/service-promotion.tsx
import React from 'react';

interface ServicePromotionProps {
  serviceName: string;
  description: string;
  benefits: string[];
  therapistCertifications: string[];
  marketingPhrases: string[];
  businessInfo: {
    address: string;
    phone: string;
    hours: string;
    mapUrl: string;
  };
}

export const ServicePromotion: React.FC<ServicePromotionProps> = ({
  serviceName,
  description,
  benefits,
  therapistCertifications,
  marketingPhrases,
  businessInfo,
}) => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{serviceName}</h1>
      <p className="text-gray-700 mb-4">{description}</p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Benefits</h2>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index} className="text-gray-700">{benefit}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Therapist Certifications</h2>
        <ul>
          {therapistCertifications.map((certification, index) => (
            <li key={index} className="text-gray-700">{certification}</li>
          ))}
        </ul>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Marketing Phrases</h2>
        <ul>
          {marketingPhrases.map((phrase, index) => (
            <li key={index} className="text-gray-700">{phrase}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Business Information</h2>
        <p className="text-gray-700">Address: {businessInfo.address}</p>
        <p className="text-gray-700">Phone: {businessInfo.phone}</p>
        <p className="text-gray-700">Hours: {businessInfo.hours}</p>
        <iframe
          src={businessInfo.mapUrl}
          width="600"
          height="450"
          style={{border:0}}
          allowFullScreen={false}
          aria-hidden="false"
          tabIndex={0}
        ></iframe>
      </div>
    </div>
  );
};
