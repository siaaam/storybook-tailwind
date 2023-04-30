import React, { useEffect, useMemo } from "react";
const BASE_STYLE = "border border-red-500 ";

interface propsTypes {
  size: string;
  placeholder: string;
}

const getSizedInput = (size: string) => {
  switch (size) {
    case "large":
      return "px-3 py-4";
    case "small":
      return "px-1 py-2";
    case "medium":
      return "px-4 py-6";
    default:
      return "px-1 py-1";
  }
};
const getPlaceHolder = (size: string) => {
  switch (size) {
    case "large":
      return "this is large";
    case "small":
      return "this is small";
    case "medium":
      return "this is medium";
    default:
      return "this is default";
  }
};
const Input = ({ size, placeholder }: propsTypes) => {
  const cal = useMemo(() => {
    const resize = getSizedInput(size);
    const replaceHolder = getPlaceHolder(size);
    return { resize, replaceHolder };
  }, [size]);
  return (
    <input
      type="text"
      className={`${BASE_STYLE} ${cal.resize}`}
      placeholder={cal.replaceHolder ? cal.replaceHolder : placeholder}
    />
  );
};

export default Input;
