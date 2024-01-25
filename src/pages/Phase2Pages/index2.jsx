import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import Index3 from "./index3";
import { getBaseURL } from "../../api/config";
import axios from "axios";

const Index2 = ({ isLoggedIn }) => {
  const [chatInputText, setChatInputText] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));

  const [chatResponseText, setChatResponseText] = useState("");
  const [displayRespone, setDisplayRespone] = useState(false);
  // const [messages, setMessages] = useState([
  //   {
  //     // message: "Hello, I'm ChatGPT! Ask me anything!",
  //     message: "",
  //     sentTime: "just now",
  //     sender: "ChatGPT",
  //   },
  // ]);
  // const API_KEY = process.env.REACT_APP_CHAT_GPT_API_KEY;
  // const navigate = useNavigate();

  // const handleSendRequest = async (e) => {
  //   e.preventDefault();
  //   const newMessage = {
  //     chatInputText,
  //     direction: "outgoing",
  //     sender: "user",
  //   };
  //   setMessages((prevMessages) => [...prevMessages, newMessage]);
  //   try {
  //     const response = await processMessageToChatGPT([...messages, newMessage]);
  //     console.log(response);
  //     const content = response.choices[0]?.message?.content;
  //     setChatResponseText(content);
  //     if (content) {
  //       const chatGPTResponse = {
  //         message: content,
  //         sender: "ChatGPT",
  //       };
  //       setMessages((prevMessages) => [...prevMessages, chatGPTResponse]);
  //       setDisplayRespone(true);
  //     }
  //   } catch (error) {
  //     console.error("Error processing message:", error);
  //   } finally {
  //     console.log("API RUNNING AT FINALLY");
  //   }
  // };

  // async function processMessageToChatGPT(chatMessages) {
  //   const apiMessages = chatMessages.map((messageObject) => {
  //     const role = messageObject.sender === "ChatGPT" ? "assistant" : "user";
  //     const content = messageObject.chatInputText || ""; // Ensure content is not undefined or null

  //     return { role, content: content };
  //   });
  //   // console.log(apiMessages);

  //   const apiRequestBody = {
  //     model: "gpt-4",
  //     messages: [
  //       { role: "system", content: "I'm a Student using ChatGPT for learning" },
  //       ...apiMessages,
  //     ],
  //   };

  //   const response = await fetch("https://api.openai.com/v1/chat/completions", {
  //     method: "POST",
  //     headers: {
  //       Authorization: "Bearer " + API_KEY,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(apiRequestBody),
  //   });

  //   return response.json();
  // }

  const chatGPTApi = async (chatInputText) => {
    try {
      const response = await axios.post(
        `${getBaseURL()}/auth/send-chat-message`,
        {
          message: chatInputText,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log(response?.data?.[0]?.choices?.[0]?.message?.content);
      setChatResponseText(response?.data?.[0]?.choices?.[0]?.message?.content);
      setDisplayRespone(true);
      // setChatInputText("");
    } catch (error) {
      if (!chatInputText) {
        alert("Please Type Antything...");
        setDisplayRespone(false);
      }
      console.error("Error chatGPTApi:", error.message);
    }
  };
  return (
    <>
      <Header />
      <section className="mainWrapper mobileMainWrap flex">
        <Sidebar />
        <div className="rightSection innerRight desktopHelp">
          {/* <!-- help section start here --> */}

          <div className="help-section flex">
            <div className="genaiguruSelect flex">
              <figure>
                <img
                  src="app/images/genaiguruSelectImg.png"
                  alt="Genaiguru logo"
                />
              </figure>
              <select name="genaiguruSelect">
                <option value="genaiguru">Gen AI Guru</option>
                <option value="genaiguru2">genaiguru2</option>
                <option value="genaiguru3">genaiguru3</option>
              </select>
            </div>
            <div className="left_col">
              <div className="wrap">
                <h1>Hi there! how can I help you</h1>
                <div className="wrapperSearchs">
                  <div className="innerSearchForm flex">
                    <figure className="logoIcon">
                      <img
                        src="app/images/searchIconLogoInner.png"
                        alt="Genaiguru search icon image"
                      />
                    </figure>
                    <div className="flex searchFormLong">
                      <div className="form_group">
                        <input
                          type="text"
                          placeholder="Ask me anything..."
                          value={chatInputText}
                          onChange={(e) => setChatInputText(e.target.value)}
                        />
                      </div>
                      <div className="form_group micBtns">
                        <button type="button">
                          <img
                            src="app/images/micIcon.png"
                            alt="Genaiguru micIcon"
                          />
                        </button>
                      </div>
                      <div className="form_group">
                        <button onClick={() => chatGPTApi(chatInputText)}>
                          <img
                            src="app/images/sendButtonIcon.png"
                            alt="Genaiguru sendButtonIcon"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {displayRespone ? (
                  <Index3
                    responseMessage={chatResponseText}
                    userSearchedText={chatInputText}
                  />
                ) : (
                  <>
                    <p className="lightText">
                      What can I help you with today? Please select the closest
                      reply <br /> that applies to your need.
                    </p>
                    <div className="textBox">
                      <p>
                        <a
                          onClick={() =>
                            chatGPTApi(
                              "I need your help to finding some best articles about trendy technology."
                            )
                          }
                          style={{ cursor: "pointer" }}
                        >
                          I need your help to finding some best articles about{" "}
                          <br /> trendy technology.
                        </a>
                      </p>
                      <p>
                        <a
                          onClick={() =>
                            chatGPTApi(
                              "Suggest me some youtube videos about  AI current situation."
                            )
                          }
                          style={{ cursor: "pointer" }}
                        >
                          Suggest me some youtube videos about AI current
                          situation.
                        </a>
                      </p>
                      <p>
                        <a
                          onClick={() => chatGPTApi("Give me career solution.")}
                          style={{ cursor: "pointer" }}
                        >
                          Give me career solution.
                        </a>
                      </p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mobileHelp">
        <div className="mobileClose">
          <figure>
            <img
              src="app/images/mobileCloseIconImg.png"
              alt="mobile close icon"
            />
          </figure>
        </div>
        <div className="help-section flex">
          <div className="genaiguruSelect flex">
            <figure>
              <img
                src="app/images/genaiguruSelectImg.png"
                alt="Genaiguru genaiguruSelectImg"
              />
            </figure>
            <select name="genaiguruSelect">
              <option value="genaiguru">genaiguru</option>
              <option value="genaiguru2">genaiguru2</option>
              <option value="genaiguru3">genaiguru3</option>
            </select>
          </div>
          <div className="left_col">
            <div className="wrap">
              <h1>Hi there! how can I help you</h1>
              <div className="lightText flex">
                <figure>
                  <img
                    src="app/images/genaiguruSelectImg.png"
                    alt="Genaiguru small logo"
                  />
                </figure>
                <p>
                  What can I help you with today? Please select the closest
                  reply that applies to your need.
                </p>
              </div>
              <div className="textBox">
                <p>
                  <a href="#">
                    I need your help to finding some best articles about trendy
                    technology.
                  </a>
                </p>
                <p>
                  <a href="#">
                    Suggest me some youtube videos about AI current situation.
                  </a>
                </p>
                <p>
                  <a href="#">Give me career solution.</a>
                </p>
              </div>
              <div className="wrapperSearchs">
                <div className="innerSearchForm flex">
                  <figure className="logoIcon">
                    <img
                      src="app/images/searchIconLogoInner.png"
                      alt="Genaiguru search icon logo"
                    />
                  </figure>
                  <div className="flex searchFormLong">
                    <div className="form_group">
                      <input type="text" placeholder="Ask me anything..." />
                    </div>
                    <div className="form_group micBtns">
                      <button type="button">
                        <img
                          src="app/images/micIcon.png"
                          alt="Genaiguru micIcon"
                        />
                      </button>
                    </div>
                    <div className="form_group">
                      <button
                        type="submit"
                        onClick={(e) => {
                          e.preventDefault();
                          // navigate("/index3");
                          alert("Mobville ");
                        }}
                      >
                        <img
                          src="app/images/sendButtonIcon.png"
                          alt="Genaiguru sendButtonIcon"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Index2;
