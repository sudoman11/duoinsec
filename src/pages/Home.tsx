import Hero from '../components/home/Hero';
import Solutions from '../components/home/Solutions';
import SolutionsExplore from '../components/solutions/SolutionsExplore';
import Stats from '../components/home/Stats';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <div>
      <Hero />
      <Solutions />
      <SolutionsExplore />
      <Stats />
      <About />
      <Contact />
    </div>
  );
}