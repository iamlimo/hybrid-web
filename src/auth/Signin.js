import React, { useState } from "react";
import { Button } from "../components/buttons/Button";
import google from "../assets/google.png";
import facebook from "../assets/facebook.png";
import home from "../assets/home.png";
import { IoEyeSharp, IoEyeOffSharp } from "react-icons/io5";
function Signin() {
  const [values, setValues] = useState({
    showPass: false,
  });
  const handlePassVisibilty = () => {
    setValues({
      ...values,
      showPass: !values.showPass,
    });
  };
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-6 w-[100%] h-[100vh]">
        <div className="flex flex-col justify-center items-center sm:bg-white bg-[#FFF6DE] col-span-2">
          <div className="flex justify-center items-center gap-5 mb-4">
            <Button variant="primary" imgSrc={google} imgAlt="google">
              Google
            </Button>
            <Button variant="primary" imgSrc={facebook} imgAlt="google">
              Facebook
            </Button>
          </div>
          <div className="flex justify-center items-center font-medium">Or</div>
          <form className="px-4 sm:px-6 lg:px-10 xl:px-14 w-[100%]">
            <div className="mb-4">
              <label className="mb-3 text-base font-medium">Full Name</label>
              <input
                className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg"
                type="text"
                placeholder="Limo"
              />
            </div>
            <div className="mb-4">
              <label className="mb-3 text-base font-medium">
                Email Address
              </label>
              <input
                className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg"
                type="text"
                placeholder="example@gmail.com"
              />
            </div>
            <div className="mb-4">
              <label className="mb-3 text-base font-medium">Username</label>
              <input
                className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg"
                type="text"
                placeholder="isaaclimo"
              />
            </div>
            <div className="mb-6 relative ">
              <label className="mb-3 text-base font-medium">Password</label>
              <input
                type={values.showPass ? "text" : "password"}
                label="Password"
                required
                className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg"
              />
              <span className="absolute right-[8px] top-[36px] text-white cursor-pointer">
                <span onClick={handlePassVisibilty}>
                {values.showPass ? <IoEyeSharp /> : <IoEyeOffSharp />}
                </span>
              </span>
            </div>
            <div className="flex items-start gap-[10px] text-base font-medium max-w-[340px]">
              <input type="checkbox" className="mt-[5px]" />
              <h5 className="">
                By creating an account you agree to the{" "}
                <a className="text-[#605CFF]">terms of use</a> and our
                <a className="text-[#605CFF]"> privacy policy.</a>
              </h5>
            </div>
            <div className="sm:my-6 my-4 ">
              <Button
                variant="secondary"
                paddingLess="true"
                className="w-[100%] h-[48px] text-[#141414] text-base"
              >
                Create account
              </Button>
            </div>

            <h5 className=" text-center text-base font-medium">
              Already have an account?{" "}
              <a href="/login" className="underline text-[#605CFF]">
                Login
              </a>
            </h5>
          </form>
        </div>
        <div className="md:col-span-4 bg-[#FFF6DE] hidden md:flex justify-center items-center ">
          <div className="relative">
            <img src={home} alt="home" />
            <h4 className="absolute xl:-left-24 lg:-left-0 lg:top-28 2xl:-left-[126px]  xl:top-24 md:left-5 md:top-20 lg:text-3xl text-lg font-medium">
              Expand your mind, <br />
              reading a book
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
