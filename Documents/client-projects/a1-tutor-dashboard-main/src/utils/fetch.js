import axios from "axios";

const base = process.env.REACT_APP_BASE_URL || "http://localhost:3000";

const publicFetch = axios.create({
  baseURL: base,
});

export { publicFetch };
