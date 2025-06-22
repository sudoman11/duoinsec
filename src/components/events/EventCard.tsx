import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { type Event } from '../../types/events';
import { Link } from 'react-router-dom';

export default function EventCard({ event }: { event: Event }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={event.image} 
        alt={event.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-semibold">{event.title}</h3>
          <span className={`px-3 py-1 rounded-full text-sm ${
            event.status === 'upcoming' 
              ? 'bg-green-100 text-green-800' 
              : 'bg-gray-100 text-gray-800'
          }`}>
            {event.status.charAt(0).toUpperCase() + event.status.slice(1)}
          </span>
        </div>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-gray-600">
            <Calendar className="h-4 w-4 mr-2" />
            {new Date(event.date).toLocaleDateString()}
          </div>
          <div className="flex items-center text-gray-600">
            <Clock className="h-4 w-4 mr-2" />
            {event.time}
          </div>
          <div className="flex items-center text-gray-600">
            <MapPin className="h-4 w-4 mr-2" />
            {event.location}
          </div>
        </div>

        <div className="flex justify-between items-center mt-4">
          <span className="text-xl font-bold text-blue-600">
            ${event.price}
          </span>
          <Link
            to={`/events/${event.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}