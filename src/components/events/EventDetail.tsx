import React from 'react';
import { useParams } from 'react-router-dom';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { events } from '../../data/events';

export default function EventDetail() {
  const { id } = useParams<{ id: string }>();
  const event = events.find(e => e.id === id);

  if (!event) {
    return <div>Event not found</div>;
  }

  const { title, description, date, time, location, speakers, price } = event;

  // Prepare email content
  const subject = `Registration for ${title}`;
  const body = `
    I would like to register for the event "${title}".
    
    Event Details:
    - Date: ${new Date(date).toLocaleDateString()}
    - Time: ${time}
    - Location: ${location}
    - Price: ${price} per person
    
    Please provide further registration instructions.

    Thanks!
  `;

  // Encode the subject and body for the mailto link
  const encodedSubject = encodeURIComponent(subject);
  const encodedBody = encodeURIComponent(body);

  // Create a mailto link with your email address
  const mailtoLink = `mailto:r.deepanrajofficial@gmail.com?subject=${encodedSubject}&body=${encodedBody}`;

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4">
        <img 
          src={event.image} 
          alt={title} 
          className="w-full h-96 object-cover rounded-lg mb-8"
        />

        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-xl text-gray-600 mb-6">{description}</p>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            <div className="flex items-center text-gray-600">
              <Calendar className="h-5 w-5 mr-2" />
              {new Date(date).toLocaleDateString()}
            </div>
            <div className="flex items-center text-gray-600">
              <Clock className="h-5 w-5 mr-2" />
              {time}
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              {location}
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Speakers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {speakers.map((speaker, index) => (
              <div key={index} className="flex items-center space-x-4">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{speaker.name}</h3>
                  <p className="text-gray-600">{speaker.role}</p>
                  <p className="text-gray-500">{speaker.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between items-center bg-gray-50 p-6 rounded-lg">
          <div>
            <span className="text-2xl font-bold text-blue-600">{price}</span>
            <p className="text-gray-600">per person</p>
          </div>
          <a
            href={mailtoLink}
            className="bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 transition"
          >
            Register via Email
          </a>
        </div>
      </div>
    </div>
  );
}
