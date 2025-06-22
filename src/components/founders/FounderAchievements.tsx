import { Award } from 'lucide-react';
import { type Achievement } from '../../types/founder';

export default function FounderAchievements({ achievements }: { achievements: Achievement[] }) {
  return (
    <div className="bg-theme-blue/20 rounded-lg border border-blue-900/20 p-6">
      <h3 className="text-xl font-semibold text-theme-text mb-4 flex items-center">
        <Award className="h-5 w-5 mr-2 text-blue-400" />
        Key Achievements
      </h3>
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <div 
            key={index}
            className="border-l-4 border-blue-400 pl-4 py-2"
          >
            <h4 className="font-semibold text-theme-text">{achievement.title}</h4>
            <p className="text-theme-text-secondary text-sm">{achievement.description}</p>
            <span className="text-blue-400 text-sm">{achievement.year}</span>
          </div>
        ))}
      </div>
    </div>
  );
}