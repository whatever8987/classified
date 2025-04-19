'use client';

import React from 'react';
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {Phone} from 'lucide-react';

interface AdDetailPageProps {
  params: {
    id: string;
  };
}

const AdDetailPage: React.FC<AdDetailPageProps> = ({params}) => {
  const {id} = params;

  // Dummy data - replace with actual data fetching
  const businessName = 'New Lab Massage Center';
  const tagline = 'Experience Unique Asian Massage Techniques for Ultimate Relaxation';
  const coverImageUrl = 'https://picsum.photos/1200/400'; // Replace with a real image URL
  const address = '2024 Gateway Drive Suite D, Opelika, AL 36801';
  const hours = '9:30am - 9:30pm (Daily)';
  const phone = '334-521-5388';
  const benefits = [
    'Brand-new massage techniques for deep relaxation.',
    'Expert masseurs trained in Asian therapies (e.g., Thai, Shiatsu).',
    'Improved blood circulation and muscle relief.',
    'Five-star service tailored to your needs.',
  ];
  const testimonial = 'The best massage in Opelika! Left feeling rejuvenated. – [Client Name]';
  const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.982624414457!2d-85.38612952348203!3d32.64699348082617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x888c644889113439%3A0x647c4b45e4f451a6!2s2024%20Gateway%20Dr%20Suite%20D%2C%20Opelika%2C%20AL%2036801!5e0!3m2!1sen!2sus!4v1734913294409!5m2!1sen!2sus';

  return (
    <div className="container mx-auto py-10">
      {/* Header Section */}
      <header className="mb-8">
        <Image
          src={coverImageUrl}
          alt={businessName}
          width={1200}
          height={400}
          className="rounded-lg object-cover shadow-md"
        />
        <h1 className="text-4xl font-bold mt-4">{businessName}</h1>
        <p className="text-lg text-gray-700">{tagline}</p>
      </header>

      {/* Key Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Address</h2>
          <p className="text-gray-700">{address}</p>
        </div>
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Hours</h2>
          <p className="text-gray-700">{hours}</p>
        </div>
        <div className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Phone</h2>
          <Button asChild>
            <a href={`tel:${phone}`} className="flex items-center">
              <Phone className="mr-2 h-4 w-4" />
              {phone}
            </a>
          </Button>
        </div>
      </div>

      {/* Service Highlights */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Service Highlights</h2>
        <ul className="list-disc list-inside">
          {benefits.map((benefit, index) => (
            <li key={index} className="text-gray-700">{benefit}</li>
          ))}
        </ul>
      </div>

      {/* Testimonials */}
      {testimonial && (
        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Testimonials</h2>
          <p className="text-gray-700 italic">{testimonial}</p>
        </div>
      )}

      {/* Call-to-Action */}
      <div className="flex flex-col md:flex-row gap-4">
        <Button className="bg-primary text-primary-foreground hover:bg-primary/80">
          Book Now – Limited Slots Available!
        </Button>
        <Button variant="outline">
          <a href={`tel:${phone}`}>Call {phone} for Walk-ins</a>
        </Button>
      </div>

      {/* Google Maps Embed */}
      <div>
        <iframe
          src={mapUrl}
          width="100%"
          height="450"
          style={{border: 0}}
          allowFullScreen={false}
          aria-hidden="false"
          tabIndex={0}
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default AdDetailPage;
