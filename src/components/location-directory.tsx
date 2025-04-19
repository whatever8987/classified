// src/components/location-directory.tsx
import React from 'react';

const spaLocations = {
  California: ['Los Angeles', 'San Francisco', 'San Diego'],
  Nevada: ['Las Vegas', 'Reno'],
  Arizona: ['Phoenix', 'Tucson'],
  // Add more states and cities as needed
};

export const LocationDirectory = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {Object.entries(spaLocations).map(([state, cities]) => (
        <div key={state} className="p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">{state}</h2>
          <ul>
            {cities.map((city) => (
              <li key={city} className="mb-1">
                <a href={`/locations/${state.toLowerCase()}/${city.toLowerCase().replace(' ', '-')}`} className="hover:text-primary">{city}</a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
