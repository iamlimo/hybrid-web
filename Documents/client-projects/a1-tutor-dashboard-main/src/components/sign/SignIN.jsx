import React, { useContext, useState } from "react";
import "./sign.css";
import { ReactComponent as Logo } from "../../images/LOGO.svg";
import { ReactComponent as Fb } from "../../images/akar-icons_facebook-fill.svg";
import { ReactComponent as Ig } from "../../images/ant-design_instagram-filled.svg";
import { Link, Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/authContext";
import { publicFetch } from "../../utils/fetch";

const SignIN = () => {
  const [redirect, setRedirect] = useState(false);
  const [signinSuccess, setSigninSuccess] = useState();
  const [signinError, setSigninError] = useState();
  const authContext = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (credential) => {
    try {
      const { data } = await publicFetch.post(`/user/login`, credential, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      authContext.setAuthState({
        token: data.access_token,
        userInfo: data.data,
        expiresAt: data.expires_in,
      });
      sessionStorage.setItem("temporaryUserdata", JSON.stringify(data));
      setRedirect(true);
      setSigninSuccess(data.message);
      setSigninError("");
      setRedirect(true);
    } catch ({ response }) {
      const { message } = response.data;
      setSigninError(message);
      setSigninSuccess("");
    }
  };
  if (redirect) {
    return <Redirect to={"/dashboard"} />;
  }
  return (
    <div className="concon">
      <header className="header signin">
        <div className="header-svg header-svg1">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="17.5" cy="17.5" r="17.5" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg2">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="20" cy="20" r="20" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg3">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="24" cy="24" r="24" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg4">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="28" cy="28" r="28" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg5">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="17.5" cy="17.5" r="17.5" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg8">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="20" cy="20" r="20" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg11">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="24" cy="24" r="24" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg14">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="28" cy="28" r="28" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg6">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="17.5" cy="17.5" r="17.5" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg9">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="20" cy="20" r="20" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg12">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="24" cy="24" r="24" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg15">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="28" cy="28" r="28" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg7">
          <svg
            width="35"
            height="35"
            viewBox="0 0 35 35"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="17.5" cy="17.5" r="17.5" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg10">
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="20" cy="20" r="20" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg13">
          <svg
            width="48"
            height="48"
            viewBox="0 0 48 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="24" cy="24" r="24" fill="white" />
          </svg>
        </div>
        <div className="header-svg header-svg16">
          <svg
            width="56"
            height="56"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.1" cx="28" cy="28" r="28" fill="white" />
          </svg>
        </div>
      </header>
      <div className="form-pos">
        <div className="form-pos-logo">
          <Logo />
        </div>
        <p>
          Welcome to A1tutor! Let’s help you get the highest grades in all your
          subjects and ace your examinations
        </p>
        <section className="form-section">
          <div className="form-wrapper">
            <div className="form-content">
              <p className="form-login-header">Login</p>
              <p className="form-login-text">
                Please put in your details below to log in to your profile
              </p>
            </div>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  {...register("email")}
                  required
                />
                {errors.email && "Email is required"}
              </div>
              <div className="form-control">
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  {...register("password")}
                  required
                />
                {errors.password && "Password is required"}
              </div>
              <div className="form-submit">
                <button className="submit">
                  Log in
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle opacity="0.1" cx="16" cy="16" r="16" fill="white" />
                    <path
                      d="M20.6308 17.131C20.5743 17.189 20.3609 17.437 20.1622 17.641C18.9971 18.924 15.9576 21.024 14.3668 21.665C14.1252 21.768 13.5144 21.986 13.188 22C12.8753 22 12.5772 21.928 12.2927 21.782C11.9381 21.578 11.6537 21.257 11.4978 20.878C11.3975 20.615 11.2416 19.828 11.2416 19.814C11.0857 18.953 11 17.554 11 16.008C11 14.535 11.0857 13.193 11.2133 12.319C11.228 12.305 11.3838 11.327 11.5543 10.992C11.867 10.38 12.4778 10 13.1315 10H13.188C13.6137 10.015 14.509 10.395 14.509 10.409C16.0141 11.051 18.9834 13.048 20.1768 14.375C20.1768 14.375 20.5129 14.716 20.659 14.929C20.887 15.235 21 15.614 21 15.993C21 16.416 20.8724 16.81 20.6308 17.131Z"
                      fill="#F4F7FB"
                    />
                  </svg>
                </button>
                <Link to="/auth/signup" className="register">
                  Register now
                </Link>
              </div>
            </form>
          </div>
          <div className="form-social">
            <Fb />
            <Ig />
          </div>
        </section>
      </div>
    </div>
  );
};

export default SignIN;
