import React, { Component } from "react";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Check Out Some of My Works.</h1>
            <h1>
              1. Jio intern- Engaged in Jio telecommunication as an intern
              focusing on video analytics development.
            </h1>
            <h1>
              2. Ethnus - Enrolled in ethnus, working on Full stack development
              using MERN technologies.
            </h1>
            <h1>
              3. Paypal - Worked as a software developer intern at paypal,
              working on data handling and bugs solving
            </h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            ></div>
          </div>
        </div>
      </section>
    );
  }
}
