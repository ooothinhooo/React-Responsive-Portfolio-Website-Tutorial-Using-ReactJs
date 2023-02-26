import React, { useContext } from "react";

import { themeContext } from "../../Context";
import './Services.css'
import {Heartemoji, Glasses, Humble} from "../../img";
import Card from "../Card/Card";
import Resume from "../../pdf/cv.pdf"
import {motion} from 'framer-motion';

function Services() {
     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 1, type: "spring" };

    return (
      <div className="services" id="services">
        {/* left side */}
        <div className="awesome">
          <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
          <span>Services</span>
          <spane>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry
            <br />
            Lorem Ipsum has been the industry's standard dummy
          </spane>
          <a href={Resume} download>
            <button className="button s-button">Download CV</button>
          </a>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>
        {/* right side  */}
        <div className="cards">
          <motion.div
            initial={{ left: "25rem" }}
            whileInView={{ left: "14rem" }}
            transition={transition}
            style={{ left: "14rem" }}
          >
            <Card
              emoji={Heartemoji}
              heading={"Tool"}
              details={"Git, PostMan, CloudFlare, Firebase"}
            />
          </motion.div>
          {/* second card */}
          <motion.div
            initial={{ left: "-11rem", top: "12rem" }}
            whileInView={{ left: "-4rem" }}
            transition={transition}
            style={{ top: "12rem", left: "-4rem" }}
          >
            <Card
              emoji={Glasses}
              heading={"Developer"}
              details={"HTML, CSS, JAVASCRIPTS, RAECTJS, BOOSTRAP,..."}
            />
          </motion.div>
          {/* third card */}
          <motion.div
            initial={{ top: "19rem", left: "25rem" }}
            whileInView={{ left: "12rem" }}
            transition={transition}
            style={{ top: "19rem", left: "12rem" }}
          >
            <Card
              emoji={Humble}
              heading={"UI/UX"}
              details={"Lorem Ipsum has been the industry's standard dummy "}
            />
          </motion.div>
          <div
            className="blur s-blur2 "
            style={{ background: "var(--purple)" }}
          ></div>
        </div>
      </div>
    );
}

export default Services;