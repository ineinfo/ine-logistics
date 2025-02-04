"use client"
import React, { useState } from 'react';
import { Card, Form, Input, message, Modal } from 'antd'; // Import Modal

const Quality = () => {
    const [form] = Form.useForm();
    const [modal, contextHolder] = Modal.useModal(); // Use Modal's hook

    const handleSubmit = () => {
        form.validateFields()
            .then(values => {
                // If form is valid, show info modal for successful submission
                modal.info({
                    title: 'Success',
                    content: 'Your query has been submitted successfully!',
                    okText: 'OK',
                });

                // Reset form fields after successful submission
                form.resetFields();
            })
            .catch(errorInfo => {
                // If validation fails, show error modal
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
                <div className='mt-10 flex justify-center'>
                    <div className='p-20 flex'>
                        {/* First Card */}
                        <Card
                            title={<span className="text-blue-900 font-bold text-3xl">Our Quality Focus</span>}
                            bordered={false}
                            style={{
                                width: 500,
                                height: 400,
                                marginRight: '40px', // space between the cards
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div>
                                <p className='mt-3 text-2xl text-blue-900'>We are committed to supply quality and fresh produce to our customers and enhance the customer satisfaction levels through continual improvement in our process and to become leader in the market.</p>
                            </div>
                        </Card>

                        {/* Second Card */}
                        <Card
                            title={<span className="text-blue-900 font-bold text-3xl">Our Quality Focus</span>}
                            bordered={false}
                            style={{
                                width: 500,
                                height: 400,
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div>
                                <p className='mt-3 text-2xl text-blue-900'>The harvest calendar provides you with details on what crop grows in each month round the year. Some crops are available throughout the year whereas some are seasonal. The harvest schedule helps consumer make purchase decisions efficiently.</p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Form Section */}
                <div className='flex justify-center mt-10'>
                    <span className='text-blue-900 text-3xl'>Have a query on our products?</span>
                </div>
                <div className='flex justify-center mt-5'>
                    <Form
                        form={form}
                        layout="vertical"
                        style={{
                            width: '55%',
                        }}
                        onFinish={handleSubmit} // Handle form submission on finish
                    >
                        {/* First Row - Name and Email */}
                        <div className="flex justify-between space-x-4">
                            <Form.Item label="Name" name="name" style={{ width: '48%' }} rules={[{ required: true, message: 'Please enter your name' }]} >
                                <Input
                                    placeholder="Enter your name"
                                    style={{
                                        borderBottom: '2px solid #76c9f0',
                                    }}
                                />
                            </Form.Item>
                            <Form.Item label="Email" name="email" style={{ width: '48%' }} rules={[{ required: true, message: 'Please enter your email' }]} >
                                <Input
                                    placeholder="Enter your email"
                                    style={{
                                        borderBottom: '2px solid #76c9f0',
                                    }}
                                />
                            </Form.Item>
                        </div>

                        {/* Second Row - Phone and City */}
                        <div className="flex justify-between space-x-4">
                            <Form.Item label="Phone" name="phone" style={{ width: '48%'}} rules={[{ required: true, message: 'Please enter your phone' }]} >
                                <Input
                                    placeholder="Enter your phone"
                                    style={{
                                        borderBottom: '2px solid #76c9f0',
                                    }}
                                />
                            </Form.Item>
                            <Form.Item label="City" name="city" style={{ width: '48%' }} rules={[{ required: true, message: 'Please enter your city' }]} >
                                <Input
                                    placeholder="Enter your city"
                                    style={{
                                        borderBottom: '2px solid #76c9f0',
                                    }}
                                />
                            </Form.Item>
                        </div>

                        {/* Third Row - Query */}
                        <Form.Item label="Your Query" name="query" style={{ width: '100%' }} rules={[{ required: true, message: 'Please enter your query' }]} >
                            <Input.TextArea
                                placeholder="Enquiry"
                                rows={4}
                                style={{
                                    height: '130px',
                                    borderBottom: '2px solid #76c9f0',
                                    paddingTop: '4px', // Ensures text starts from the top
                                    paddingLeft: '10px', // Adds space from left for better alignment
                                    textAlign: 'left', // Ensures text is left-aligned
                                }}
                            />
                        </Form.Item>

                        <div className="flex justify-center mt-5">
                            <Form.Item>
                                <button
                                    type="submit" // Make the button submit the form
                                    className="mt-10 pt-2 pb-2 px-16 text-xl mb-24 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full"
                                >
                                    Submit
                                </button>
                            </Form.Item>
                        </div>
                    </Form>
                </div>
            </div>
            {contextHolder} {/* This is necessary to use modal context */}
        </>
    );
};

export default Quality;
