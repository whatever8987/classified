
// src/components/footer.tsx
import React from 'react';
import {ContactForm} from './contact-form';

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Address: 123 Spa Street, Anytown, USA</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@zenithspa.com</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
          <ContactForm />
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {new Date().getFullYear()} Zenith Spa Directory. All rights reserved.</p>
      </div>
    </footer>
  );
};
