import React, { useContext }  from "react";
import {motion} from 'framer-motion';
import {Link} from 'react-scroll';
import './Intro.css';
import {Github, LinkedIn, Instagram, Vector1, Vector2, Boy, Thumbup, Crown, Glassesimoji} from '../../img';
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";

function Intro() {

     // Transition
  const transition = { duration: 2, type: "spring" };
     // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
    return (  
        <div className="Intro" id="Intro">
        {/* left name side */}
        <div className="i-left">
          <div className="i-name">
            {/* yahan change hy darkmode ka */}
            <span style={{ color: darkMode ? "white" : "" }}>Hy! I Am</span>
            <span>Andrew Thomas</span>
            <span>
              Frontend Developer with high level of experience in web designing
              and development, producting the Quality work
            </span>
          </div>
          <Link to="contact" smooth={true} spy={true}>
            <button className="button i-button">Hire me</button>
          </Link>
          {/* social icons */}
          <div className="i-icons">
            <img src={Github} alt="" />
            <img src={LinkedIn} alt="" />
            <img src={Instagram} alt="" />
          </div>
        </div>
        {/* right image side */}
        <div className="i-right">
          <img src={Vector1} className="i-vector1" alt="" />
          <img src={Vector2} className="i-vector2" alt="" />
          <img src={Boy} className="i-boy" alt="" />
          {/* animation */}
          <motion.img
            initial={{ left: "-36%" }}
            whileInView={{ left: "-24%" }}
            transition={transition}
            src={Glassesimoji}
            alt=""
          />
  
          <motion.div
            initial={{ top: "-4%", left: "74%" }}
            whileInView={{ left: "68%" }}
            transition={transition}
            className="floating-div"
          >
            <FloatingDiv img={Crown} text1="Web" text2="Developer" />
          </motion.div>
  
          {/* animation */}
          <motion.div
            initial={{ left: "9rem", top: "18rem" }}
            whileInView={{ left: "0rem" }}
            transition={transition}
            className="floating-div"
          >
            {/* floatinDiv mein change hy dark mode ka */}
            <FloatingDiv img={Thumbup} text1="Best Design" text2="Award" />
          </motion.div>
  
          <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
          <div
            className="blur"
            style={{
              background: "#C1F5FF",
              top: "17rem",
              width: "21rem",
              height: "11rem",
              left: "-9rem",
            }}
          ></div>
        </div>
      </div>
    );
}

export default Intro;