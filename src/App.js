import React from "react";
import Banner from "./components/banner/Banner";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Recommandation from "./components/recommandations/Recommandation";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <Banner />
        <Resume />
        <Projects />
        <Recommandation />
        
      </div>
    </div>
  );
}

export default App;
