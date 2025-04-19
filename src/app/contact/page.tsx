'use client';

import React from 'react';
import {ContactForm} from '@/components/contact-form';

const ContactPage = () => {
  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <p className="text-gray-700 mb-4">
        Have questions or need assistance? Fill out the form below and we'll get back to you as soon as possible.
      </p>
      <div className="max-w-md mx-auto">
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactPage;
