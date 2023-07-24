import React from "react";
import { textareaprops } from "../types/textArea";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { variants } from "../config/textArea";

const TextArea = ({
  name,
  variant = "light",
  height = 0,
  value,
  placeholder,
  onAction,
  onKeyDown,
  onType,
  rounded = false,
  cx = "",
  width = 0,
  disableResize = false,
  textAreaDisbled = false,
}: textareaprops) => {
  return (
    <textarea
      onChange={onType}
      onKeyDown={onKeyDown}
      name={name}
      spellCheck={false}
      value={value}
      rows={height}
      cols={width}
      disabled={textAreaDisbled}
      placeholder={placeholder}
      onClick={onAction}
      className={twMerge(
        classNames(
          width,
          variants[variant],
          disableResize ? "resize-none" : "resize",
          rounded ? "rounded-[1.5rem] pl-2" : "rounded-lg",
          "not-italic  border-none outline-none"
        ),
        cx
      )}
    ></textarea>
  );
};

export default TextArea;
