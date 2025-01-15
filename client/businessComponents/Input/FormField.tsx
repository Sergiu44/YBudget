import React, { HTMLInputTypeAttribute } from "react";

interface IInputProps {
  label?: string;
  labelId?: string;
  id: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  size?: "sm" | "md" | "lg";
  containerStyles?: string;
}

const inputStyles = {
  sm: {
    paddingInline: "8px",
    paddingBlock: "4px",
    fontSize: "12px",
  },
  md: {
    paddingInline: "10px",
    paddingBlock: "8px",
    fontSize: "14px",
  },
  lg: {
    paddingInline: "12px",
    paddingBlock: "10px",
    fontSize: "16px",
  },
};

export default function Input({ size = "md", ...props }: IInputProps) {
  const test = inputStyles[size];
  return (
    <div className={`my-1 flex flex-col ${props.containerStyles || ""}`}>
      {props.label && <label htmlFor={props.labelId}>{props.label}</label>}
      <input
        className="border-none outline-none"
        style={{ ...test, borderRadius: "4px" }}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
      />
    </div>
  );
}
