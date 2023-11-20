import axios from "axios";
import { getBaseURL } from "./config";

export const login = (payload) => {
    let url = `${getBaseURL()}/auth/login`;
    return axios.post(url, payload);
  };