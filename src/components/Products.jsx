"use client";
import { Col, Flex, Row, Image } from 'antd'
import React, { useEffect, useState } from 'react'

const Products = () => {
  // State to control fade-in animation
  const [fadeIn, setFadeIn] = useState(false)

 // Trigger the fade-in effect with a delay when the component mounts
 useEffect(() => {
  const timer = setTimeout(() => {
    setFadeIn(true)
  }, 3000) // Delay the fade-in by 300ms
  return () => clearTimeout(timer) // Clean up the timer
}, [])


  return (
    <Flex justify='center' align='center' className="px-4 py-6 ">
      <div className='w-[30%]'>
        <h1 className="text-4xl text-blue-900 font-bold mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
          Products
        </h1>
        <p className="text-base text-gray-700 leading-relaxed sm:text-lg md:text-xl lg:text-lg">
          NK Agro Exports has built its reputation over the years with a huge customer base worldwide. 
          We offer a wide range of products without compromising on the quality. On-time delivery to our 
          global clients is highly prioritized, hence we work round the clock for speedy completion of orders.
        </p>
        <Image
          src="/imgs/products1.png"
          alt="New Product Image"
          preview={false}
          width={280}
          height={200}
          className={`object-cover mt-4 justify-center items-center transition-opacity duration-1000`}
        />
      </div>

      <div className='w-auto'>
        <Row className="mt-6" gutter={[16, 24]}>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className="relative">
            <Image
              src="/imgs/products1.png"
              alt="Product Image"
              preview={false}
              width={250}
              height={200}
              className={`object-cover transition-opacity duration-1000 ${fadeIn ? 'opacity-100 delay-200' : 'opacity-0'}`}
            />
            <div className="absolute bottom-16 right-9 font-bold">
              <span className="text-black text-lg">Product 1</span>
            </div>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} className="relative">
            <Image
              src="/imgs/products1.png"
              alt="Product Image"
              preview={false}
              width={250}
              height={200}
              className={`object-cover transition-opacity duration-1000 ${fadeIn ? 'opacity-100 delay-400' : 'opacity-0'}`}
            />
            <div className="absolute bottom-16 right-9 font-bold">
              <span className="text-black text-lg">Product 2</span>
            </div>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className="relative">
            <Image
              src="/imgs/products1.png"
              alt="Product Image"
              preview={false}
              width={250}
              height={200}
              className={`object-cover transition-opacity duration-1000 ${fadeIn ? 'opacity-100 delay-600' : 'opacity-0'}`}
            />
            <div className="absolute bottom-16 right-9 font-bold">
              <span className="text-black text-lg">Product 3</span>
            </div>
          </Col>
        </Row>

        <Row className="mt-6" gutter={[16, 16]}>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className="relative">
            <Image
              src="/imgs/products1.png"
              alt="Product Image"
              preview={false}
              width={250}
              height={200}
              className={`object-cover transition-opacity duration-1000 ${fadeIn ? 'opacity-100 delay-800' : 'opacity-0'}`}
            />
            <div className="absolute bottom-16 right-9 font-bold">
              <span className="text-black text-lg">Product 4</span>
            </div>
          </Col>
          <Col xs={{ span: 11, offset: 1 }} lg={{ span: 6, offset: 2 }} className="relative">
            <Image
              src="/imgs/products1.png"
              alt="Product Image"
              preview={false}
              width={250}
              height={200}
              className={`object-cover transition-opacity duration-1000 ${fadeIn ? 'opacity-100 delay-1000' : 'opacity-0'}`}
            />
            <div className="absolute bottom-16 right-9 font-bold">
              <span className="text-black text-lg">Product 5</span>
            </div>
          </Col>
          <Col xs={{ span: 5, offset: 1 }} lg={{ span: 6, offset: 2 }} className="relative">
            <Image
              src="/imgs/products1.png"
              alt="Product Image"
              preview={false}
              width={250}
              height={200}
              className={`object-cover transition-opacity duration-1000 ${fadeIn ? 'opacity-100 delay-1200' : 'opacity-0'}`}
            />
            <div className="absolute bottom-16 right-9 font-bold">
              <span className="text-black text-lg">Product 6</span>
            </div>
          </Col>
        </Row>
      </div>
    </Flex>
  )
}

export default Products
