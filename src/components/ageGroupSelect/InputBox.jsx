import { cn } from "../../lib/utils";
import AgeInput from "./AgeInput";
import { useListValue } from "../../store/use-list-value";

const InputBox = ({ index }) => {
  const { value, updateAgeGroup } = useListValue((state) => state);
  const tempValue = value[index].ageGroup;

  return (
    <>
      <div className="flex">
        <AgeInput
          direction="min"
          setAgeGroup={updateAgeGroup}
          ageGroup={tempValue}
          index={index}
        />
        <div
          className={cn(
            "flex justify-center items-center h-[60px] w-[10%]",
            "border-y-[2px] bg-[#F5F5F5] border-[#E0E0E0]"
          )}
        >
          ~
        </div>
        <AgeInput
          direction="max"
          setAgeGroup={updateAgeGroup}
          ageGroup={tempValue}
          index={index}
        />
      </div>
    </>
  );
};

export default InputBox;
