import React from "react";
import { FaArrowRight } from "react-icons/fa";
import connectImg from "../Assests/images/contact.jpg";

function Connect() {
  return (
    <>
      {/* Connect Section Start Here  */}
      <section id="connect">
        <div
          className="row flex-md-row align-items-center justify-content-end "
          data-aos="fade-up-right"
          style={{
            backgroundColor: "#645DD7",
            paddingTop: "20px",
            paddingBottom: "20px",
            paddingRight: "20px",
          }}
        >
          <img
            src={connectImg}
            alt="Image of connect"
            className="col-md-4 d-none d-md-block"
            style={{
              width: "20%",
              height: "30%",
              objectFit: "cover",
              backgroundColor: "transparent",
            }}
          />
          <div
            className="col-md-8"
            style={{ display: "flex", justifyContent: "end" }}
          >
            <div>
              <h1 style={{ color: "white" }}>Have a Project in Mind?</h1>
              <p>Let's Connect and Ignite Success!</p>
              <button>
                Get Your Quote <FaArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* Connect Section End Here  */}
    </>
  );
}

export default Connect;
