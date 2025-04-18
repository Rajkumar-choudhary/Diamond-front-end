import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Header from './pages/header/header';
import Footer from './pages/footer/footer';
import Engagement from './pages/engagement/engagement';
import About from './pages/about/about';
import Diamond from './pages/diamond/diamond';


export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/engagement" element={<Engagement />} />
        <Route path="/about" element={<About />} />
        <Route path="/diamond" element={<Diamond />} />
      </Routes>
   <Footer />
    </Router>
  );
}