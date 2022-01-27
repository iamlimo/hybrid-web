import axios from "axios";
const base = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
const FnAuthFetch = (token) => {
  const authFetch = axios.create({
    baseURL: base,
    headers: {
      Authorization: `Bearer${token}`,
    },
  });
  return authFetch;
};

export { FnAuthFetch };
