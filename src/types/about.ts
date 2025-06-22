export interface TeamMemberProps {
  image: string;
  name: string;
  role: string;
  description: string;
  id: string;
  publications: Publication[];
  blogs: BlogPost[];
}

export interface Publication {
  title: string;
  journal: string;
  year: number;
  link: string;
}

export interface BlogPost {
  title: string;
  date: string;
  summary: string;
  link: string;
}