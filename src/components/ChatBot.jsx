"use client";
import { useState, useEffect, useRef } from "react";
import { Button, Select, Input, Flex, Image, Grid } from "antd";
import {
  CheckOutlined,
  CloseOutlined,
  MessageOutlined,
  RobotOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { countries, products } from "@/data";

const { Option } = Select;

const { useBreakpoint } = Grid;

export default function Chatbot() {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      type: "select",
      text: "Please select an option:",
      options: ["Option 1", "Option 2", "Option 3"],
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [buttonValue, setButtonValue] = useState("");
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showHint, setShowHint] = useState(true);
  const [step, setStep] = useState(1);
  const [userResponses, setUserResponses] = useState({});
  const chatRef = useRef(null);

  const screens = useBreakpoint();

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

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);

  const handleChatToggle = () => {
    setIsChatOpen(!isChatOpen);
    setTimeout(() => {
      setMessages([
        {
          sender: "bot",
          type: "select",
          text: "Please select an option:",
          options: ["Option 1", "Option 2", "Option 3"],
        },
      ]);
      setStep(1);
      setUserResponses({});
    }, 1000);
  };

  const handleUserMessage = (message) => {
    setMessages((prev) => [
      ...prev,
      { sender: "user", type: "text", text: message },
    ]);
  };

  const handleBotMessage = (message, type = "text", options = []) => {
    setMessages((prev) => [
      ...prev,
      { sender: "bot", type, text: message, options },
    ]);
  };

  const handleSelectChange = (value) => {
    handleUserMessage(value);
    if (step === 1) {
      setUserResponses((prev) => ({ ...prev, selectedOption: value }));
      setTimeout(() => {
        handleBotMessage("Please enter your name:", "input");
        setStep(2);
      }, 1000);
    } else if (step === 6) {
      setUserResponses((prev) => ({ ...prev, country: value }));
      setTimeout(() => {
        handleBotMessage("Please enter the quality:", "input");
        setStep(7);
      }, 1000);
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSend = () => {
    if (!inputValue.trim()) {
      handleBotMessage("Please provide a valid input.");
      return;
    }

    if (step === 2 && !/^[a-zA-Z\s]+$/.test(inputValue)) {
      handleBotMessage("Please enter a valid name.");
      return;
    }

    if (step === 3 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputValue)) {
      handleBotMessage("Please enter a valid email address.");
      return;
    }

    if (
      step === 5 &&
      (!/^\d+(\.\d+)?$/.test(inputValue) || parseFloat(inputValue) < 1)
    ) {
      handleBotMessage("Please enter a valid quantity (minimum 1).");
      return;
    }

    handleUserMessage(inputValue);

    if (step === 2) {
      setUserResponses((prev) => ({ ...prev, name: inputValue }));
      setTimeout(() => {
        handleBotMessage("Please enter your email:", "input");
        setStep(3);
      }, 1000);
    } else if (step === 3) {
      setUserResponses((prev) => ({ ...prev, email: inputValue }));
      setTimeout(() => {
        handleBotMessage("Please enter the packaging size:", "input");
        setStep(4);
      }, 1000);
    } else if (step === 4) {
      setUserResponses((prev) => ({ ...prev, packagingSize: inputValue }));
      setTimeout(() => {
        handleBotMessage("Please enter the quantity in tonnes:", "input");
        setStep(5);
      }, 1000);
    } else if (step === 5) {
      setUserResponses((prev) => ({ ...prev, quantity: inputValue }));
      setTimeout(() => {
        handleBotMessage("Importing country:", "select", [
          "Country 1",
          "Country 2",
          "Country 3",
          "Country 4",
        ]);
        setStep(6);
      }, 1000);
    } else if (step === 6) {
      setUserResponses((prev) => ({ ...prev, country: inputValue }));
      setTimeout(() => {
        handleBotMessage("Please enter the quality:", "input");
        setStep(7);
      }, 1000);
    } else if (step === 7) {
      setUserResponses((prev) => ({ ...prev, quality: inputValue }));
      setTimeout(() => {
        handleBotMessage("Please enter any additional information:", "input");
        setStep(8);
      }, 1000);
    } else if (step === 8) {
      setUserResponses((prev) => ({ ...prev, additionalInfo: inputValue }));
      setTimeout(() => {
        handleBotMessage(
          <>
            <strong>Confirm your details:-</strong> <br />
            <strong>Option:</strong> {userResponses.selectedOption} <br />
            <strong>Name:</strong> {userResponses.name} <br />
            <strong>Email:</strong> {userResponses.email} <br />
            <strong>Packaging Size:</strong> {userResponses.packagingSize}{" "}
            <br />
            <strong>Quantity:</strong> {userResponses.quantity} <br />
            <strong>Country:</strong> {userResponses.country} <br />
            <strong>Quality:</strong> {userResponses.quality} <br />
            <strong>Additional Info:</strong> {inputValue}
          </>,
          "button"
        );
        setStep(9);
      }, 1000);
    } else if (step === 9 && buttonValue === "yes") {
      setUserResponses((prev) => ({ ...prev, confirmation: inputValue }));
      setTimeout(() => {
        handleBotMessage("Thank you! Your information has been submitted. 🎉");
        setStep(10);
      }, 1000);
    } else {
      setStep(1);
    }

    setInputValue("");
  };

  const handleYes = async () => {
    handleUserMessage("Yes");
    setButtonValue("yes");

    setTimeout(() => {
      handleBotMessage("Thank you! Your information has been submitted. 🎉");
      setStep(10);
    }, 1000);

    console.log("userResponse", userResponses);

    try {
      const response = await fetch("/api/bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userResponses),
      });

      const result = await response.json();
      if (result.success) {
        console.log("Email sent successfully!");
      } else {
        console.error("Failed to send email:", result.message);
      }
    } catch (error) {
      console.error("Error sending email:", error);
    }
  };

  const handleNo = () => {
    handleUserMessage("No");
    setButtonValue("no");

    setTimeout(() => {
      handleBotMessage(
        "Restarting the process if you want to change the details."
      );

      setTimeout(() => {
        setMessages([
          {
            sender: "bot",
            type: "select",
            text: "Please select an option:",
            options: ["Option 1", "Option 2", "Option 3"],
          },
        ]);
        setStep(1);
        setUserResponses({});
      }, 1000);
    }, 1000);
  };

  return (
    <div className="flex justify-center items-center bg-blue-100 relative">
      {showHint && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          className="fixed sm:bottom-[92px] bottom-[68px] right-12 md:right-20 max-w-xs bg-blue-500 text-white p-3 rounded-lg shadow-lg font-semibold flex items-center gap-2"
          style={{
            borderTopRightRadius: "16px",
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "0px",
          }}
        >
          <span>Hello! Need any assistance?</span>
        </motion.div>
      )}

      <div
        className="fixed bottom-6 cursor-pointer right-4 md:right-6 bg-white text-white shadow-lg rounded-full sm:h-16 h-10 flex items-center justify-center hover:bg-gray-200 transition-all"
        onClick={handleChatToggle}
      >
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
          className="fixed sm:bottom-[92px] bottom-[68px] right-12 md:right-20 w-72 md:w-80 bg-white shadow-xl rounded-lg p-4 flex flex-col"
          style={{
            borderTopRightRadius: "16px",
            borderTopLeftRadius: "16px",
            borderBottomLeftRadius: "16px",
            borderBottomRightRadius: "0px",
          }}
        >
          <div
            className="overflow-y-auto h-72 md:h-80 w-64 md:w-72 mx-auto"
            style={{ scrollbarWidth: "none" }}
            ref={chatRef}
          >
            {messages.map((msg, index) => (
              <div
                key={index}
                style={{ alignItems: "end" }}
                className={`flex text-sm ${
                  msg.sender === "user" ? "justify-end" : "justify-start"
                } mb-2`}
              >
                {msg.sender === "bot" && (
                  <RobotOutlined className="mr-2 text-blue-600 text-xl" />
                )}
                <div
                  className={`p-3 rounded-lg shadow-md max-w-xs ${
                    msg.sender === "user"
                      ? "bg-gradient-to-r from-blue-500 to-blue-700 text-white"
                      : "bg-gradient-to-r from-gray-200 to-gray-400 text-black"
                  }`}
                  style={{
                    borderTopRightRadius: "16px",
                    borderTopLeftRadius: "16px",
                    borderBottomLeftRadius:
                      msg.sender === "user" ? "16px" : "0px",
                    borderBottomRightRadius:
                      msg.sender === "user" ? "0px" : "16px",
                  }}
                >
                  {msg.type === "select" && msg.options ? (
                    <Select
                      className="w-full"
                      onChange={handleSelectChange}
                      defaultValue={msg.text}
                      dropdownStyle={{
                        maxHeight: screens.sm ? "23vh" : "33vh",
                        overflow: "auto",
                        scrollbarWidth: "none",
                        minWidth: screens.sm ? "13vw" : "64vw",
                      }}
                      disabled={!step === 1 || !step === 6}
                    >
                      {step === 1 && (
                        <>
                          {products.map((option, i) => (
                            <Option key={i} value={option.name}>
                              <Flex gap={5} align="center">
                                <span>
                                  <Image
                                    preview={false}
                                    src={option.image}
                                    height={40}
                                    width={50}
                                    alt={i}
                                    style={{ objectFit: "cover" }}
                                  />
                                </span>
                                <span>{option.name}</span>
                              </Flex>
                            </Option>
                          ))}
                        </>
                      )}

                      {step === 6 && (
                        <>
                          {countries.map((option, i) => (
                            <Option key={i} value={option.name}>
                              {option.name}
                            </Option>
                          ))}
                        </>
                      )}
                    </Select>
                  ) : msg.type === "button" ? (
                    <>
                      <div>{msg.text}</div>
                      <Flex
                        justify="space-between"
                        className="w-48 md:w-56"
                        style={{ marginTop: "10px" }}
                      >
                        <Button
                          type="primary"
                          icon={<CheckOutlined />}
                          onClick={handleYes}
                          style={{
                            backgroundColor: "#52c41a", // Green color
                            borderColor: "#52c41a",
                            borderRadius: "8px",
                            fontWeight: "bold",
                          }}
                          hoverable={{ backgroundColor: "#46b015" }} // Slightly darker green on hover
                        >
                          Yes
                        </Button>

                        <Button
                          type="primary"
                          danger
                          icon={<CloseOutlined />}
                          onClick={handleNo}
                          style={{
                            borderRadius: "8px",
                            fontWeight: "bold",
                          }}
                        >
                          No
                        </Button>
                      </Flex>
                    </>
                  ) : (
                    msg.text
                  )}
                </div>
                {msg.sender === "user" && (
                  <UserOutlined className="ml-2 text-blue-600 text-xl" />
                )}
              </div>
            ))}
          </div>

          {step !== 1 &&
            step !== 9 &&
            step !== 10 &&
            step !== 6 &&
            step <= 9 && (
              <div className="flex items-center gap-2 mt-4">
                <Input
                  autoFocus={true}
                  className="flex-1 mr-2"
                  placeholder="Type your answer..."
                  value={inputValue}
                  onChange={handleInputChange}
                />
                <Button
                  color="blue"
                  variant="solid"
                  className="bg-blue-800 text-white"
                  onClick={handleSend}
                >
                  Send
                </Button>
              </div>
            )}
        </motion.div>
      )}
    </div>
  );
}
