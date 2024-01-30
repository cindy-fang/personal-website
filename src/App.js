import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from "./components/Banner";
import { NavBar } from "./components/NavBar";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { ProjectCard } from "./components/ProjectCard";
import { Contact } from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Banner />
      <NavBar />
      <Skills />
      <Projects />
      <ProjectCard />
      <Contact />
    </div>
  );
}

export default App;
