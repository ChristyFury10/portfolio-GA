import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import Project from './components/ProjectItem';
import { Route, Router, Routes } from 'react-router-dom';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import Hero from './Hero';

function App() {

  let routes;
  routes = (
    <Routes>
      <Route path="/" element={<Project/>}/>
      <Route path="/aboutme" element={<AboutMe/>}/>
     </Routes>
  )
  return (
    <div className="App">
      <header>
        <NavBar/>
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
