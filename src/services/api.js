import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.0.45:5555/",
});

export default api;
