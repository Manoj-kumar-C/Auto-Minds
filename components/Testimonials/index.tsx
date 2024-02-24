"use client"
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Testimonial } from "@/types/testimonial";
import SectionTitle from "../Common/SectionTitle";
import SingleTestimonial from "./SingleTestimonial";

const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Swathi Natarajan",
    designation: "CTO at Karmadev.in",
    content:
      "Driving the electric car with the automatic seatbelt and door functionalities felt like stepping into the future.",
    image: "/images/testimonials/auth-01.png",
    star: 5,
  },
  {
    id: 2,
    name: "Vishal Chinnasamy",
    designation: "Co-Founder @A2zTechvalley",
    content:
      "The electric car's automatic seatbelt and door system, combined with the app and voice control, offer a level of convenience and safety that I've never experienced before.",
    image: "/images/testimonials/auth-02.png",
    star: 5,
  },
  {
    id: 3,
    name: "SasiDharan",
    designation: "CTO @A2zTechvalley",
    content:
      "Our members are so impressed. It's intuitive. It's clean. It's distraction free. If you're building a community.",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
  {
    id: 4,
    name: "Kathir",
    designation: "Founder @Athiyan Kings Farms",
    content:
      "Experience with Fresh Spar has been exceptional, commit to rapid and high-quality product delivery .",
    image: "/images/testimonials/auth-03.png",
    star: 5,
  },
];
const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide === testimonialData.length - 1 ? 0 : prevSlide + 1));
    }, 500); // Change the duration as per your requirement (in milliseconds)

    return () => clearInterval(interval);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3, // Adjust the number of slides to show at once
    slidesToScroll: 1,
    autoplay: false, // Autoplay is handled separately with the interval
    speed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="dark:bg-bg-color-dark bg-gray-light relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Feedback Of our Product"
          paragraph="The feedback that we achieved from the journey of our product "
          center
        />
        <Slider {...settings}>
          {testimonialData.map((testimonial) => (
            <SingleTestimonial key={testimonial.id} testimonial={testimonial} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
