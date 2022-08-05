import React,  { useContext }  from "react";
import './Experience.css';
import { themeContext } from "../../Context";
function Experience() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    return ( 
        <div className="experience" id="experience">
            <div className="achievement" style={{color: darkMode?'var(--orange)':''}}>
                <div className="circle">8+</div>
                <span>year</span>
                <span>Experience</span>
            </div>
            <div className="achievement" style={{color: darkMode?'var(--orange)':''}}>
                <div className="circle">20+</div>
                <span>completed</span>
                <span>Projected</span>
            </div>
            <div className="achievement" style={{color: darkMode?'var(--orange)':''}}>
                <div className="circle">5+</div>
                <span>Companies</span>
                <span>Work</span>
            </div>
        </div>
     );
}

export default Experience;