export interface Founder {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  achievements: Achievement[];
  socialLinks: SocialLink[];
}

export interface Achievement {
  title: string;
  description: string;
  year: number;
}

export interface SocialLink {
  platform: 'linkedin' | 'twitter' | 'github';
  url: string;
}