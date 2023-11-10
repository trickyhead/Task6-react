import React, { Component } from "react";
export default class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1>
              <span>Education</span>
            </h1>
          </div>

          <div className="nine columns main-col">
            {resumeData.education &&
              resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span>{" "}
                        <em className="date">
                          {item.MonthOfPassing} {item.YearOfPassing}
                        </em>
                      </p>
                      <p>{item.Achievements}</p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1>
              <span>Projects</span>
            </h1>
            <h1></h1>
          </div>
          <h1>1.Bombsqaud Game Server Scripts:</h1>
          <h1>
            <strong>
              I Developed customized server scripts in Python for a popular
              PC/Android game, Bombsquad, in which i created chat filter system
              with auto-kick and ban, rank and tag system and stats script to
              record and update player stats & server chats onto my website
            </strong>
          </h1>
          <h1>2. Passwords and Cookies Exfiltrator</h1>
          <h1>
            <strong>
              :Developed a Node.js script to extract encrypted cookies,
              passwords, autofill & other important data from major web
              browsersdecipher them and compress the data into a zip file and
              send it to my discord server. Implemented sophisticated
              obfuscation methods and made it undetectable from all antivirus's.
            </strong>
          </h1>
        </div>
      </section>
    );
  }
}
