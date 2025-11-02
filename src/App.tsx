
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hack" element={<Profile name="anas ben raies" />} />
    </Routes>
  </BrowserRouter>
);

export default App
