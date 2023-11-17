import { content } from "../Content";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";

const Testimonials = () => {
  const { Experiences } = content;
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-h-screen flex flex-col items-center">
      <h2 data-aos="fade-down" data-aos-once="true">
        {Experiences.title}
      </h2>

      <Swiper
        direction={"vertical"}
        pagination={{ clickable: true }}
        data-aos="fade-up"
        loop={true}
        spaceBetween={40}
        slidesPerView={1.7}
        onSlideChange={(e) => {
          setActiveIndex(e.realIndex);
        }}
        modules={[Pagination]}
        className="md:h-96 h-[750px] max-w-3xl w-[250px] sm:w-auto"
      >
        {Experiences.experiences_content.map((content, i) => (
          <SwiperSlide key={i}>
            <div
              className={`duration-500 mx-8 p-8 h-full rounded-2xl flex items-center justify-center gap-6 bg-[#393939] md:flex-row flex-col shadow-md shadow-primary/80 hover:shadow-lg hover:shadow-primary/80 ${
                activeIndex !== i && "scale-75 blur-sm"
              }`}
            >
              <img
                src={content.img}
                alt=""
                className="h-24 w-24 rounded-full"
              />
              <div className="flex flex-col items-center sm:items-start gap-2">
                <h4>{content.name}</h4>
                <p className="sm:text-base text-sm">{content.date}</p>
                <p className="sm:text-base text-sm">{content.position}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
