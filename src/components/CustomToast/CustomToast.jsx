import React from "react";
import { toast } from "react-toastify";

const CustomToast = (message, options = {}) => {
  const defaultOptions = {
    className: "custom-toast",
    containerId: "custom-toast-container",
    autoClose: 1000, // Adjust as needed
    ...options,
  };

  toast(message, defaultOptions);
};

export default CustomToast;
