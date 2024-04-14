import { useEffect, useState } from "react";
import axios from "axios";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { Inter } from "next/font/google";
import Link from "next/link";
import Fruit from "@/components/landing/fruit";
import {
  CustomerTestimonials,
  HowItWorks,
  WhyChooseUs,
  fruitBanners,
} from "@/constants/fruits";
import WhyChoose from "@/components/landing/WhyChoose";
import HowItWork from "@/components/landing/HowItWork";
import About from "@/components/landing/About";
import CustomerTestimonial from "@/components/landing/CustomerTestimonial";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios({
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/show`,
      method: "GET",
    }).then((res) => {
      setProducts(res.data.slice(0, 6));
    });
  }, []);

  return (
    <main className={`${inter.className}`}>
      <ImageGallery
        items={fruitBanners}
        showNav={false}
        showPlayButton={false}
        showFullscreenButton={false}
        showThumbnails={false}
        showBullets
        useBrowserFullscreen
        lazyLoad={true}
      />
      <div className="px-6 md:px-20 flex flex-col mt-6 md:mt-14">
        <div className="flex flex-row items-center justify-between">
          <h1 className="text-[#770006] text-base md:text-xl font-medium">
            Explore Our Fruit Collection
          </h1>
          <Link
            href="/shop"
            className="border border-[#770006] py-1 px-3 text-[#770006] rounded-full text-sm"
          >
            View All
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 mt-4">
          {products.map(
            ({
              description,
              image,
              price,
              quantity,
              slug,
              title,
              unit,
              _id,
            }) => (
              <Fruit
                key={_id}
                title={title}
                image={image}
                price={price}
                unit={unit}
                slug={slug}
                quantity={quantity}
                description={description}
                _id={_id}
              />
            )
          )}
        </div>
        <div className="flex flex-row justify-between mt-6 md:mt-14">
          <h1 className="text-[#770006] text-xl font-medium">
            Why Choose Quintessential Fruits?
          </h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 mt-4">
          {WhyChooseUs.map(({ heading, description }, whyChooseUsIndex) => (
            <WhyChoose
              key={whyChooseUsIndex}
              heading={heading}
              description={description}
            />
          ))}
        </div>
        <div className="flex flex-row justify-between mt-6 md:mt-14">
          <h1 className="text-[#770006] text-xl font-medium">How It Works?</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 mt-4">
          {HowItWorks.map(({ image, heading }, howItWorkIndex) => (
            <HowItWork key={howItWorkIndex} image={image} heading={heading} />
          ))}
        </div>
      </div>
      <About />
      <div className="px-6 md:px-20 flex flex-col">
        <div className="flex flex-col mt-6 md:mt-14">
          <h1 className="text-[#770006] text-xl font-medium">
            Customer Testimonials
          </h1>
          <h2 className="text-sm">
            Hear what our satisfied customers have to say about their
            Quintessential Fruits experience.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10 lg:gap-16 mt-4">
          {CustomerTestimonials.map(({ testimonial, from }, customerIndex) => (
            <CustomerTestimonial
              testimonial={testimonial}
              from={from}
              key={customerIndex}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
