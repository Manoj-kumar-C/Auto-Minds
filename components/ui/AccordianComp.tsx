import AccordionItem from '@/components/Accordian/AccordianItem';
import SectionTitle from '@/components/Common/SectionTitle';
import Image from 'next/image';
import React from 'react';

function AccordianComp({ imageSrcLight, imageSrcDark, title, paragraph, accordionItems }) {
  // Set default values for image source paths if not provided
  const defaultImageSrcLight = "/images/default-light-image.gif";
  const defaultImageSrcDark = "/images/default-dark-image.gif";

  return (
    <>
      <section className="py-16 md:py-20 lg:py-28" data-aos="fade-down">
        <div className="container">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              <div
                className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
                data-wow-delay=".15s"
              >
                <Image
                  src={imageSrcLight || defaultImageSrcLight} // Use default if prop not provided
                  alt="about image"
                  fill
                  className="rounded-3xl drop-shadow-three dark:hidden dark:drop-shadow-none"
                />
                <Image
                  src={imageSrcDark || defaultImageSrcDark} // Use default if prop not provided
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
                    title={title}
                    paragraph={paragraph}
                    mb="44px"
                  />
                  {accordionItems.map((item, index) => (
                    <AccordionItem key={index} title={item.title}>
                      <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                        {item.content}
                      </p>
                    </AccordionItem>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

// Set default values for image source paths if not provided
AccordianComp.defaultProps = {
  imageSrcLight: "/images/default-light-image.gif",
  imageSrcDark: "/images/default-dark-image.gif"
};

export default AccordianComp;
