import React from "react";

interface ButtonProps {
  onClick: () => void; // Function that doesn't return a Promise
  text: string;
  className?: string;
}

export function Button({ onClick, text, className }: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
}
