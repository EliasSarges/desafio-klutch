import axios from "axios";

const api = axios.create({
  baseURL: "http://18.222.14.24:5555/",
});

export default api;
