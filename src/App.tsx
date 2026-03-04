
import './App.css'
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';
import Experience from './Pages/Experience/Experience';
import Certifications from './Pages/Certifications/Certifications';

// ScrollToTop component: scrolls window to top whenever the route changes
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'auto' });
    }
  }, [pathname]);
  return null;
}

const App = () => (
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hack" element={<Profile name="Anas Ben Raies" />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/Experience" element={<Experience />} />
      <Route path="/certifications" element={<Certifications />} />

    </Routes>
  </BrowserRouter>
);

export default App
