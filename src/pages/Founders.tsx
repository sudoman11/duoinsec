import FoundersHero from '../components/founders/FoundersHero';
import FounderCard from '../components/founders/FounderCard';
import { founders } from '../data/founders';

export default function Founders() {
  return (
    <div className="bg-theme-dark min-h-screen">
      <FoundersHero />
      
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {founders.map((founder) => (
              <FounderCard key={founder.id} founder={founder} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}