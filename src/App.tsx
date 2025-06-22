import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Founders from './pages/Founders';
import CourseList from './components/courses/CourseList';
import Events from './components/events/Events';
import EventDetail from './components/events/EventDetail';
import TeamMemberProfile from './components/about/profile/TeamMemberProfile';
import Contact from './components/Contact';
import SolutionsExplore from './components/solutions/SolutionsExplore';
import { useSecurityProtection } from './hooks/useSecurityProtection';
import { useKeyProtection } from './hooks/useKeyProtection';
import { useRightClickDisable } from './hooks/useRightClickDisable';
import { useCopyProtection } from './hooks/useCopyProtection';

const App: React.FC = () => {
  // Apply custom hooks for global protections
  useSecurityProtection();
  useKeyProtection();
  useRightClickDisable();
  useCopyProtection();

  return (
    <Router>
      <div className="min-h-screen bg-theme-dark text-white">
        {/* Navigation Bar */}
        <Navbar />

        {/* App Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/founders" element={<Founders />} />
          <Route path="/products" element={<Products />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/team/:id" element={<TeamMemberProfile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/exploresolutions" element={<SolutionsExplore />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
