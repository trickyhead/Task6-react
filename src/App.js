import React, { Component } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";

import ContactMe from "./components/ContactMe";

import resumeData from "./resumeData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar resumeData={resumeData} />
        <About resumeData={resumeData} />
        <Resume resumeData={resumeData} />
        <Portfolio resumeData={resumeData} />

        <ContactMe resumeData={resumeData} />
      </div>
    );
  }
}

export default App;
