
import { Founder } from '../types/founder';


export const founders: Founder[] = [
  {
    id: 'Deepan-founder',
    name: 'Deepan Raj R',
    role: 'Founder & CEO',
    image: './src/images/deepan.jpg',
    bio: 'A visionary leader in cybersecurity and technology education, Deepan Raj Founder at Duoinsec with a mission to revolutionize how we approach digital security and technical education.',
    expertise: [
      'Cybersecurity',
      'Ethical Hacking',
      'IoT Security',
      'BlockChain'
    ],
    achievements: [
      {
        title: 'Cybersecurity Excellence Award',
        description: 'Recognized for innovative contributions to cybersecurity education',
        year: 2023
      },
      {
        title: 'Young Entrepreneur of the Year',
        description: 'Awarded by the Tamil Nadu Startup Council',
        year: 2023
      }
    ],
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://www.linkedin.com/in/deepan-raj-563b9b2a1/'
      },
      {
        platform: 'github',
        url: 'https://github.com/cupcakeuh'
      }
    ]
  },
  {
    id: 'sanjay-cofounder',
    name: 'Sanjay G',
    role: 'CO-Founder & HR',
    image: './src/images/sanjay.jpg',
    bio: 'An innovative technologist with expertise in AI and cybersecurity, Sanjay leads the technical vision of Duoinsec, focusing on developing cutting-edge security solutions.',
    expertise: [
      'Artificial Intelligence',
      'Cloud Security',
      'System Architecture',
      'Tech Education'
    ],
    achievements: [
      {
        title: 'Tech Innovator Award',
        description: 'Recognized for contributions to AI in cybersecurity',
        year: 2023
      },
      {
        title: 'Best Security Solution',
        description: 'Award for innovative security platform development',
        year: 2022
      }
    ],
    socialLinks: [
      {
        platform: 'linkedin',
        url: 'https://linkedin.com/in/rahul'
      },
      {
        platform: 'github',
        url: 'https://github.com/rahul'
      }
    ]
  }
];