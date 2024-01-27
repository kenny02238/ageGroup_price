import InputBox from "./InputBox";
import CardWrapper from "../CardWrapper";
import { useListValue } from "../../store/use-list-value";
import { useEffect, useState } from "react";
import { getNumberIntervals } from "../../lib/getNumberIntervals";
import { withInOverlap } from "../../lib/withInOverlap";

const AgeGroupSelect = ({ index }) => {
  const { value, setAllInclude } = useListValue((state) => state);
  const [errMsg, setErrMsg] = useState("");
  useEffect(() => {
    const result = value.map((item) => item.ageGroup);
    const numIntervals = getNumberIntervals(result);
    const isWithInOverlap = withInOverlap(
      numIntervals.overlap,
      value[index].ageGroup
    );
    if (!numIntervals.notInclude.length) {
      setAllInclude(true);
    } else {
      setAllInclude(false);
    }
    if (isWithInOverlap) {
      setErrMsg("年齡區間不可重疊");
    } else {
      setErrMsg("");
    }
  }, [value, index, setAllInclude]);
  return (
    <>
      <CardWrapper
        title="年齡"
        children={<InputBox index={index} />}
        errMsg={errMsg}
        index={index}
      />
    </>
  );
};

export default AgeGroupSelect;
