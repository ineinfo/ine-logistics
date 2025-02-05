"use client"
import React, { useState } from 'react';
import { Card, Form, Input, message, Modal, Row, Col } from 'antd'; // Import Modal and Grid components

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
                    <div className='p-20 flex flex-wrap justify-center gap-5'>
                        {/* First Card */}
                        <Card
                            title={<span className="text-blue-900 font-bold text-3xl">Our Quality Focus</span>}
                            bordered={false}
                            className="w-full sm:w-1/2 lg:w-2/5 xl:w-1/3 mb-5"
                            style={{
                                height: '400px',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div>
                                <p className='mt-3 text-2xl text-blue-900'>At INE INTERNATIONAL we are committed to delivering the highest quality vegetable, fruit, and spice products to our global customers.Our focus on quality is central to our mission of providing safe products to consumers.</p>
                            </div>
                        </Card>

                        {/* Second Card */}
                        <Card
                            title={<span className="text-blue-900 font-bold text-3xl">Custom Trade Solution</span>}
                            bordered={false}
                            className="w-full sm:w-1/2 lg:w-2/5 xl:w-1/3"
                            style={{
                                height: '400px',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <div>
                                <p className='mt-3 text-2xl text-blue-900'>INE International is here  with its brand new set of offering with our
                                    state-ofart Packaging for small businesses and traders who are looking
                                    for business opportunities.</p>
                            </div>
                        </Card>
                    </div>
                </div>

                {/* Form Section */}
                <div className='flex justify-center mt-10'>
                    <span className='text-blue-900 text-3xl text-center sm:text-left'>Have a query on our products?</span>
                </div>
                <div className='flex justify-center mt-5'>
                    <Form
                        form={form}
                        layout="vertical"
                        // style={{
                        //     width: '55%',
                        // }}
                        onFinish={handleSubmit} // Handle form submission on finish
                    >
                        <Row gutter={[16, 16]} align={"middle"} justify={"center"}>
                            {/* First Row - Name and Email */}
                            <Col xs={20} sm={10}>
                                <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter your name' }]} >
                                    <Input
                                        placeholder="Enter your name"
                                        className="w-full sm:w-11/12"
                                        style={{
                                            borderBottom: '2px solid #76c9f0',
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={20} sm={10}>
                                <Form.Item label="Email" name="email" rules={[{ required: true, message: 'Please enter your email' }]} >
                                    <Input
                                        placeholder="Enter your email"
                                        className="w-full sm:w-11/12"
                                        style={{
                                            borderBottom: '2px solid #76c9f0',
                                        }}
                                    />
                                </Form.Item>
                            </Col>

                            {/* Second Row - Phone and City */}
                            <Col xs={20} sm={10}>
                                <Form.Item label="Phone" name="phone" rules={[{ required: true, message: 'Please enter your phone' }]} >
                                    <Input
                                        placeholder="Enter your phone"
                                        className="w-full sm:w-11/12"
                                        style={{
                                            borderBottom: '2px solid #76c9f0',
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={20} sm={10}>
                                <Form.Item label="City" name="city" rules={[{ required: true, message: 'Please enter your city' }]} >
                                    <Input
                                        placeholder="Enter your city"
                                        className="w-full sm:w-11/12"
                                        style={{
                                            borderBottom: '2px solid #76c9f0',
                                        }}
                                    />
                                </Form.Item>
                            </Col>

                            {/* Third Row - Query */}
                            <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                                <Form.Item label="Your Query" name="query" rules={[{ required: true, message: 'Please enter your query' }]} >
                                    <Input.TextArea
                                        placeholder="Enquiry"
                                        rows={4}
                                        className="w-full sm:w-11/12"
                                        style={{
                                            height: '130px',
                                            borderBottom: '2px solid #76c9f0',
                                            paddingTop: '4px', // Ensures text starts from the top
                                            paddingLeft: '10px', // Adds space from left for better alignment
                                            textAlign: 'left', // Ensures text is left-aligned
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                        </Row>

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
