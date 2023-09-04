import axios from "axios";

export const api = axios.create({
  baseURL: "https://lubank-back.onrender.com/api/",
  timeout: 20000,
});
