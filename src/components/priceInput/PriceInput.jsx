import usePriceInput from "../../hooks/usePriceInput";
import CardWrapper from "../CardWrapper";
import InputBox from "./InputBox";

const PriceInput = ({ index }) => {
  const { result, errMsg, addComma } = usePriceInput(index);

  return (
    <>
      <CardWrapper
        title="入住費用(每人每晚)"
        remark="輸入0表示免費"
        errMsg={errMsg}
        children={<InputBox addComma={addComma} result={result} />}
      />
    </>
  );
};

export default PriceInput;
