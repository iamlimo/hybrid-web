import React from "react";
import { Button } from "../components/buttons/Button";

function Prompt() {
  return (
    <div>
      <div className=" bg-[#FFF6DE]  ">
        <div className="flex items-center justify-center w-[100%] h-[100vh] ">
          <div className="sm:w-[500px] w-[100%] sm:h-[450px] flex items-center justify-center flex-col gap-5 sm:bg-white rounded-[12px]  ">
            <h4 className="font-medium tex-[#141414] text-[22px]">
              Your account successfully created.
            </h4>

            <Button variant="secondary">Go to Home</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Prompt;
