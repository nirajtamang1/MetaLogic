import React from "react";
import benefitsImg from "../Assests/images/benifits.svg";

function Benefits() {
  return (
    <>
      {/* Benefits of Working Start Here  */}
      <section className="benefits-area my-5" data-aos="flip-left">
        <div className="row flex-md-row justify-content-center align-items-center">
          <img src={benefitsImg} alt="image of benefits" className="col-md-6" />
          <div className="col-md-6 mt-5">
            <h4>BENEFITS OF WORKING WITH US</h4>
            <h1>Reliability in Partnership</h1>
            <p>
              Rely on us for more than just solutions—rely on a steadfast
              partnership. Discover the assurance of reliability, commitment,
              and a shared commitment to your sustained success.
            </p>
          </div>
        </div>
      </section>
      {/* Benefits of Working End Here */}
    </>
  );
}

export default Benefits;
