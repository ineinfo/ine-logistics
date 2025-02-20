"use client";
import React, { useState } from "react";
import { Form, Input, Modal, Card, Grid, Button } from "antd";
import { PhoneOutlined, MailOutlined } from "@ant-design/icons";
import Navbar from "./Navbar";
import Loader from "./Loader";

const { useBreakpoint } = Grid;

const ContactUs = () => {
  const [form] = Form.useForm();
  const [modal, contextHolder] = Modal.useModal();
  const [loading, setLoading] = useState(false);
  const screens = useBreakpoint();
  const handleSubmit = async () => {
    setLoading(true);
    try {
      const values = await form.validateFields();

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
      }, 2500);
    }
  };

  return (
    <>
      <Navbar />

      <div className="bg-[#76c9f06b] mt-[80px]">
        <div className="flex justify-center items-center min-h-screen px-4 sm:px-0">
          <div className="relative flex flex-col sm:flex-row items-center w-full max-w-7xl">
            <Card
              style={{
                left: screens.sm ? "10%" : "0",
                top: "20%",
                width: 320,
                height: 350,
                backgroundColor: "#2c3e50",
                color: "white",
                padding: "20px",
                zIndex: 1,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: "25px",
                marginTop: screens.sm ? "0" : "30px",
              }}
              className="sm:mb-0"
            >
              <p className="font-bold">INE INTERNATIONAL</p>
              <p>504, SPG Empressa, Near Passport Office, Mithakali Six Road</p>
              <p>Navrangpura 380009</p>
              <p>India</p>
              <br />
              <p className="flex items-center">
                <PhoneOutlined className="mr-2" /> +91-9998112986
              </p>
              <p className="flex items-center">
                <PhoneOutlined className="mr-2" /> +91-7948916312
              </p>
              <p className="flex items-center">
                <MailOutlined className="mr-2" />
                export@ineinternational.in
              </p>
            </Card>

            <Card
              // height="100%"
              title={
                <div className="flex justify-center font-bold text-2xl text-blue-900">
                  Contact Us
                </div>
              }
              style={{
                width: "100%",
                maxWidth: 650,
                maxHeight: "650px",
                padding: screens.sm ? "30px" : "0",
                position: "relative",
                zIndex: 0,
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                marginLeft: "0",
                marginBottom: screens.sm ? "0" : "30px",
              }}
              // className="sm:ml-[-15%] mx-auto"
            >
              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
                className="w-full"
                style={{
                  paddingLeft: screens.sm ? "20%" : "0",
                  padding: "0",
                  margin: "0",
                }}
              >
                <Form.Item
                  label="Name"
                  name="name"
                  rules={[
                    { required: true, message: "Please enter your name" },
                  ]}
                >
                  <Input
                    placeholder="Enter your name"
                    style={{
                      borderBottom: "2px solid #76c9f0",
                      fontSize: "14px",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Email"
                  name="email"
                  rules={[
                    { required: true, message: "Please enter your email" },
                  ]}
                >
                  <Input
                    placeholder="Enter your email"
                    style={{
                      borderBottom: "2px solid #76c9f0",
                      fontSize: "14px",
                    }}
                  />
                </Form.Item>
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
                    style={{
                      borderBottom: "2px solid #76c9f0",
                      fontSize: "14px",
                    }}
                  />
                </Form.Item>
                <Form.Item
                  label="Your Query"
                  name="query"
                  rules={[
                    { required: true, message: "Please enter your query" },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Enquiry"
                    style={{
                      borderBottom: "2px solid #76c9f0",
                      fontSize: "14px",
                    }}
                    autoSize={{ minRows: 4, maxRows: 5 }}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    block
                    type="primary"
                    loading={loading}
                    style={{ backgroundColor: "#0580f1", color: "white" }}
                    htmlType="submit"
                  >
                    {loading ? <Loader /> : "Submit"}
                  </Button>
                </Form.Item>
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
