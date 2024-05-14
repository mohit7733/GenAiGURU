import axios from "axios";
import React, { useEffect, useState } from "react";
import { getBaseURL } from "../../api/config";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import Index3 from "./index3";
import { Navigate, useNavigate } from "react-router-dom";
import userimageIcon from "../../assets/images/person.png";
import { toast } from "react-toastify";

const Index2 = ({ isLoggedIn }) => {
  const [chatInputText, setChatInputText] = useState("");

  const token = JSON.parse(localStorage.getItem("token"));
  const [profileImage, setProfileImage] = useState();
  const [chatResponseText, setChatResponseText] = useState("");
  const [chatText, setChatText] = useState("");
  const [displayRespone, setDisplayRespone] = useState(false);
  const [loadingStatus, setLoadingStatus] = useState(false);
  const navigate = useNavigate();
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
    setChatText(chatInputText);
    if (!chatInputText.trim()) {
      toast.error("Please Type Anything...", {
        position: "top-center",
      });
      return;
    }

    setLoadingStatus(true);

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
      console.log(response);
      setLoadingStatus(false);
      setChatResponseText(response?.data?.choices[0]?.message?.content);
      setDisplayRespone(true);
    } catch (error) {
      console.error("Error chatGPTApi:", error.message);
    } finally {
      setChatInputText("");
    }
  };

  useEffect(() => {
    axios
      .get(`${getBaseURL()}/auth/user`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setProfileImage(response.data.profile_image);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
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
                      {/* <div className="form_group micBtns">
                        <button type="button">
                          <img
                            src="app/images/micIcon.png"
                            alt="Genaiguru micIcon"
                          />
                        </button>
                      </div> */}
                      <div className="form_group">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            chatGPTApi(chatInputText);
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
                {/* <p style={{ color: "white", marginBottom: "5px" }}>
                  {loadingText}
                </p> */}

                {loadingStatus && (
                  <div class="chat-bubble" style={{ marginBottom: "8px" }}>
                    <div class="typing">
                      <div class="dot"></div>
                      <div class="dot"></div>
                      <div class="dot"></div>
                    </div>
                  </div>
                )}
                {displayRespone ? (
                  <Index3
                    responseMessage={chatResponseText}
                    userSearchedText={chatText}
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
          <figure
            style={{ cursor: "pointerM" }}
            onClick={(e) => {
              e.preventDefault();
              navigate("/");
            }}
          >
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
              {loadingStatus && (
                <div class="chat-bubble" style={{ marginBottom: "8px" }}>
                  <div class="typing">
                    <div class="dot"></div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                  </div>
                </div>
              )}
              {displayRespone ? (
                <>
                  <div className="wrap">
                    <div className="userSearch flex">
                      <figure>
                        <img
                          src={profileImage ? profileImage : userimageIcon}
                        />
                      </figure>
                      <p>{chatText}</p>
                    </div>
                    <div className="searchResults innerSearchResult">
                      <div className="headings flex">
                        <figure>
                          <img
                            src="app/images/searchIconLogoInner.png"
                            alt="Genaiguru search logo icon"
                            title="Genaiguru search logo icon"
                          />
                        </figure>
                        <h5>Below we suggest you best article</h5>
                      </div>
                      <div className="boxes">
                        <a href="#">
                          <div
                            style={{ maxHeight: "135px", overflowY: "auto" }}
                          >
                            <p>{chatResponseText}</p>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </>
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
              {/* <div className="wrapperSearchs">
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
              </div> */}
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
                    {/* <div className="form_group micBtns">
                      <button type="button">
                        <img
                          src="app/images/micIcon.png"
                          alt="Genaiguru micIcon"
                        />
                      </button>
                    </div> */}
                    <div className="form_group">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          chatGPTApi(chatInputText);
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
