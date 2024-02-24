import AccordionItem from '@/components/Accordian/AccordianItem'
import SectionTitle from '@/components/Common/SectionTitle'
import Image from 'next/image'
import React from 'react'

function AccordianWeb() {
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
              title="Why Choose Us ?"
              paragraph="Fresh Spar Technologies has team of experts access to cutting edge technology in web development."
              mb="44px"
            />
            <AccordionItem title="Experts in Planning">
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We aim to create carefully planned web designs that are a
                reflection of your brand.
              </p>
            </AccordionItem>
            <AccordionItem title="Solution Architecture">
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                We provide technology solutions that can matches with your
                futuristic results
              </p>
            </AccordionItem>
            <AccordionItem title="On-Time Delivery">
              <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                By proper planning, execution and project management we aim for on-time delivery
              </p>
            </AccordionItem>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </>
  )
}

export default AccordianWeb