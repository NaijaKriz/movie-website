import React from 'react'
import { FaUserFriends } from "react-icons/fa";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import {UserData} from "../../Data/MovieData"
import Titles from '../Titles'


function MovieCast() {
  return (
    <div className="my-12">
      <Titles title="Casts" Icon={FaUserFriends} />
      <div className="mt-10">
        <Swiper
          slidesPerView={4}
          spaceBetween={40}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          speed={1000}
          loop={true}
          modules={[Autoplay]}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            400: {
              slidesPerView: 2,
            },
            7768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 30,
            }
          }}
        >
          {
            UserData.map((user, i) => (
              <SwiperSlide key={i}>
                <div className="w-full p-3 italic text-xs text-text rounded flex-colo bg-dry border border-gray-800">
                  <img
                    src={`/images/${user.image}`}
                    alt={user.name}
                    className="w-full h-64 object-cover rounded mb-2" />
                    <p>{user.fullname}</p>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </div>
  );
}

export default MovieCast