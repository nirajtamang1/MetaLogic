import React from "react";
import Layout from "../../layouts/Layout";
import heroImg from "../../Assests/images/hero.svg";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io5";
import { FaVuejs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { FaSketch } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { FaReact } from "react-icons/fa6";
import { FaGitAlt } from "react-icons/fa";

function WebDevelopment() {
  return (
    <Layout title="Web Development Services my MetaLogic">
      <div className="container">
        {/* Hero Section Start Here  */}
        <section id="hero">
          <div className="row flex-md-row-reverse justify-content-center align-items-center">
            <img
              src={heroImg}
              alt="image of website  development"
              className="col-md-6"
            />
            <div className="col-md-6 mt-5" data-aos="fade-right">
              <h4>WEBSITE DEVELOPMENT</h4>
              <h1>Scalable & Seamless Web Development</h1>
              <p>
                Engage users with lightning-fast and reliable Progressive Web
                Apps. We harness the power of modern web technologies to deliver
                app-like experiences directly through browsers.
              </p>
            </div>
          </div>
        </section>
        {/* Hero Section End Here  */}
        {/* Technology Section Start Here  */}
        <section className="my-5 py-5">
          <div className="text-center">
            <h6>TECH STACK</h6>
            <h1>Technology we behold</h1>
            <p>
              Discover how we personalize your experience with customized
              features and effortlessly scale your system to match your growing
              needs.
            </p>
          </div>
          <TbBrandNextjs />
          <IoLogoJavascript />
          <FaVuejs />
          <SiExpress />
          <FaNode />
          <FaSketch />
          <GrMysql />
          <FaReact />
          <FaGitAlt />
        </section>
        {/* Technology Section End Here  */}
      </div>
    </Layout>
  );
}

export default WebDevelopment;
