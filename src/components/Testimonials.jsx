import { Styles } from "../styles/basicStyles";
import Wrapper from "./ui/Wrapper";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import "swiper/css";
import "swiper/css/pagination";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Titus Wealth",
      city: "Dar es salaam , Tanzania",
      review: "“it was so good and wonderfull ilike this hostel so much “",
      rating: 4.8,
    },
    {
      id: 2,
      name: "Dastani Ferdinandi",
      city: "Dar es salaam , Tanzania",
      review:
        "“very exclusive service. really a very comfortable hostel the mattress is very soft like the rendang meat that I met yesterday“",
      rating: 4.5,
    },
    {
      id: 3,
      name: "Gilbert Robert",
      city: "Dar es salaam , Tanzania",
      review:
        "“Good rooms and services and very friendly enviroment for study ”",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Jamal Ahmad",
      city: "Dar es salaam , Tanzania",
      review:
        "“Good rooms and services and very friendly enviroment for study ”",
      rating: 4.3,
    },
    {
      id: 5,
      name: "John Doe",
      city: "Dar es salaam , Tanzania",
      review:
        "“Good rooms and services and very friendly enviroment for study ”",
      rating: 4.3,
    },
  ];

  return (
    <section className="py-14">
      <Wrapper>
        <Swiper
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper py-8"
          breakpoints={{
            668: {
              // width: 576,
              slidesPerView: 1,
            },
            920: {
              // width: 768,
              slidesPerView: 2,
            },
            1280: {
              // width: 768,
              slidesPerView: 3,
            },
          }}
          style={{
            "--swiper-pagination-color": "#F4694C",
          }}
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="mySlide p-6 shadow-lg">
              <div className={`${Styles.flexBetween}`}>
                <div className={`${Styles.flexCenter} gap-3`}>
                  <div className="w-16 h-16 rounded-full bg-gray-400"></div>
                  <div className="space-y-2">
                    <h3 className="text-black font-semibold">
                      {testimonial.name}
                    </h3>
                    <span className="text-sm text-gray-500">
                      {testimonial.city}
                    </span>
                  </div>
                </div>
                <span className="text-orangeLight text-xs">
                  {testimonial.rating}
                </span>
              </div>
              <p className="text-sm text-gray-500 mt-6">{testimonial.review}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </section>
  );
};

export default Testimonials;
