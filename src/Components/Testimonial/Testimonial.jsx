import React from "react";
import {Swiper, SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css/pagination";
import {Profile1,Profile2,Profile3,Profile4} from '../../img';
import './Testimonial.css';
import 'swiper/css';


function Testimonial() {
    const clients = [
        {
          img: Profile1,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: Profile2,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: Profile3,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
        {
          img: Profile4,
          review:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex officiis molestiae quod tempora laudantium, cumque error a nisi placeat quae exercitationem, maiores reiciendis! Eaque dicta minima, iure maiores dolorum sed.",
        },
      ];
    return ( 
        <div className=" t-wrapper">
            <div className="t-heading" id="testimonial">
                <span>Clients always get </span>
                <span>Exceptional Work </span>
                <span>from me...</span>
                <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
                <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

            </div>

            <Swiper
            // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
            >
                {clients.map((client,index) =>{
                    return (
                        <SwiperSlide key={index} >
                           <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
     );
}

export default Testimonial;