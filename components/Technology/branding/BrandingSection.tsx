"use client"
import { useEffect } from 'react';
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import SectionTitle from "../../Common/SectionTitle";

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const BrandingSection = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 400, // Animation duration in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []);
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  return (
    <>
      <section
        id="about"
        className="pt-16 md:pt-20 lg:pt-28"
        data-aos="fade-down"
      >
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Wordpress " title2='& CMS Development'
                  paragraph="We have experienced developers in various Domains to convert your dreams into reality"
                  mb="44px"
                />
                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="LMS Systems" />
                      <List text="Social Media Platform" />
                      <List text="E-Commerce Website Development" />
                    </div>
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Blogging Platforms" />
                      <List text="Affiliate Platforms" />
                      <List text="Corporate Agency Website" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/technology/whitetheme/webdevelopment.gif"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full rounded-3xl drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  {/* <video autoplay loop >
                    <source src="/images/webdev/webdev.webm" type="video/webm"  className='mx-auto max-w-full drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0'/>
                    Your browser does not support the video tag.
                  </video> */}
                  <Image
                    src="/images/technology/darktheme/webdevelopment.gif"
                    alt="about-image"
                    fill
                    className="mx-auto hidden max-w-full drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 md:py-20 lg:py-28" data-aos="fade-down">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src="/images/technology/whitetheme/webdevelopment2.gif"
                  alt="about image"
                  fill
                  className="rounded-3xl drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src="/images/technology/darktheme/webdevelopment2.gif"
                  alt="about image"
                  fill
                  className="hidden rounded-3xl drop-shadow-three dark:block dark:drop-shadow-none"
                />
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp max-w-[470px]" data-wow-delay=".2s">
                <div className="mb-9">
                  <SectionTitle
                    title="Why " title2='Choose Us ?'
                    paragraph="Fresh Spar Technologies has team of experts access to cutting edge technology in web development."
                    mb="44px"
                  />
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Experts in Planning
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We aim to create carefully planned web designs that are a
                    reflection of your brand.
                  </p>
                </div>
                <div className="mb-9">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    Solution Architecture
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                    We provide technology solutions that can matches with your
                    futuristic results
                  </p>
                </div>
                <div className="mb-1">
                  <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                    On-Time Delivery
                  </h3>
                  <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  By proper planning, execution and project management we aim for on-time delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className="pt-16 md:pt-20 lg:pt-28"
        data-aos="fade-down"
      >
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div className="-mx-4 flex flex-wrap items-center">
              <div className="w-full px-4 lg:w-1/2">
                <SectionTitle
                  title="Don't Have Any " title2='Tech Support ?'
                  paragraph="We have experienced developers in various Domains to convert your dreams into reality"
                  mb="44px"
                />
                <div
                  className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0"
                  data-wow-delay=".15s"
                >
                  <div className="mx-[-12px] flex flex-wrap">
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Premium quality" />
                      <List text="Maintainence" />
                      <List text="Security Support" />
                    </div>
                    <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                      <List text="Highly Customizable" />
                      <List text="Rich documentation" />
                      <List text="Developer friendly" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full px-4 lg:w-1/2">
                <div
                  className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px] lg:mr-0"
                  data-wow-delay=".2s"
                >
                  <Image
                    src="/images/technology/whitetheme/webdevelopment3.gif"
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full rounded-3xl drop-shadow-three dark:hidden dark:drop-shadow-none lg:mr-0"
                  />
                  <Image
                    src="/images/technology/darktheme/webdevelopment3.gif"
                    alt="about-image"
                    fill
                    className="mx-auto hidden max-w-full rounded-3xl drop-shadow-three dark:block dark:drop-shadow-none lg:mr-0"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingSection;
