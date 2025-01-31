import { Col, Flex, Row, Image } from 'antd'
import React from 'react'

const Products = () => {
  return (
    <Flex className="px-4 py-6 sm:px-8 lg:px-16">
      <div className='w-[40vw]'>
        <h1 className="text-4xl text-blue-900 font-bold mb-6 sm:text-5xl md:text-6xl lg:text-7xl">
          Products
        </h1>
        <p className="text-base text-gray-700 leading-relaxed sm:text-lg md:text-xl lg:text-lg">
          NK Agro Exports has built its reputation over the years with a huge customer base worldwide. 
          We offer a wide range of products without compromising on the quality. On-time delivery to our 
          global clients is highly prioritized, hence we work round the clock for speedy completion of orders.
        </p>
      </div>

<div className='w-[100%]'>
      <Row className="mt-6" gutter={[16, 16]}>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }}>
          <Image
            src="/imgs/products1.png"
            alt="Product Image"
            preview={false}
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 2 }}>
          <Image
            src="/imgs/products1.png"
            alt="Product Image"
            preview={false}
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }}>
          <Image
            src="/imgs/products1.png"
            alt="Product Image"
            preview={false}
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </Col>
      </Row>

      <Row className="mt-6" gutter={[16, 16]}>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }}>
          <Image
            src="/imgs/products1.png"
            alt="Product Image"
            preview={false}
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 2 }}>
          <Image
            src="/imgs/products1.png"
            alt="Product Image"
            preview={false}
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }}>
          <Image
            src="/imgs/products1.png"
            alt="Product Image"
            preview={false}
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </Col>
      </Row>

      <Row className="mt-6" gutter={[16, 16]}>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }}>
          <Image
            src="/imgs/products1.png"
            alt="Product Image"
            preview={false}
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col xs={{ span: 11, offset: 1 }} lg={{ span: 4, offset: 2 }}>
          <Image
            src="/imgs/products1.png"
            alt="Product Image"
            preview={false}
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </Col>
        <Col xs={{ span: 5, offset: 1 }} lg={{ span: 4, offset: 2 }}>
          <Image
            src="/imgs/products1.png"
            alt="Product Image"
            preview={false}
            width={200}
            height={200}
            style={{ objectFit: 'cover' }}
          />
        </Col>
      </Row>

      </div>
    </Flex>
  )
}

export default Products
