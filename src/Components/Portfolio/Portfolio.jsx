import React, { useContext }  from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import {
  Sidebar,
  Ecommerce,
  Hoc,
  Musicapp,
  Todo,
  Key,
  Ocit,
  Lro,
  Doxang,
  Find,
} from "../../img";
import "./Portfolio.css";
import "swiper/css";
import { themeContext } from "../../Context";

function Portfolio() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="portfolio" id="portfolio">
      {/* heading  */}
      <span style={{ color: darkMode ? "white" : "" }}> Recent Projects</span>
      <span>Protfolio</span>
      {/* slider  */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={Todo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Key} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ocit} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Lro} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Doxang} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Find} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Portfolio;
