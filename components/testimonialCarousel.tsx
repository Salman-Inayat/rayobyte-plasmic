import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const testimonials = [
  {
    name: "Chad G.",
    message:
      "“Extremely easy to use dashboard. Proxies are always up and running for me. I have had zero issues. I have already recommended you guys to 3 of my friends!”",
  },
  {
    name: "Valerie E.",
    message:
      "“I left my previous proxy provider because the bandwidth was horrible. It started out fine but got slower and slower the longer I stayed with them. It was to the point where I couldn’t even get a photo to load. Rayobyte has been fantastic and I’ve had no bandwidth issues at all. I really appreciate your service!”",
  },
  {
    name: "Kim C.",
    message:
      "“You have the best prices, your service is always up and running, everything just works.”",
  },
  {
    name: "Darren S.",
    message:
      "“Your service is fantastic and your support is even fantastic-er.”",
  },
];

function SampleNextArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#06b6bf",
        height: 40,
        width: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        marginTop: "-4rem",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props: { className: any; style: any; onClick: any }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        background: "#06b6bf",
        height: 40,
        width: 40,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "4px",
        marginTop: "-4rem",
      }}
      onClick={onClick}
    />
  );
}

const TestimonialCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <SampleNextArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),
    prevArrow: (
      <SamplePrevArrow
        className={undefined}
        style={undefined}
        onClick={undefined}
      />
    ),

    dotsClass: "button__bar",
  };

  return (
    <div className="testimonial-carousel-container">
      <div className="testimonial-carousel-sub-container">
        <h2> Testimonials</h2>
        <div className="testimonial-card-container">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-card-content">
                  <Image
                    src="/dashicons_testimonial-1.webp"
                    alt="Picture of the author"
                    width={80}
                    height={80}
                    className="testimonial-image"
                  />
                  <div className="testominal-content">
                    <h5>{testimonial.name}</h5>
                    <p>{testimonial.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
