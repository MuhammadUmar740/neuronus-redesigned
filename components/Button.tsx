import React from "react";

interface ButtonProps {
  className?: string;
  text: string;
}

const Button = ({ className = "", text }: ButtonProps) => {
  return (
    <button
      className={`${className} py-3 px-4 rounded-full bg-radial-[43.45%_44.45%_at_56.56%_20.66%,#2E3E99_0%,#4C67FF_100%,#4C67FF]`}
    >
      {text}
    </button>
  );
};

export default Button;
