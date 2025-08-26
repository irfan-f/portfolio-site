import { useState, FC, useEffect, HTMLAttributes } from 'react';

interface TypeWriterProps {
  text: string;
  delay?: number;
}

const TypeWriter: FC<TypeWriterProps & HTMLAttributes<HTMLElement>> = ({
  className,
  text,
  delay = 500,
}) => {
  const [textToDisplay, setTextToDisplay] = useState('');
  const [showCaret, setShowCaret] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowCaret((prev) => !prev);
    }, 600)

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (textToDisplay.length < text.length) {
      const timeoutId = setTimeout(() => {
        setTextToDisplay(text.slice(0, textToDisplay.length + 1));
      }, delay);
      return () => clearTimeout(timeoutId);
    }
  }, [textToDisplay, text, delay]); // watch these!

  return (
    <div className={`${className} relative`}>
      <div className="invisible w-fit" aria-hidden>
        {text}
      </div>
      <div className="absolute left-0 top-0">
        {textToDisplay}
        <span
          className={`absolute -top-1 ${showCaret ? 'opacity-100' : 'opacity-0'}`}
          aria-hidden
        >
          |
        </span>
      </div>
    </div>
  );
};

export default TypeWriter;
