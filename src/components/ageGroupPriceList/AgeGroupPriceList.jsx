import Card from "./Card";
import { useListValue } from "../../store/use-list-value";
import { Plus } from "lucide-react";
import { useEffect } from "react";
import { cn } from "../../lib/utils";

const AgeGroupPriceList = ({ onChange }) => {
  const { addNewItem, value, allInclude } = useListValue((state) => state);
  useEffect(() => {
    //此處若需要驗證資料如題目提供的資料結構
    // result = [
    //   { ageGroup: [7, 16], price: 999.99 }, { ageGroup: [0, 0], price: 0 },
    //   ...]
    //可做一個驗證當使用者將螢幕上的所有錯誤提示都解決後才會觸發onChange
    //並且將price的type轉為number
    //目前暫時不做轉換type，將使用者輸入的資料直接回傳
    onChange(value);
  }, [value, onChange]);
  return (
    <div className="w-[60%] flex flex-col ">
      {value.map((_, index) => {
        return <Card key={index} index={index} />;
      })}
      <div
        className={cn(
          "flex items-center text-[#2EB2A1] cursor-pointer group",
          allInclude && "invisible"
        )}
        onClick={addNewItem}
      >
        <Plus className="w-5 h-5 stroke-1 group-hover:stroke-[1.5px]" />
        <p className="font-medium group-hover:font-bold">新增價格設定</p>
      </div>
    </div>
  );
};

export default AgeGroupPriceList;
