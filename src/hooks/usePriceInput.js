import { useState, useEffect } from "react";
import { useListValue } from "../store/use-list-value";

const usePriceInput = (index) => {
  const [result, setResult] = useState("0");
  const [errMsg, setErrMsg] = useState("");
  const { updatePrice, value } = useListValue((state) => state);

  useEffect(() => {
    const sanitizedNumberTest = value[index]?.price.toString();
    if (
      /^-?(0(\.\d*[1-9])?|[1-9]\d*(\.\d*[1-9])?)$/.test(sanitizedNumberTest)
    ) {
      setErrMsg("");
      const [integerPart, decimalPart] = sanitizedNumberTest.split(".");
      const formattedIntegerPart = integerPart.replace(
        /\B(?=(\d{3})+(?!\d))/g,
        ","
      );
      const newResult = decimalPart
        ? `${formattedIntegerPart}.${decimalPart}`
        : formattedIntegerPart;

      setResult(newResult);
    } else {
      const errMsg =
        sanitizedNumberTest === "" ? "不可以為空白" : "請輸入正確數字格式";
      setResult(sanitizedNumberTest);
      setErrMsg(errMsg);
    }
  }, [index, value]);

  const addComma = (e) => {
    const sanitizedNumber = e.target.value.replace(/,/g, "");
    updatePrice(index, sanitizedNumber);
  };
  return { result, errMsg, addComma };
};
export default usePriceInput;
