
import {LocationDirectory} from '@/components/location-directory';
import AIMarketingTool from '@/components/ai-marketing-tool';

export default function Home() {
  return (
    <main className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Zenith Spa Directory</h1>
      <AIMarketingTool />
      <LocationDirectory />
    </main>
  );
}
