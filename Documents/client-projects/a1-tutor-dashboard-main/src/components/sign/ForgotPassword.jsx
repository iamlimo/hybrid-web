import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import FormInput from "./FormInput";
import FormSuccess from "./FormSuccess";
import FormError from "./FormError";
import { publicFetch } from "../../utils/fetch";
import { ReactComponent as Logo } from "../../images/LOGO.svg";
import { ReactComponent as Fb } from "../../images/akar-icons_facebook-fill.svg";
import { ReactComponent as Ig } from "../../images/ant-design_instagram-filled.svg";

const LoginSchema = Yup.object().shape({
  email: Yup.string().required("Email is required"),
});

const ForgotPassword = () => {
  const [loginSuccess, setLoginSuccess] = useState();
  const [loginError, setLoginError] = useState();
  const [redirectOnLogin, setRedirectOnLogin] = useState(false);
  const submitCredentials = async (credentials) => {
    try {
      const { data } = await publicFetch.post(`/user/reset`, credentials, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setLoginSuccess(data.message);
      setLoginError(null);
      setRedirectOnLogin(true);
    } catch (error) {
      const { data } = error.response;
      console.log();
      setLoginError(data.message);
      setLoginSuccess(null);
    }
  };

  if (redirectOnLogin) {
    return <Redirect to={"/reset/verify"} />;
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
              <p className="form-login-header">Forgot Password</p>
              <p className="form-login-text">
                Please put in your Email below to Reset to your password
              </p>
            </div>
            <Formik
              initialValues={{
                email: "",
              }}
              onSubmit={(values) => submitCredentials(values)}
              validationSchema={LoginSchema}
            >
              {() => (
                <Form className="form">
                  {loginSuccess && <FormSuccess text={loginSuccess} />}
                  {loginError && <FormError text={loginError} />}

                  <div className="form-control">
                    <div className="mb-1"></div>
                    <FormInput
                      ariaLabel="Email"
                      name="email"
                      type="text"
                      placeholder="Email"
                    />
                  </div>

                  <div className="form-submit">
                    <button className="submit verify" type="submit">
                      Reset
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
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

export default ForgotPassword;
