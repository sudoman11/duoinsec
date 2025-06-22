import { Linkedin, Github, Award, Cpu } from 'lucide-react';
import { Founder } from '../../types/founder';

export default function FounderProfile({ founder }: { founder: Founder }) {
  const getSocialIcon = (platform: string) => {
    switch (platform) {
      case 'linkedin':
        return <Linkedin className="h-5 w-5" />;
      case 'github':
        return <Github className="h-5 w-5" />;
      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-20">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="w-[900px] h-[900px] object-cover md:w-[1080px] md:h-[1080px]"
              src={founder.image}
              alt={founder.name}
            />
          </div>
          <div className="p-8">
            <div className="flex justify-between items-start">
              <div>
                <h2 className="text-3xl font-bold text-gray-800">{founder.name}</h2>
                <p className="text-xl text-blue-600">{founder.role}</p>
              </div>
              <div className="flex space-x-4">
                {founder.socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-blue-600 transition"
                  >
                    {getSocialIcon(link.platform)}
                  </a>
                ))}
              </div>
            </div>

            <p className="mt-6 text-gray-600">{founder.bio}</p>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Cpu className="h-5 w-5 mr-2 text-blue-600" />
                Areas of Expertise
              </h3>
              <div className="flex flex-wrap gap-2">
                {founder.expertise.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award className="h-5 w-5 mr-2 text-blue-600" />
                Achievements
              </h3>
              <div className="space-y-4">
                {founder.achievements.map((achievement, index) => (
                  <div key={index} className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-semibold">{achievement.title}</h4>
                    <p className="text-gray-600">{achievement.description}</p>
                    <span className="text-sm text-gray-500">{achievement.year}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
