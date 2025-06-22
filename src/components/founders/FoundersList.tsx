import FounderProfile from './FounderProfile';
import { founders } from '../../data/founders';

export default function FoundersList() {
  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Founders</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the visionary minds behind Duoinsec, dedicated to revolutionizing
            cybersecurity education and technical innovation.
          </p>
        </div>
        
        <div className="space-y-16">
          {founders.map(founder => (
            <FounderProfile key={founder.id} founder={founder} />
          ))}
        </div>
      </div>
    </section>
  );
}