"use client"
import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const testimonials = [
  {
    img: '/imgs/logo.png', // Local image path
    text: 'We have been sourcing fresh fruits and vegetables from INE INTERNATIONAL for over a year now, and the quality is consistently top-notch. Their products are fresh, well-packaged, and delivered on time. Highly recommended',
    name: 'kLAUDIA MALINA',
  },
  {
    img: '/imgs/logo.png', // Local image path
    text: "INE INTERNATIONAL is a trustworthy partner for our spice imports. Their black pepper and cardamom are of superior quality, and they always ensure proper documentation and compliance with international standards. A pleasure to work with",
    name: 'SAIF SIDDQUI',
  },
  {
    img: '/imgs/logo.png', // Local image path
    text: "One of the best suppliers we have worked with! The team at INE INTERNATIONAL is professional, responsive, and ensures timely shipments. Their mangoes and bananas are always fresh and in perfect condition.",
    name: 'OLIVER',
  },
  {
    img: '/imgs/logo.png', // Local image path
    text: "We appreciate the competitive pricing and consistent quality from INE INTERNATIONAL. Their turmeric is highly aromatic and meet our quality standards. Looking forward to more business with them!",
    name: 'NATHAN',
  },
  {
    img: '/imgs/logo.png', // Local image path
    text: "We appreciate the affordability and quality of products from Global Trade Exports. Their pricing is fair, and they never compromise on product standards. A fantastic import-export company!",
    name: 'RASHID',
  },
];

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <section className="testimonial-section py-20" id="testimonials">
        <div className="container mx-auto px-6 md:px-24 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-900 mb-4">What Our Clients Say</h1>
          <p className="text-lg md:text-xl text-blue-800 mb-12">
            Here's what our satisfied clients say about the difference we've made to their businesses.
          </p>
          <Carousel
            responsive={responsive}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={2000}
            arrows={false}
            centerMode={false}
            itemClass="px-2 md:px-15"
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-items text-center p-6 md:p-10 bg-blue-900 rounded-lg w-full md:w-80 m-2 md:m-4 shadow-lg">
                <p className="testimonial-text text-white mb-4 line-clamp-4">{testimonial.text}</p>
                <h3 className="testimonial-title text-white font-bold mb-4">~ {testimonial.name}</h3>
              </div>
            ))}
          </Carousel>
        </div>
      </section>
      <style jsx>{`
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      `}</style>
    </>
  );
};

export default Testimonials;
