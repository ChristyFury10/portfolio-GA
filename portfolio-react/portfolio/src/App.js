import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Project from './components/ProjectItem';
import { Route, Router, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Hero from './Hero';
import Header from './components/Header';
import Resume from './components/Resume';

function App() {

  let routes;
  routes = (
    <Routes>
      <Route path="/" />
      <Route path="/aboutme" element={<AboutMe/>}/>
      <Route path="/projects" element={<Project/>}/>
      <Route path="/resume" element={<Resume/>}/>

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
