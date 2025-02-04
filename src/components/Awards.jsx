import React from 'react'
import { Row, Col, Divider, Image } from 'antd'

const Awards = () => {
  return (
    <div className='mt-10'>
      <div className='text-center text-4xl text-blue-900 font-bold'>Awards & Accreditations</div>
        <div className='mt-10 text-center'>
          <Row className='justify-center'>
            <Col span={8} className='justify-items-center'>
            <img src="/imgs/inelogo.png" alt="APEDA Export Award" className='w-2xs' />
              <h3 className='text-3xl text-blue-900'>Spices Board India</h3>
              <p className='text-xl text-blue-900 text-center'>We have genuinely acquired all the necessary certifications required in an authentic manner for the export of all spices from the Spices Board of India.</p>
            </Col>
            <div className="border-l-1 border-blue-800 mx-4"></div>
            <Col span={8} className='justify-items-center'>
              <img src="/imgs/inelogo.png" alt="APEDA Export Award" className='w-2xs'/>
              <h3 className='text-3xl text-blue-900'>APEDA Export Award</h3>
              <p className='text-xl text-blue-900 text-center'>We have genuinely acquired all the necessary certifications required in an authentic manner for the export of all spices from the Spices Board of India.</p>
            </Col>
          </Row>
          <button 
            className="mt-10 pt-1 pb-1 px-8 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full"
          >
            Learn More
          </button>
        </div>
    </div>
  )
}

export default Awards