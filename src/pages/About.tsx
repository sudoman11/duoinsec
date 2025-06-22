import AboutHero from '../components/about/AboutHero';
import AboutValues from '../components/about/AboutValues';
import Stats from '../components/home/Stats';


export default function About() {
  return (
    <div className="bg-theme-dark">
      <AboutHero />
      <AboutValues />
      <Stats />
    </div>
  );
}