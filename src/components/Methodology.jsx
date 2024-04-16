import React from "react";
import agileImg from "../Assests/images/ajile.svg";

function Methodology() {
  return (
    <>
      {/* Methodology Start Here  */}
      <section className="methodology-area my-5">
        <div
          className="row flex-md-row justify-content-center align-items-center"
          data-aos="fade-left"
        >
          <img src={agileImg} alt="image of Agile" className="col-md-6" />
          <div className="col-md-6">
            <h3>OUR METHODOLOGY</h3>
            <h1>Agile development methodology</h1>
            <p>
              We use the agile development methodology to minimize risk, such as
              bugs, cost overruns, and changing requirements, when adding new
              functionality. In our approach, we develop the software in
              iterations that contain mini-increments of the new functionality.
              We consider different forms of the agile development method,
              including scrum, crystal, extreme programming (XP), and
              feature-driven development (FDD).
            </p>
          </div>
        </div>
      </section>
      {/* Methodoly End Here  */}
    </>
  );
}

export default Methodology;
