import { useState } from 'react';
import EventCard from './EventCard';
import EventFilters from './EventFilters';
import { events } from '../../data/events';

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');

  const filteredEvents = events.filter(event => {
    const matchesCategory = !selectedCategory || event.category === selectedCategory;
    const matchesStatus = !selectedStatus || event.status === selectedStatus;
    return matchesCategory && matchesStatus;
  });

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Events</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join our upcoming events or browse through our past events to stay connected
            with the latest in business innovation and leadership.
          </p>
        </div>

        <EventFilters
          selectedCategory={selectedCategory}
          selectedStatus={selectedStatus}
          onCategoryChange={setSelectedCategory}
          onStatusChange={setSelectedStatus}
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
}