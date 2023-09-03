import React from "react";
import { Button } from "../components/buttons/Button";
function Recover() {
  return (
    <div>
      <div className=" bg-[#FFF6DE]  ">
        <div className="flex items-center justify-center w-[100%] h-[100vh] ">
          <div className="sm:w-[500px] w-[100%] sm:h-[450px] sm:flex items-center  flex-col sm:bg-white rounded-[12px]  ">
            <h2 className="text-[20px] font-medium text-center mt-10 mb-10 sm:mb-24 ">
              Recover account
            </h2>
            <form className="px-4 sm:px-6 lg:px-10 xl:px-14 w-[100%] ">
              <div className="">
                <label className="mb-3 text-base font-medium">
                  Email Address
                </label>
                <input
                  className="sm:h-[48px] h-[42px] pl-2 outline-none w-[100%] text-[#FFF] placeholder:text-[#FFF] placeholder:text-sm bg-[#141414] rounded-lg"
                  type="text"
                  placeholder="example@gmail.com"
                />
              </div>

              <div className="flex items-start gap-[10px] text-base font-medium max-w-[340px]"></div>
              <div className=" my-4 ">
                <Button
                  variant="secondary"
                  paddingLess="true"
                  className="w-[100%] h-[48px] text-[#141414] text-base"
                >
                  Reset Your Password
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Recover;
