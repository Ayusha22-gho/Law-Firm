import React from "react";
import "./clients.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
export default function Index({clientsData}) {
 

  return (
    <div className="client-container">
      <div className="client-heading">
        <div className="client-heading-info">
          <p>What says our happy Clients</p>
        </div>
        <div className="carousel-icon">
        </div>
      </div> 
      <div className="swiper-container">
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        //onSwiper={setSwiperRef}
        slidesPerView={3}
        //centeredSlides={true}
        spaceBetween={30}
        // pagination={{
        //   type: 'fraction',
        // }}
        // navigation={true}
        navigation={{ nextEl: ".arrow-right", prevEl: ".arrow-left" }}
       
      >
        {clientsData.map((client) => (
        <SwiperSlide key = {client.id}>
          <div className="client-info">
            <div className="client-icon">
              <img src={client.avatar} alt="client-icon" />
            </div>
            <div className="client-name">
              <h1>
                {client.first_name} {client.last_name}
              </h1>
              <p>Ceo of Hunnt</p>
            </div>
            <div className="client-content">
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequatduis enim velit mollit Exer.
                sit aliqua dolor do amet sint. Velit officia
              </p>
            </div>
          </div>
        </SwiperSlide>
        ))}
      </Swiper>
      </div>
      <div className="arrow-left arrow">
        <img src="left.png" alt="left_navigation" />
      </div>
      <div className="arrow-right arrow">
        <img src="right.png" alt="right_navigation" />
      </div>
    </div>
  );
}
