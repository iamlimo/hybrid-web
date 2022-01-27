import "./sign.css";
import React, { useState } from "react";
import { ReactComponent as Logo } from "../../images/LOGO.svg";
import { ReactComponent as Fb } from "../../images/akar-icons_facebook-fill.svg";
import { ReactComponent as Ig } from "../../images/ant-design_instagram-filled.svg";
import { Redirect } from "react-router-dom";
import { useForm } from "react-hook-form";
import { publicFetch } from "../../utils/fetch";

const Verify = () => {
  const [redirect, setRedirect] = useState(false);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    let { category_id, email, first_name, last_name, phone } = JSON.parse(
      sessionStorage.getItem("temporaryUserdata")
    );

    publicFetch
      .post(
        `/user/verify`,
        {
          category_id,
          email,
          first_name,
          last_name,
          phone,
          verification_code: data.verification_code,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        setRedirect(true);
        sessionStorage.clear();
      })
      .catch((error) => console.warn(error));
  };

  if (redirect) {
    return (
      <Redirect
        to={{
          pathname: "/student/login",
        }}
      />
    );
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
              <p className="form-login-header">Verify</p>
              <p className="form-login-text">
                Please put in your verification code
              </p>
            </div>
            <form className="form">
              <div className="form-control">
                <input
                  {...register("verification_code")}
                  type="text"
                  placeholder="verification code"
                  id="verification"
                />
                {errors.verification?.type === "required" &&
                  "verification code is required"}
              </div>
              <div className="form-submit">
                <button
                  type="button"
                  onClick={handleSubmit(onSubmit)}
                  className="submit verify"
                >
                  Verify
                </button>
                <button
                  onClick={() => {
                    let { email } = JSON.parse(
                      sessionStorage.getItem("temporaryUserdata")
                    );

                    console.log(email);
                    publicFetch
                      .post(
                        `user/resend/verify`,
                        {
                          email,
                        },
                        {
                          headers: {
                            "Content-Type": "application/json",
                          },
                        }
                      )
                      .then((res) => {
                        console.log(res);
                      })
                      .catch((error) => console.warn(error));
                  }}
                  type="button"
                  className="submit verify"
                >
                  Resend Code
                </button>
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

export default Verify;
