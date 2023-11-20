export const getBaseURL = () => {
  return process.env.REACT_APP_BASE_API_URL;
};
export const getHeaders = () => {
  let token = JSON.parse(localStorage.getItem("tokenDetail"));
  return {
    token: token,
  };
};