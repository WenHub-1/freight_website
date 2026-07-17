import React from "react";

const DEFAULT_BUBBLE_CLASSES = [
  "w-[60px] h-[60px] top-[18%] right-[7%] [animation-duration:10s] [animation-delay:-8s]",
  "w-[110px] h-[110px] top-[68%] right-[4%] [animation-duration:14s] [animation-delay:-2s]",
  "w-[50px] h-[50px] top-[78%] left-[18%] [animation-duration:9s] [animation-delay:-6s]",
];

interface FloatingBubblesProps {
  bubbleClasses?: string[];
}

const FloatingBubbles: React.FC<FloatingBubblesProps> = ({
  bubbleClasses = DEFAULT_BUBBLE_CLASSES,
}) => {
  return (
    <>
      {bubbleClasses.map((bubbleClass, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-primary/6 border border-primary/12 animate-float-bubble ${bubbleClass}`}
        />
      ))}
    </>
  );
};

export default FloatingBubbles;
