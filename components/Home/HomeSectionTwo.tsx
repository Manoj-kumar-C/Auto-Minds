"use client"
import Image from "next/image";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeSectionTwo = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 400, // Animation duration in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []);
  return (
    <section className="py-16 md:py-20 lg:py-28" data-aos="fade-down">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/hero/marketing-section.png"
                alt="Marketing"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/hero/marketing-section.png"
                alt="Marketing"
                fill
                className="drop-shadow-three hidden dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Ready to Elevate Your Brand?
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We understand your market landscape and competitors. Our research and analysis lay the groundwork for effective marketing strategies.
                </p>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Social Branding
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Online Branding plays a crucial role in promoting your brand.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                Tools and Technologies.
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                SEO, SMO, Google Analytics, Google MyBusiness, Google Trends, Google WebConsole.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSectionTwo;
