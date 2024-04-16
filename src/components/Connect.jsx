import React from "react";
import { FaArrowRight } from "react-icons/fa";
import metalogo from "../Assests/images/metalogo.png";

function Connect() {
  return (
    <>
      {/* Connect Section Start Here  */}
      <section className="contact-us py-5">
        <div
          className="row flex-md-row align-items-center justify-content-end  bg-primary"
          data-aos="fade-left"
        >
          <img
            src={metalogo}
            alt="image of benefits"
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
              <h1>Have a Project in Mind?</h1>
              <p>Let's Connect and Ignite Success!</p>
              <button>
                Get Your Quote <FaArrowRight />{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* ContactUs Section End Here  */}
    </>
  );
}

export default Connect;
