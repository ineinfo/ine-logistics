"use client";
import React, { useState } from 'react';
import { Form, Input, Modal, Card } from 'antd';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';
import Navbar from './Navbar';

const ContactUs = () => {
  const [form] = Form.useForm();
  const [modal, contextHolder] = Modal.useModal();

  const handleSubmit = () => {
    form.validateFields()
      .then(values => {
        modal.info({
          title: 'Success',
          content: 'Your query has been submitted successfully!',
          okText: 'OK',
        });
        form.resetFields();
      })
      .catch(errorInfo => {
        modal.error({
          title: 'All fields are required!',
          content: 'Please fill in all the required fields before submitting the form.',
          okText: 'OK',
        });
      });
  };

  return (
    <>
  <Navbar/>

    <div className='bg-[#76c9f06b]'>
    <div className="flex justify-center items-center min-h-screen">
      <div className="relative flex flex-row items-center">
        {/* Dark Card (Left Side) */}
        <Card
          style={{
            // position: 'absolute',
            left: '5%', // Increased space from the left
            top: '20%',  // Moved the dark card slightly lower
            width: 320,
            height: 350,
            backgroundColor: '#2c3e50',
            color: 'white',
            padding: '20px',
            zIndex: 1,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <p className="font-bold">INE INTERNATIONAL</p>
          <p>AHMEDABAD,</p>
          <p>India 534102</p><br />
          <p className="flex items-center">
            <PhoneOutlined className="mr-2" /> +91 96666 66122
          </p>
          <p className="flex items-center">
            <MailOutlined className="mr-2" /> info@nkexpo.com
          </p>
          <p className="flex items-center">
            <MailOutlined className="mr-2" /> shiva@nkexpo.com
          </p>
        </Card>

        {/* White Card (Right Side with Form) */}
        <Card height="100%"
           title={
            <div className="flex justify-center font-bold text-2xl text-blue-900">
              Contact Us
            </div>
          }
          style={{
            width: 650,
            maxHeight:"650px",
            padding: '30px',
            position: 'relative',
            zIndex: 0,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginLeft: '-12%', 
          }}
        >
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            style={{ padding: '10px' , marginLeft: '25%'}}
          >
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]}>
              <Input placeholder="Enter your name" style={{ borderBottom: '2px solid #76c9f0', fontSize: '14px' }} />
            </Form.Item>
            <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]}>
              <Input placeholder="Enter your email" style={{ borderBottom: '2px solid #76c9f0', fontSize: '14px' }} />
            </Form.Item>
            <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please enter your phone' }]}>
              <Input placeholder="Enter your phone" style={{ borderBottom: '2px solid #76c9f0', fontSize: '14px' }} />
            </Form.Item>
            <Form.Item label="Your Query" name="query" rules={[{ required: true, message: 'Please enter your query' }]}>
              <Input
                placeholder="Enquiry"
                style={{
                  height: '80px',
                  borderBottom: '2px solid #76c9f0',
                  paddingTop: '4px',
                  paddingLeft: '10px',
                  textAlign: 'left',
                  fontSize: '14px',
                }}
              />
            </Form.Item>
            <div className="flex justify-center mt-5">
              <Form.Item>
                <button
                  type="submit"
                  className="mt-10 pt-2 pb-2 px-16 text-2xl mb-24 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full"
                >
                  Submit
                </button>
              </Form.Item>
            </div>
          </Form>
          {contextHolder}
        </Card>
      </div>
    </div>
    </div>

    </>
  );
};

export default ContactUs;
