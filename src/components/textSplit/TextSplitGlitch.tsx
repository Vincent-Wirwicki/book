import useTextSplitGlitched from "./useTextSplitGlitched";
import { useRef } from "react";

interface Props {
  text: string;
  className?: string;
  perLetter?: number;
  toNextLetter?: number;
  toNextIteration?: number;
  maxIteration?: number;
}
const TextSplitGlitch: React.FC<Props> = ({
  text,
  className,
  perLetter = 10,
  toNextLetter = 15,
  toNextIteration = 20,
  maxIteration = 5,
}) => {
  const ogLetters = Array.from(text);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const { handleMouseEnter, handleMouseLeave } = useTextSplitGlitched(
    wrapperRef,
    ogLetters,
    perLetter,
    toNextLetter,
    toNextIteration,
    maxIteration
  );

  return (
    <div
      ref={wrapperRef}
      className=""
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {ogLetters.map((letter, index) => (
        <span className={className} key={index + letter}>
          {letter}
        </span>
      ))}
    </div>
  );
};

export default TextSplitGlitch;
