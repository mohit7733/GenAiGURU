import React, { useState } from "react";
import Header from "../../components/Layout/Header";
import Sidebar from "../../components/Layout/Sidebar";
import { useNavigate } from "react-router-dom";

const SpeakToText = () => {
  const navigate = useNavigate();
  const [transcription, setTranscription] = useState("");
  const [isSpeechRecognitionSupported, setIsSpeechRecognitionSupported] =
    useState(!!window.SpeechRecognition || !!window.webkitSpeechRecognition);

  const handleSpeechRecognition = () => {
    if (isSpeechRecognitionSupported) {
      const SpeechRecognition =
        window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setTranscription(transcript);
        console.log(transcript)

        // Save the transcribed text to the server
        // saveTranscriptionToServer(transcript);
      };

      recognition.start();
    }
  };

  // const saveTranscriptionToServer = async (transcript) => {
  //   try {
  //     // Make an HTTP request to your backend API to save the transcribed text
  //     const response = await fetch("/api/transcription", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({ text: transcript }),
  //     });

  //     if (response.ok) {
  //       console.log("Transcription saved successfully.");
  //     } else {
  //       console.error("Failed to save transcription.");
  //     }
  //   } catch (error) {
  //     console.error("Error saving transcription:", error);
  //   }
  // };
  return (
    <>
      <Header />
      <section class="mainWrapper mobileMainWrap flex">
        <Sidebar />
        <div class="rightSection innerRight desktopHelp">
          {/* <!-- help section start here --> */}

          <div class="help-section flex">
            <div class="genaiguruSelect flex">
              <figure>
                <img
                  src="app/images/genaiguruSelectImg.png"
                  alt="Genaiguru logo"
                  title="Genaiguru logo"
                />
              </figure>
              <select name="genaiguruSelect">
                <option value="genaiguru">Gen AI Guru</option>
                <option value="genaiguru2">genaiguru2</option>
                <option value="genaiguru3">genaiguru3</option>
              </select>
            </div>
            <div class="left_col">
              <div class="wrap">
                <h1>Hi there! how can I help you</h1>
                <div class="wrapperSearchs">
                  <div class="innerSearchForm flex">
                    <figure class="logoIcon">
                      <img
                        src="app/images/searchIconLogoInner.png"
                        alt="Genaiguru search icon image"
                        title="Genaiguru search icon image"
                      />
                    </figure>
                    <form action="" class="flex searchFormLong">
                      <div class="form_group">
                        <input type="text" placeholder="Ask me anything..." />
                      </div>
                      <div class="form_group micBtns">
                        <button type="button">
                          <img
                            src="app/images/micIcon.png"
                            alt="Genaiguru micIcon"
                          />
                        </button>
                      </div>
                      <div class="form_group">
                        <button
                          type="submit"
                          onClick={(e) => {
                            e.preventDefault();
                            navigate("/index3");
                          }}
                        >
                          <img
                            src="app/images/sendButtonIcon.png"
                            alt="Genaiguru sendButtonIcon"
                          />
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div>
                  {/* Add your Speak to text code here */}
                </div>
                {isSpeechRecognitionSupported ? (
                    <button onClick={handleSpeechRecognition}>Speak Now</button>
                  ) : (
                    <p>Speech recognition is not supported in your browser.</p>
                  )}
                  <p style={{color: "white"}}>Transcription: {transcription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpeakToText;
