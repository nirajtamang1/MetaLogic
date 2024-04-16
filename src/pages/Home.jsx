import React from "react";
import Layout from "../layouts/Layout";

function Home() {
  return (
    <Layout>
      <div
        style={{ height: "60vh" }}
        className="d-flex flex-column justify-content-center align-items-xl-center"
      >
        <h1>Home Page</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex assumenda
          tempore est quibusdam dolore facilis aspernatur, nemo in numquam
          asperiores. Ab voluptates eum neque, quam quo blanditiis laborum rerum
          possimus in? Sapiente sit est harum accusantium vitae voluptatibus
          odit aliquid, veniam, incidunt eum fuga eius saepe quia delectus!
          Quam, iusto perspiciatis ab sed sit doloremque consectetur dolorem
          repudiandae voluptatibus at?
        </p>
      </div>
    </Layout>
  );
}

export default Home;
