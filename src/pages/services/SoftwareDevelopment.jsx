import React from "react";
import Layout from "../../layouts/Layout";

import { FaHeartbeat } from "react-icons/fa";
import softwareDevImg from "../../Assests/images/softwareDevelopment.svg";
import starImg from "../../Assests/images/star.svg";
import Methodology from "../../components/Methodology";
import Customization from "../../components/Customization";
import Benefits from "../../components/Benefits";
import Faq from "../../components/Faq";
import Connect from "../../components/Connect";

function SoftwareDevelopment() {
  return (
    <>
      <Layout>
        <div className="container mt-5">
          {/* Hero Section Start Here  */}
          <section id="hero">
            <div className="row flex-md-row-reverse justify-content-center align-items-center">
              <img
                src={softwareDevImg}
                alt="image of Software Development"
                className="col-md-6"
              />
              <div className="col-md-6" data-aos="fade-right">
                <h4>Software Development</h4>
                <h1>
                  Building Through success
                  <span> Custom Software Solutions</span>
                </h1>
                <p>
                  Experience the Future of Your Business with Our Custom
                  Software Development Services. We Design Solutions as Unique
                  as Your Vision, Amplifying Efficiency, and Catapulting Your
                  Success. No Limits, No Compromises – Just Software Crafted
                  Specifically for You.
                </p>
              </div>
            </div>
          </section>
          {/* Hero Section End Here */}

          {/* Benefits Section Start Here  */}
          <section id="benefits" className="mt-5 py-5 ">
            <div data-aos="fade-down">
              <div>
                <h1>Major Benefits of custom software development</h1>
                <p>
                  Stay ahead of industry trends and compliance requirements with
                  software that adapts to evolving standards.
                </p>
              </div>
              <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 text-center mt-3">
                <div className="col">
                  <div className="card h-100 d-flex align-items-center">
                    <img
                      src={starImg}
                      alt="image of star"
                      style={{ width: "100px", height: "100px" }}
                    />
                    <div className="car-body">
                      <p>
                        Functionality is <span>fully tailored</span> to your
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 d-flex align-items-center">
                    <img
                      src={starImg}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                    <div className="car-body">
                      <p>
                        Functionality is <span>fully tailored</span> to your
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 d-flex align-items-center">
                    <img
                      src={starImg}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                    <div className="car-body">
                      <p>
                        Functionality is <span>fully tailored</span> to your
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card h-100 d-flex align-items-center">
                    <img
                      src={starImg}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                    />
                    <div className="car-body">
                      <p>
                        Functionality is <span>fully tailored</span> to your
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Benefits Section End Here  */}

          {/* Industry Experience Start Here */}
          <section>
            <div
              id="experience"
              className="d-md-flex flex-md-row flex-column my-5"
            >
              <div className="col-md-6" data-aos="fade-right">
                <h1>Proven Industry Experience</h1>
                <p>
                  Experience the advantage of partnering with a team that has
                  honed its skills through proven industry expertise,
                  consistently delivering excellence in every sector we touch.
                </p>
              </div>
              <div className="col-md-6">
                <div
                  className="row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-center"
                  data-aos="fade-right"
                >
                  <div>
                    <FaHeartbeat />
                    <p>Heath Industry</p>
                  </div>
                  <div>
                    <FaHeartbeat />
                    <p>Heath Industry</p>
                  </div>
                  <div>
                    <FaHeartbeat />
                    <p>Heath Industry</p>
                  </div>
                  <div>
                    <FaHeartbeat />
                    <p>Heath Industry</p>
                  </div>
                  <div>
                    <FaHeartbeat />
                    <p>Heath Industry</p>
                  </div>
                  <div>
                    <FaHeartbeat />
                    <p>Heath Industry</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Industry Experience End Here */}

          <Methodology />
          <Customization />
          <Benefits />
          <Faq />
          <Connect />
        </div>
      </Layout>
    </>
  );
}

export default SoftwareDevelopment;
