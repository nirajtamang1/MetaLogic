import React from "react";
import metalogo from "../Assests/images/metalogo.png";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaRegMessage } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareWhatsapp } from "react-icons/fa6";
const Footer = () => {
  const date = new Date();
  const currentYear = date.getFullYear();
  return (
    <>
      <footer>
        <div className="p-5">
          <div
            className="d-md-flex justify-content-between"
            data-aos="slide-up"
          >
            <div className="row mt-4">
              <div className="d-md-flex">
                <img
                  src={metalogo}
                  alt="logo of metalogic company"
                  style={{ width: "50px", height: "50px", marginRight: "5px" }}
                />
                <div>
                  <h4>MetaLogic</h4>
                  Software Private Limited
                  <ul>
                    <li>
                      <CiLocationOn /> Saptakhel, Lalitpur (Head office)
                    </li>
                    <li>
                      <MdOutlineLocalPhone /> + 977 9851353599
                    </li>
                    <li>
                      <FaRegMessage /> info@metalogic.com.np
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <h3>Company</h3>
              <ul>
                <li>Feedback</li>
                <li>Partnership</li>
                <li>Terms and Conditions</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3>Services</h3>
              <ul>
                <li>Custom Software Development</li>
                <li>Web Development</li>
                <li>Mobile App Development</li>
                <li>Cloud Computing Services</li>
                <li>Quality Assurance and Testing</li>
                <li>UI/UX Designing</li>
                <li>Maintenance and Support</li>
                <li>Dev Ops</li>
                <li>Blockchain Solutions</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3>Join</h3>
              <ul>
                <li>Careers at MetaLogic</li>
                <li>Internships</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3>Join us on Social Medias</h3>
              <tr className="d-md-flex  justify-content-evenly">
                <td>
                  <FaSquareWhatsapp style={{ width: "25px", height: "25px" }} />
                </td>
                <td>
                  <FaFacebook style={{ width: "25px", height: "25px" }} />
                </td>
                <td>
                  <FaInstagramSquare
                    style={{ width: "25px", height: "25px" }}
                  />
                </td>
                <td>
                  <FaLinkedin style={{ width: "25px", height: "25px" }} />
                </td>
              </tr>
            </div>
          </div>
          <p className="mt-5 text-center">
            &#169; Copyright {currentYear} MetaLogic. All right reserved.
          </p>
        </div>
      </footer>
    </>
  );
};
export default Footer;
