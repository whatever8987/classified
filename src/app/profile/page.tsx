'use client';

import React from 'react';
import Image from 'next/image';
import {Button} from '@/components/ui/button';
import {MapPin, Phone, Clock} from 'lucide-react';
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from '@/components/ui/card';
import {Tabs, TabsContent, TabsList, TabsTrigger} from '@/components/ui/tabs';

const ProfilePage = () => {
  // Dummy data
  const user = {
    name: 'John Doe',
    rating: 4.9,
    bio: 'Certified massage therapist with 10+ years of experience',
    location: 'Opelika, AL',
    hours: '9:30 AM - 9:30 PM',
    contact: '334-521-5388',
    social: {
      instagram: '#',
      facebook: '#',
    },
    isBusiness: true,
    businessName: 'New Lab Massage Center',
    businessLogo: 'https://picsum.photos/100/100',
    isVerified: true,
  };

  const services = [
    {id: 1, name: 'Deep Tissue Massage', price: 60},
    {id: 2, name: 'Swedish Massage', price: 50},
    {id: 3, name: 'Hot Stone Massage', price: 70},
  ];

  const reviews = [
    {id: 1, author: 'Jane Smith', comment: 'Great massage!', rating: 5},
    {id: 2, author: 'Mike Johnson', comment: 'Very relaxing', rating: 4},
  ];

  return (
    <div className="container mx-auto py-10">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center">
          <Image
            src="https://picsum.photos/100/100"
            alt="Profile"
            width={100}
            height={100}
            className="rounded-full mr-4"
          />
          <div>
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <div className="flex items-center text-sm text-gray-600">
              ⭐ {user.rating}/5
            </div>
          </div>
        </div>
        <Button>Message/Contact</Button>
      </div>

      <Tabs defaultValue="services" className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="services">Services</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="about">About</TabsTrigger>
        </TabsList>
        <TabsContent value="services" className="space-y-4">
          <h2 className="text-2xl font-semibold mb-2">Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map(service => (
              <Card key={service.id}>
                <CardHeader>
                  <CardTitle>{service.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Price: ${service.price}/hr</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="reviews">
          <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
          <div className="space-y-4">
            {reviews.map(review => (
              <Card key={review.id}>
                <CardHeader>
                  <CardTitle>{review.author}</CardTitle>
                  <CardDescription>Rating: {review.rating}/5</CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{review.comment}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="about">
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <Card>
            <CardHeader>
              <CardTitle>About Me</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{user.bio}</p>
              <div className="mt-4">
                <p className="flex items-center"><MapPin className="mr-2 h-4 w-4" /> {user.location}</p>
                <p className="flex items-center"><Clock className="mr-2 h-4 w-4" /> {user.hours}</p>
                <p className="flex items-center"><Phone className="mr-2 h-4 w-4" />
                  <Button asChild variant="link">
                    <a href={`tel:${user.contact}`}>{user.contact}</a>
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProfilePage;
