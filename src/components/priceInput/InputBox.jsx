import { cn } from "../../lib/utils";
const InputBox = ({ addComma, result }) => {
  return (
    <label className="h-[60px] w-full flex">
      <div
        className={cn(
          "border-l-[2px] border-y-[2px] border-[#E0E0E0] font-semibold",
          "h-full flex justify-center items-center w-[60px] text-[#8B8B8B]",
          "rounded-l-lg flex-shrink-0 flex-grow-0 bg-[#F5F5F5]"
        )}
      >
        TWD
      </div>
      <input
        type="text"
        className={cn(
          "h-full w-full  border-[2px] border-[#E0E0E0] rounded-r-lg pl-3 outline-none  ",
          "focus:border-[#FC8F6C] placeholder:font-medium placeholder-[#A9A9A9]/[0.6] placeholder:tracking-wider"
        )}
        name="number"
        placeholder="請輸入費用"
        onChange={(e) => addComma(e)}
        value={result}
      />
    </label>
  );
};

export default InputBox;
