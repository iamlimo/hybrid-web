import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "./authContext";

const FetchContext = createContext();
const { Provider } = FetchContext;

const FetchProvider = ({ children }) => {
  const authContext = useContext(AuthContext);
  const base = process.env.REACT_APP_BASE_URL || "http://localhost:3000";
  const authAxios = axios.create({
    baseURL: base,
  });
  authAxios.interceptors.request.use(
    (config) => {
      config.headers.Authorization = `Bearer ${authContext.authState.token}`;

      return config;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  authAxios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const code = error && error.response ? error.response.status : 0;
      if (code === 401 || code === 403) {
        console.log("error code", code);
      }
      return Promise.reject(error);
    }
  );
  // const logOut = async () => {
  //   authAxios
  //     .get("/user/logout")
  //     .then((res) => {
  //       console.log(res, "logot");
  //     })
  //     .catch((error) => {
  //       console.log(error.response);
  //     });
  // };

  return (
    <Provider
      value={{
        authAxios,
      }}
    >
      {children}
    </Provider>
  );
};

export { FetchContext, FetchProvider };
