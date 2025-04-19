
// src/app/locations/[state]/[city]/page.tsx
interface CityPageProps {
  params: {
    state: string;
    city: string;
  };
}

export default function CityPage({params}: CityPageProps) {
  const {state, city} = params;

  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">{city}, {state} Spas</h1>
      <p>List of spas in {city}, {state} will go here.</p>
    </main>
  );
}
