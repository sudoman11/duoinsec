export interface Course {
  id: string;
  title: string;
  category: CourseCategory;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  price: number;
  image: string;
  topics: string[];
  prerequisites?: string[];
}

export type CourseCategory = 
  | 'Cybersecurity'
  | 'Artificial Intelligence'
  | 'Programming'
  | 'Web Development'
  | 'PCB Design'
  | 'IoT';