import './App.css';

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Navigate to="/portfolio" replace/>}/>
          <Route path="/react-portfolio" element={<Navigate to="/portfolio" replace />} />
          <Route path="/portfolio" element={<Home/>} />
          <Route path="/portfolio/projects" element={<Projects/>} />
          <Route path="/portfolio/project/:id" element={<ProjectDisplay/>} />
          <Route path="/portfolio/experience" element={<Experience />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
