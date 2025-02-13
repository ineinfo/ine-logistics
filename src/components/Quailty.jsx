"use client";
import React, { useState } from "react";
import { Card, Form, Input, message, Modal, Row, Col } from "antd"; // Import Modal and Grid components
import Loader from "./Loader"; // Import Loader component

const Quality = () => {
  const [form] = Form.useForm();
  const [modal, contextHolder] = Modal.useModal(); // Use Modal's hook
  const [loading, setLoading] = useState(false); // Add loading state

  const handleSubmit = async () => {
    setLoading(true); // Set loading to true when form submission starts
    try {
      const values = await form.validateFields();
      console.log(values, "Dhara");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        modal.success({
          title: "Success",
          content: "Your query has been submitted successfully!",
          okText: "OK",
        });
        form.resetFields();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      modal.error({
        title: "Error",
        content: "Failed to send the message. Please try again!",
        okText: "OK",
      });
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2800); // Add a delay of 2.5 seconds
    }
  };

  return (
    <>
      <div className="bg-[#76c9f06b]">
        <div className="mt-10 flex justify-center">
          <div className="flex flex-wrap pt-16 pb-5 justify-center gap-6">
            {/* First Card */}
            <Card
              title={
                <span className="text-blue-900 font-bold text-3xl md:text-4xl">
                  Our Quality Focus
                </span>
              }
              className="w-full sm:w-1/2 lg:w-2/5 xl:w-1/3 mb-5 shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300 bg-white"
              style={{
                height: "auto",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <div>
                <p className="mt-3 text-xl md:text-2xl text-blue-900 leading-relaxed">
                  At INE INTERNATIONAL we are committed to delivering the
                  highest quality vegetable, fruit, and spice products to our
                  global customers. Our focus on quality is central to our
                  mission of providing safe products to consumers.
                </p>
              </div>
            </Card>

            {/* Second Card */}
            <Card
              title={
                <span className="text-blue-900 font-bold text-3xl md:text-4xl">
                  Custom Trade Solution
                </span>
              }
              className="w-full sm:w-1/2 lg:w-2/5 xl:w-1/3 shadow-lg rounded-2xl hover:scale-105 transition-transform duration-300 bg-white"
              style={{
                height: "auto",
                display: "flex",
                flexDirection: "column",
                padding: "20px",
              }}
            >
              <div>
                <p className="mt-3 text-xl md:text-2xl text-blue-900 leading-relaxed">
                  INE International is here with its brand new set of offerings
                  with our state-of-the-art packaging for small businesses and
                  traders who are looking for business opportunities.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Form Section */}
        <div className="flex justify-center mt-10">
          <span className="text-blue-900 text-3xl text-center sm:text-left">
            Have a query on our products?
          </span>
        </div>
        <div className="flex justify-center mt-5">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit} // Handle form submission on finish
          >
            <Row gutter={[16, 16]} align={"middle"} justify={"center"}>
              {/* First Row - Name and Email */}
              <Col xs={20} sm={10}>
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    placeholder="Enter your name"
                    className="w-full sm:w-11/12"
                    style={{
                      borderBottom: "2px solid #76c9f0",
                    }}
                  />
                </Form.Item>
              </Col>
              <Col xs={20} sm={10}>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    className="w-full sm:w-11/12"
                    style={{
                      borderBottom: "2px solid #76c9f0",
                    }}
                  />
                </Form.Item>
              </Col>

              {/* Second Row - Phone and City */}
              <Col xs={20} sm={10}>
                <Form.Item
                  label="Phone"
                  name="phone"
                  rules={[
                    { required: true, message: "Please enter your phone" },
                    {
                      pattern: /^\d{10}$/,
                      message: "Phone number must be exactly 10 digits",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter your phone"
                    className="w-full sm:w-11/12"
                    style={{
                      borderBottom: "2px solid #76c9f0",
                    }}
                  />
                </Form.Item>
              </Col>
              <Col xs={20} sm={10}>
                <Form.Item
                  label="City"
                  name="city"
                  rules={[
                    { required: true, message: "Please enter your city" },
                  ]}
                >
                  <Input
                    placeholder="Enter your city"
                    className="w-full sm:w-11/12"
                    style={{
                      borderBottom: "2px solid #76c9f0",
                    }}
                  />
                </Form.Item>
              </Col>

              {/* Third Row - Query */}
              <Col xs={20} sm={20} md={20} lg={20} xl={20}>
                <Form.Item
                  label="Your Query"
                  name="query"
                  rules={[
                    { required: true, message: "Please enter your query" },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Enquiry"
                    className="w-full sm:w-11/12"
                    autoSize={{ minRows: 4, maxRows: 5 }}
                  />
                </Form.Item>
              </Col>
            </Row>

            <div className="flex justify-center mt-5">
              <Form.Item>
                <button
                  type="submit" // Make the button submit the form
                  className="mt-10 pt-2 pb-2 px-16 text-xl mb-24 border-2 border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white rounded-full"
                  disabled={loading} // Disable button when loading
                >
                  {loading ? <Loader /> : "Submit"}
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
