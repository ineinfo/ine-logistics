"use client";
import { useState, useEffect } from "react";
import { Button, Select, Input, Card } from "antd";
import { MessageOutlined, RobotOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const { Option } = Select;

export default function Chatbot() {
  const [step, setStep] = useState(1);
  const [responses, setResponses] = useState({
    issueType: "",
    description: "",
    contactInfo: "",
  });
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);

  useEffect(() => {
    const showHintTimer = setInterval(() => {
      setShowHint(true);
      const hideHintTimer = setTimeout(() => {
        setShowHint(false);
      }, 4000);
      return () => clearTimeout(hideHintTimer);
    }, 10000);

    return () => clearInterval(showHintTimer);
  }, []);

  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  const handleChatToggle = () => setIsChatOpen(!isChatOpen);

  const handleSelectChange = (value) => {
    setResponses({ ...responses, issueType: value });
  };

  const handleInputChange = (e, field) => {
    setResponses({ ...responses, [field]: e.target.value });
  };

  const handleConfirm = () => {
    console.log("User Responses:", responses);
    alert("Thank you! Your response has been recorded.");
  };

  return (
    <div className="flex justify-center items-center bg-blue-100 relative">
      {showHint && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed bottom-[92px] right-20 max-w-xs bg-blue-500 text-white p-3 rounded-lg shadow-lg font-semibold 
               flex items-center gap-2"
          style={{
            borderTopRightRadius: "16px", // One side straight like WhatsApp
            borderTopLeftRadius: "16px", // One side straight like WhatsApp
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "0px",
          }}
        >
          <span>Hello! Need any assistance?</span>
        </motion.div>
      )}

      <div
        className="fixed bottom-6 cursor-pointer right-6 bg-white text-white shadow-lg  rounded-full h-16 flex items-center justify-center  hover:bg-gray-200 transition-all"
        onClick={handleChatToggle}
      >
        {/* <RobotOutlined className="text-3xl" /> */}
        <DotLottieReact
          src="https://lottie.host/54c36814-78d8-413b-bc74-ac64c70ec3b6/WaG8Co9qYB.lottie"
          loop
          autoplay
        />
      </div>

      {isChatOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          style={{
            borderTopRightRadius: "16px", // One side straight like WhatsApp
            borderTopLeftRadius: "16px", // One side straight like WhatsApp
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "0px",
          }}
          className="fixed bottom-[92px] right-20 w-80 bg-white shadow-xl rounded-lg p-6"
        >
          {step === 1 && (
            <div>
              <h2 className="text-lg font-semibold text-blue-800">
                What type of issue are you facing?
              </h2>
              <Select className="w-full mt-3" onChange={handleSelectChange}>
                <Option value="Billing">Billing Issue</Option>
                <Option value="Technical">Technical Issue</Option>
                <Option value="General">General Inquiry</Option>
              </Select>
              <Button
                className="mt-4 bg-blue-800 text-white"
                onClick={handleNext}
              >
                Next
              </Button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-lg font-semibold text-blue-800">
                Please describe your issue:
              </h2>
              <Input.TextArea
                className="w-full mt-3"
                rows={4}
                placeholder="Type here..."
                onChange={(e) => handleInputChange(e, "description")}
              />
              <div className="flex justify-between mt-4">
                <Button onClick={handleBack}>Back</Button>
                <Button className="bg-blue-800 text-white" onClick={handleNext}>
                  Next
                </Button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-lg font-semibold text-blue-800">
                Please enter your contact information:
              </h2>
              <Input
                className="w-full mt-3"
                placeholder="Email or phone number"
                onChange={(e) => handleInputChange(e, "contactInfo")}
              />
              <div className="flex justify-between mt-4">
                <Button onClick={handleBack}>Back</Button>
                <Button className="bg-blue-800 text-white" onClick={handleNext}>
                  Next
                </Button>
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-lg font-semibold text-blue-800">
                Confirm your responses:
              </h2>
              <p className="mt-3">
                <strong>Issue Type:</strong> {responses.issueType}
              </p>
              <p className="mt-2">
                <strong>Description:</strong> {responses.description}
              </p>
              <p className="mt-2">
                <strong>Contact Info:</strong> {responses.contactInfo}
              </p>
              <div className="flex justify-between mt-4">
                <Button onClick={handleBack}>Back</Button>
                <Button
                  className="bg-blue-800 text-white"
                  onClick={handleConfirm}
                >
                  Confirm
                </Button>
              </div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
}
