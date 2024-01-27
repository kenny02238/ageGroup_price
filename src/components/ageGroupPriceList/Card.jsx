import PriceInput from "../priceInput/PriceInput";
import AgeGroupSelect from "../ageGroupSelect/AgeGroupSelect";
import { X } from "lucide-react";
import { useListValue } from "../../store/use-list-value";

const Card = ({ index }) => {
  const { removeItem } = useListValue((state) => state);

  return (
    <div className="flex flex-col gap-7 mb-[40px]">
      <div className="text-xl text-[#616161] flex justify-between">
        <div className="cursor-default">{`價格設定 - ${index + 1}`}</div>
        {index !== 0 && (
          <div
            className="flex text-[#F83C00] cursor-pointer group"
            onClick={() => removeItem(index)}
          >
            <X className="w-7 h-7 stroke-1 group-hover:stroke-2" />
            <div className="group-hover:font-medium">移除</div>
          </div>
        )}
      </div>
      <div className="grid grid-cols-2 gap-10">
        <AgeGroupSelect index={index} />
        <PriceInput index={index} />
      </div>
      <hr />
    </div>
  );
};

export default Card;
