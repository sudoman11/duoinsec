export interface Event {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: 'workshop' | 'conference' | 'webinar' | 'training';
  status: 'upcoming' | 'past';
  price: number;
  speakers: Speaker[];
}

export interface Speaker {
  name: string;
  role: string;
  company: string;
  image: string;
}