import React from 'react';
import { Row, Col, Divider, Image } from 'antd';

const ProductsList = () => {
  return (
    <>
    <div className='mt-48'>
      <div className='bg-[#76c9f06b] p-10'>
      <Row justify="space-around">
        <Col span={4}className='text-center'>
          <Image
            width={200}
            height={200}
            src="/imgs/home-groundnut1.png"
            className="mb-2.5"
          />
          <h3 className='text-center text-blue-950 text-2xl'>Groundnut</h3>
        </Col>
        <Col span={4}>
        <div className="text-center mt-16 text-blue-950">
          <h2 className="text-2xl">Procured from the finest producers…</h2>
          <h3 className="text-xl">packed and dispatched with perfection</h3>
        </div>
        </Col>
        <Col span={4} className='text-center'>
        <Image
            width={200}
            height={200}
            src="/imgs/p1.png"
            className="mb-2.5"
          />
        <h3 className='text-center text-blue-950 text-2xl'>Turmeric</h3></Col>
      </Row>

      <Row justify="space-evenly">
        <Col span={4} className='text-center'> 
        <Image
            width={200}
            height={200}
            src="/imgs/p1.png"
            className="mb-2.5"
          />  <h3 className='text-center text-blue-950 text-2xl'>cumin</h3></Col>
        <Col span={4} className='text-center'> 
         <Image
            width={200}
            height={200}
            src="/imgs/home-groundnut1.png"
            className="mb-2.5"
          />
          <h3 className='text-center text-blue-950 text-2xl'>Chillies</h3></Col>
        <Col span={4} className='text-center'> 
         <Image
            width={200}
            height={200}
            src="/imgs/p1.png"
            className="mb-2.5"
          />
          <h3 className='text-center text-blue-950 text-2xl'>Rice</h3></Col>
      </Row>
    </div>
    </div>
    </>
  );
};

export default ProductsList;
