import { useState, FC, useEffect, HTMLAttributes } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
}

const TypeWriter: FC<TypeWriterProps & HTMLAttributes<HTMLElement>> = ({ className, text, delay = 800 }) => {
  const [textToDisplay, setTextToDisplay] = useState("");
  const [showCaret, setShowCaret] = useState(false);

  useEffect(() => {
    let index = -1;
    let blinked = false;

    const intervalId = setInterval(() => {
      if (index < text.length - 1) {
        if (blinked === true) {
          // add current character, THEN increment index
          setTextToDisplay((prev) => prev + text[index]);
          index++;
          blinked = false; // reset blink cycle
        } else {
          blinked = true; // one blink, no character typed
        }
      }
      setShowCaret((prev) => !prev);
    }, delay / 2);

    return () => clearInterval(intervalId);
  }, [text, delay]);

  return (
    <div className={`${className} relative`}>
      <div className="invisible w-fit" aria-hidden>{text}</div>
      <div className="absolute left-0 top-0">
        {textToDisplay}
        <span className={`absolute -top-1 ${showCaret ? "opacity-100" : "opacity-0"}`} aria-hidden>
          |
        </span>
      </div>
    </div>
  );
}

export default TypeWriter;