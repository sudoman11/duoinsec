import { Course } from '../types/courses';

export const courses: Course[] = [
  // Cybersecurity Courses
  {
    id: 'ethical-hacking',
    title: 'Ethical Hacking & Penetration Testing',
    category: 'Cybersecurity',
    description: 'Learn professional penetration testing techniques and ethical hacking fundamentals.',
    duration: '12 weeks',
    level: 'Intermediate',
    price: 599,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    topics: ['Network Security', 'Web App Security', 'Malware Analysis', 'Cryptography']
  },
  
  // AI Courses
  {
    id: 'deep-learning',
    title: 'Deep Learning & Neural Networks',
    category: 'Artificial Intelligence',
    description: 'Master deep learning concepts and neural network architectures.',
    duration: '10 weeks',
    level: 'Advanced',
    price: 699,
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    topics: ['Neural Networks', 'CNN', 'RNN', 'Transformers']
  },

  // Programming Courses
  {
    id: 'python-advanced',
    title: 'Advanced Python Programming',
    category: 'Programming',
    description: 'Take your Python skills to the next level with advanced concepts.',
    duration: '8 weeks',
    level: 'Advanced',
    price: 499,
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    topics: ['Design Patterns', 'Concurrency', 'Testing', 'Performance']
  },

  // Web Development Courses
  {
    id: 'fullstack-dev',
    title: 'Full Stack Web Development',
    category: 'Web Development',
    description: 'Become a full-stack developer with modern web technologies.',
    duration: '16 weeks',
    level: 'Intermediate',
    price: 799,
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    topics: ['React', 'Node.js', 'MongoDB', 'REST APIs']
  },

  // PCB Design Courses
  {
    id: 'pcb-design',
    title: 'Professional PCB Design',
    category: 'PCB Design',
    description: 'Learn professional PCB design and manufacturing processes.',
    duration: '8 weeks',
    level: 'Intermediate',
    price: 549,
    image: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    topics: ['Schematic Design', 'Layout', 'Manufacturing', 'Testing']
  },

  // IoT Courses
  {
    id: 'iot-fundamentals',
    title: 'IoT Development Fundamentals',
    category: 'IoT',
    description: 'Build IoT solutions using industry-standard platforms and protocols.',
    duration: '10 weeks',
    level: 'Beginner',
    price: 499,
    image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    topics: ['Sensors', 'Connectivity', 'Cloud Integration', 'Security']
  }
];