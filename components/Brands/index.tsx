// "Brands.tsx" file
"use client"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Brand } from "@/types/brand";
import Image from "next/image";
import brandsData from "./brandsData";

// SingleBrand component
const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, name } = brand;

  useEffect(() => {
    // Initialize AOS for each SingleBrand when it mounts
    AOS.init({
      duration: 400, // Animation duration in milliseconds
      once: true, // Whether animation should only happen once while scrolling down
    });
  }, []);

  return (
    <div className="mx-3 flex flex-col items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="follow noreferrer"
        className="relative h-20 w-20 opacity-70 transition hover:opacity-100"
      >
        <Image src={image} alt={name} height={80} width={80} className='rounded-full' />
      </a>
      <p className="text-xs mt-2 text-center"><b>{name}</b></p> {/* Display company name */}
    </div>
  );
};

// Brands component
const Brands = () => {
  useEffect(() => {
    // Initialize AOS when the component mounts
    AOS.init({
      duration: 400, // Animation duration in milliseconds
      once: false, // Whether animation should only happen once while scrolling down
    });
  }, []);

  return (
    <section className="pt-16 bg-gray-100 dark:bg-gray-900" data-aos="fade-up">
      <div className="container">
      <h2 className="text-4xl font-bold text-center text-black dark:text-white mb-8">Our <span className='text-green-500'> Clients </span></h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {brandsData.map((brand) => (
            <SingleBrand key={brand.id} brand={brand} />
          ))}
        </div>
      </div><br /><br />
    </section>
  );
};

export default Brands;
