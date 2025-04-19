'use client';

import React from 'react';
import {Input} from '@/components/ui/input';
import {Button} from '@/components/ui/button';
import {Mail, Facebook, Twitter, Instagram} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-background text-foreground py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="hover:text-primary transition-colors">About Us</a>
              </li>
              <li>
                <a href="/contact" className="hover:text-primary transition-colors">Contact</a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms" className="hover:text-primary transition-colors">Terms</a>
              </li>
            </ul>
          </div>

          {/* Newsletter & Social Media */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Stay Connected</h3>
            <div className="mb-4">
              <p className="text-sm text-muted-foreground mb-2">
                Subscribe to our newsletter for the latest spa deals and updates.
              </p>
              <div className="flex items-center">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="mr-2"
                />
                <Button size="sm">
                  <Mail className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
            </div>
            <div>
              <h4 className="font-semibold text-md mb-2">Follow us</h4>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-primary transition-colors">
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="hover:text-primary transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Zenith Spa Directory. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
