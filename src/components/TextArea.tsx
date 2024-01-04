// Author - Manish

import React from "react";
import { textareaprops } from "../types/textArea";
import { twMerge } from "tailwind-merge";
import classNames from "classnames";
import { variants } from "../config/textArea";

const TextArea = ({
  name,
  variant,
  height,
  value,
  placeholder,
  onAction,
  onKeyDown,
  onType,
  rounded,
  cx,
  width,
  disableResize,
  textAreaDisabled,
}: textareaprops) => {
  return (
    <textarea
      onChange={onType}
      onKeyDown={onKeyDown}
      name={name}
      spellCheck={false}
      value={value}
      rows={height ? height : 0}
      cols={width}
      disabled={textAreaDisabled}
      placeholder={placeholder}
      onClick={onAction}
      className={twMerge(
        classNames(
          variant ? variants[variant] : variants["light"],
          disableResize ? "resize-none" : "resize",
          rounded ? "rounded-[1.5rem] pl-2" : "rounded-lg",
          "not-italic  border-none outline-none"
        ),
        cx ? cx : ""
      )}
      data-testid="textarea"
    />
  );
};

export default TextArea;
