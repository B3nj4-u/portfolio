import React, { useState } from "react";
import "./App.css";
import Modal from "./components/modal";
import Jobs from "./components/jobs";
import ProjectsDisplay from "./components/projectsDisplay";
import PersonalInfo from "./components/personalInfo";
import AboutMe from "./components/aboutMe";

function App() {
  // Información del currículum

  return (
    <div className="App">
      <PersonalInfo />
      <main>
        <AboutMe />

        <Jobs />

        <ProjectsDisplay />
      </main>
      <footer>
        <p>© 2024 Pedro B. Ulloa Valenzuela</p>
      </footer>
    </div>
  );
}

export default App;
