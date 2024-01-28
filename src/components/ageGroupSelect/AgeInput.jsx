import { useState, useEffect, useRef } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { nanoid } from "nanoid";
import { cn } from "../../lib/utils";
const AgeInput = ({ direction, ageGroup, setAgeGroup, index }) => {
  const [isShow, setIsShow] = useState(false);
  const containerRef = useRef(null);
  const range = direction === "min" ? ageGroup[1] + 1 : 20 - ageGroup[0] + 1;

  // 處理點擊input外的事件
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsShow(false);
      }
    };
    document.addEventListener("click", handleOutsideClick, { capture: true });

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  //處理起始年齡和結束年齡更新相對應狀態
  const handleClick = (e) => {
    const num = parseInt(e.target.textContent);

    if (direction === "min") {
      setAgeGroup(index, [num, ageGroup[1]]);
    } else {
      setAgeGroup(index, [ageGroup[0], num]);
    }
  };
  return (
    <>
      <div
        className="flex flex-col w-[45%] relative"
        ref={containerRef}
        onClick={() => setIsShow((isShow) => !isShow)}
      >
        <div
          className={cn(
            "border-y-[2px] border-[#E0E0E0] cursor-pointer px-2",
            "h-[60px] relative flex items-center justify-between",
            direction === "min" && "rounded-l-lg border-l-[2px]",
            direction === "max" && "rounded-r-lg border-r-[2px]",
            isShow && "border-[2px] border-[#FC8F6C] "
          )}
        >
          <div>{direction === "min" ? ageGroup[0] : ageGroup[1]}</div>
          {isShow ? (
            <ChevronUp className="h-7 w-7 text-[#999999]/[.9] stroke-[1px]" />
          ) : (
            <ChevronDown className="h-7 w-7 text-[#999999]/[.9] stroke-[1px]" />
          )}
        </div>

        <div
          className={cn(
            "absolute top-[60px] max-h-[200px] w-full overflow-scroll bg-[#F5F5F5]",
            "rounded-lg",
            !isShow && "hidden"
          )}
        >
          {[...Array(range)].map((_, index) => {
            return (
              <div
                className="hover:bg-[#FC8F6C] px-2 py-1"
                key={nanoid()}
                onClick={(e) => handleClick(e)}
              >
                {direction === "min" ? index : index + ageGroup[0]}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default AgeInput;
