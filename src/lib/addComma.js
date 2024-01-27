function addComma(num) {
  if (/^-?(0(\.\d*[1-9])?|[1-9]\d*(\.\d*[1-9])?)$/.test(num.toString())) {
    const [integerPart, decimalPart] = num.toString().split(".");
    const formattedIntegerPart = integerPart.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
    const result = decimalPart
      ? `${formattedIntegerPart}.${decimalPart}`
      : formattedIntegerPart;
    return result;
  } else {
    return "請輸入正確數字格式";
  }
}

// 範例
console.log(addComma(-12334555.01));
// -7, 855, 948.9527;
