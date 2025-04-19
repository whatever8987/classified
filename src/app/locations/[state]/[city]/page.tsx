// src/app/locations/[state]/[city]/page.tsx
interface CityPageProps {
  params: {
    state: string;
    city: string;
  };
}

const dummySpas = [
  {
    id: 1,
    name: 'Zenith Spa - LA Downtown',
    description: 'Experience ultimate relaxation in the heart of Los Angeles. We offer a variety of massage therapies and skincare treatments.',
  },
  {
    id: 2,
    name: 'Ocean Bliss Spa - Santa Monica',
    description: 'Rejuvenate your body and mind with our ocean-view spa. Specializing in aromatherapy and hot stone massages.',
  },
  {
    id: 3,
    name: 'City Escape Spa - Beverly Hills',
    description: 'Escape the hustle and bustle at our luxurious spa. We provide personalized treatments tailored to your needs.',
  },
];

export default function CityPage({params}: CityPageProps) {
  const {state, city} = params;

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{city}, {state} Spas</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dummySpas.map(spa => (
          <div key={spa.id} className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">{spa.name}</h2>
            <p className="text-gray-700">{spa.description}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
