import { useRef } from "react";
import useCustomCursor from "./useCustomCursor";

const CustomCursor = () => {
  const ref = useRef(null);
  useCustomCursor(ref, 0.075);
  return <div className="cursor" ref={ref}></div>;
};

export default CustomCursor;
