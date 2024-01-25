import React, { useState } from "react";
import { getBaseURL } from "../../api/config";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import { PATH_MOBLIE_SETTINGS } from "../../routes";

const SendFeedback = () => {
  const [idea, setIdea] = useState("");
  const [errors, setErrors] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  const userId = JSON.parse(localStorage.getItem("UserId"));
  // validation for feedback
  const onSubmit = (event) => {
    event.preventDefault();
    const errors = validate1();
    setErrors(errors);
    let fd = new FormData();
    fd.append("user_id", userId);
    fd.append("comment", idea);
    selectedFiles?.map((e) => fd.append("media[]", e));
    axios
      .post(`${getBaseURL()}/send-feedback`, fd)
      .then((response) => {
        if (response.status === 200) {
          toast.success("Feedback Sent Successfully", {
            position: toast.POSITION.TOP_CENTER,
          });
          setIdea("");
          setSelectedFiles([]);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.log(error.response);
        } else if (error.request) {
          console.log("network error");
        } else {
          console.log(error);
        }
      });
  };
  const validate1 = () => {
    const error = {};
    if (!idea) {
      error["idea"] = "Feedback Required!";
    } else {
      error["idea"] = "";
    }
    return error;
  };

  const onchangeCheck = (key, value) => {
    const errors = {};
    if (!value) {
      errors[key] = key + "Required !";
    }
    setErrors(errors);
  };
  // code for get input img and video in feedback

  const FileInput = ({ onFilesChange }) => {
    const handleFilesChange = (e) => {
      const files = Array.from(e.target.files);
      onFilesChange(files);
    };

    return (
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={handleFilesChange}
      />
    );
  };

  const FeedbackGallery = ({ files }) => {
    return (
      <div
        style={{
          display: "flex",
        }}
      >
        {files.map((file, index) => (
          <div key={index} className="file-preview">
            {file.type.startsWith("image/") ? (
              <img
                width="100"
                height="100"
                src={URL.createObjectURL(file)}
                alt={`Image Preview ${index}`}
              />
            ) : file.type.startsWith("video/") ? (
              <div>
                <video
                  width="100"
                  height="100"
                  src={URL.createObjectURL(file)}
                  alt={`Video Preview ${index}`}
                />
              </div>
            ) : (
              <p>Unsupported file type</p>
            )}
          </div>
        ))}
      </div>
    );
  };
  const handleFilesChange = (files) => {
    setSelectedFiles([...selectedFiles, ...files]);
  };

  return (
    <>
      <div className="mobileHead flex">
        <Link to={PATH_MOBLIE_SETTINGS} className="backBtns">
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </Link>
      </div>
      <div className="sendfeedback">
        <div className="feedbackSection">
          <h5>Tell us the problem</h5>
          <div className="problem-container">
            <h3>Send us some feedback!</h3>
            <p>
              Do you have a suggestion or found some bug? Let us know in the
              below.
            </p>
          </div>
          <form action="" onSubmit={onSubmit}>
            <div className="form_group">
              <label for="">Describe your issue or idea*</label>
              <textarea
                name="feedback"
                value={idea}
                id=""
                cols="30"
                rows="5"
                placeholder="Type here"
                onChange={(e) => setIdea(e.target.value)}
                onKeyUp={onchangeCheck}
              ></textarea>
              {errors["idea"] && <div className="error">{errors.idea}</div>}
            </div>
            <div className="form_group">
              <p>Screenshot or videos (optional)</p>
              <div className="add-idea">
                <div className="wrapper">
                  <img
                    src="app/images/addIconsImg.png"
                    alt="Genaiguru addIconsImg"
                  />
                  <FileInput onFilesChange={handleFilesChange} />
                </div>
                {selectedFiles.length > 0 && (
                  <div>
                    <FeedbackGallery files={selectedFiles} />
                  </div>
                )}
              </div>
            </div>
            <div className="form_group">
              <button type="submit" className="loginBtn">
                Submit
              </button>
              <ToastContainer autoClose={1000} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default SendFeedback;
