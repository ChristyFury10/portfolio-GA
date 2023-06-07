import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Project from './components/ProjectItem';
import { Route, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Hero from './Hero';
import Resume from './components/Resume';
import Skills from './components/Skills'

function App() {

  let routes;
  routes = (
    <Routes>
      <Route path="/" element={<AboutMe/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/skills" element={<Skills/>}/>
     </Routes>
  )
  return (
    <div className="App">
      
      <header>
        <Hero/>
      </header>
     <main>
      {routes}
     </main>
     <Footer fixed="bottom"/>
    </div>
  );
}

export default App;
