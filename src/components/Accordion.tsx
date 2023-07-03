import React, { useState } from "react";
import { AccordionProps } from "../types/accordion";
import { FaChevronDown } from "react-icons/fa";
import { variants } from "../config";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";

const Accordion = ({
  title,
  content,
  variant = "dark",
  width = "w-[8rem]",
  rounded = false,
  hideIcon = false,
  cxLayout = "",
  cxTitle = "",
  cxContent = "",
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={twMerge(
        classnames(
          "overflow-hidden text-xs",
          variants[variant],
          width,
          rounded ? "rounded-lg" : "rounded-none"
        ),
        cxLayout
      )}
    >
      <div
        className={twMerge(
          classnames(
            "flex items-center justify-between p-2 cursor-pointer",
            variants[variant]
          ),
          cxTitle
        )}
        onClick={toggleAccordion}
      >
        <div className="font-medium w-full">{title}</div>
        {!hideIcon && (
          <div className={isOpen ? "transform rotate-180" : ""}>
            <FaChevronDown />
          </div>
        )}
      </div>
      <div
        className={twMerge(
          classnames(isOpen ? "h-full p-2" : "h-0"),
          cxContent
        )}
      >
        {content}
      </div>
    </div>
  );
};

export default Accordion;
