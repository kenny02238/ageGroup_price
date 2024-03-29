import React from "react";
import { cn } from "../lib/utils";

const CardWrapper = ({ title, remark, errMsg, children }) => {
  return (
    <div className="col-span-1 flex flex-col justify-center">
      <div className="mb-2 text-lg text-[#999999]/[.9] font-medium tracking-wider cursor-default">
        {title}
      </div>
      {children}
      <div
        className={cn(
          "text-red-400 font-medium bg-[#FCE9E7] py-2 px-3 ",
          "rounded-lg h-[40px] flex items-center tracking-wide cursor-default",
          (errMsg === "" || !errMsg) && "invisible"
        )}
      >
        {errMsg}
      </div>
      <div
        className={cn(
          "text-[#999999]/[.9] font-medium tracking-wider",
          "flex justify-end h-[24px] cursor-default"
        )}
      >
        {remark}
      </div>
    </div>
  );
};

export default CardWrapper;
