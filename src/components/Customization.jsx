import React from "react";
import customizationImg from "../Assests/images/customization.svg";

function Customization() {
  return (
    <>
      {/* Customization and Scalability start here  */}
      <section className="customization-area my-5" data-aos="fade-in">
        <div
          className="row flex-md-row-reverse justify-content-center align-items-center"
          data-aos="flip-right"
        >
          <img
            src={customizationImg}
            alt="image of Customization and Scalability"
            className="col-md-6"
          />
          <div className="col-md-6 my-5">
            <h4>CUSTOMIZATION AND SCALABILITY</h4>
            <h1>Crafting Solutions Just for You</h1>
            <p>
              Discover how we personalize your experience with customized
              features and effortlessly scale your system to match your growing
              needs. Our approach ensures that your software is uniquely
              tailored to fit your business, allowing you to adapt easily and
              efficiently. Explore simplicity and adaptability in our
              Customization and Scalability.
            </p>
          </div>
        </div>
      </section>
      {/* Customization and Scalability End here  */}
    </>
  );
}

export default Customization;
