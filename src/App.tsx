
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import Projects from './Pages/Projects/Projects';
import Skills from './Pages/Skills/Skills';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hack" element={<Profile name="Anas Ben Raies" />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
    </Routes>
  </BrowserRouter>
);

export default App
