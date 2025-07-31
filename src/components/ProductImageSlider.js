import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default function ProductImageSlider({ images = [], height = 'h-48', fit = 'contain' }) {
  return (
    <div className="w-full flex flex-col items-center">
      <div className={`relative w-full ${height}`}>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
          }}
          className="w-full h-full rounded product-swiper"
        >
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <img
                src={img}
                alt={`Product ${i}`}
                className={`w-full h-full object-${fit} rounded`}
                onError={(e) => {
                  e.target.src = 'https://via.placeholder.com/300x300';
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Dots below image */}
      <div className="swiper-pagination mt-2" />
    </div>
  );
}
