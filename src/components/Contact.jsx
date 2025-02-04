"use client";
import React, { useState } from 'react';
import { Form, Input, Modal } from 'antd';
import { PhoneOutlined, MailOutlined } from '@ant-design/icons';

const Contact = () => {
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
      <div className='bg-[#76c9f06b]'>
        <div className='flex justify-center'>
          <span className='text-blue-900 text-4xl font-bold mt-10'>Contact Us</span>
        </div>
        <div className='flex justify-center mt-10 px-10'>
          <div className='w-1/4 text-left text-2xl text-black-900 mt-5'>
            <p>INE INTERNATIONAL</p>
            {/* <p>BR Market, Tadepalligudem,</p> */}
            <p>AHMEDABAD,</p>
            <p>India 534102</p><br></br>
            <p className='text-blue-900'><PhoneOutlined /> +91 96666 66122</p>
            <p className='text-blue-900'><MailOutlined /> info@nkexpo.com</p>
            <p className='text-blue-900'><MailOutlined /> shiva@nkexpo.com</p>
          </div>
          <div className='w-2/3'>
            <Form
              form={form}
              layout="vertical"
              style={{ width: '80%', marginLeft: 'auto' }}
              onFinish={handleSubmit}
            >
              <div className="flex justify-between space-x-4">
                <Form.Item label="Name" name="name" style={{ width: '48%' }} rules={[{ required: true, message: 'Please enter your name' }]} >
                  <Input placeholder="Enter your name" style={{ borderBottom: '2px solid #76c9f0', fontSize: '16px' }} />
                </Form.Item>
                <Form.Item label="Email" name="email" style={{ width: '48%' }} rules={[{ required: true, message: 'Please enter your email' }]} >
                  <Input placeholder="Enter your email" style={{ borderBottom: '2px solid #76c9f0', fontSize: '16px' }} />
                </Form.Item>
              </div>
              <div className="flex justify-between space-x-4">
                <Form.Item label="Phone" name="phone" style={{ width: '48%' }} rules={[{ required: true, message: 'Please enter your phone' }]} >
                  <Input placeholder="Enter your phone" style={{ borderBottom: '2px solid #76c9f0', fontSize: '16px' }} />
                </Form.Item>
                <Form.Item label="City" name="city" style={{ width: '48%' }} rules={[{ required: true, message: 'Please enter your city' }]} >
                  <Input placeholder="Enter your city" style={{ borderBottom: '2px solid #76c9f0', fontSize: '16px' }} />
                </Form.Item>
              </div>
              <Form.Item label="Your Query" name="query" style={{ width: '100%' }} rules={[{ required: true, message: 'Please enter your query' }]} >
                <Input.TextArea
                  placeholder="Enquiry"
                  rows={4}
                  style={{
                    height: '130px',
                    borderBottom: '2px solid #76c9f0',
                    paddingTop: '4px',
                    paddingLeft: '10px',
                    textAlign: 'left',
                    fontSize: '16px',
                  }}
                />
              </Form.Item>
              <div className="flex justify-center mt-5">
                <Form.Item>
                  <button
                    type="submit"
                    className="mt-10 pt-5 pb-5 px-20 text-2xl mb-24 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full"
                  >
                    Submit
                  </button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </div>
        {contextHolder}
      </div>
    </>
  );
};

export default Contact;