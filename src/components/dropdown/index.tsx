// Author - Varun Bardwaj

import React from "react";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";
import { ActionProps } from "../../types/action";
import Action from "../../components/Action";
import { DropdownProps } from "../../types/dropdown";
import { variants } from "../../config";
import Input from '../../components/Input';

const Dropdown = ({
  type,
  title,
  open = false,
  children,
  onAction,
  variant = "primary",
  leftIcon,
  rightIcon,
  size = "sm",
  width = "w-[8rem]",
  position = "left",
  rounded = false,
  cxLayout = "",
  cxAction = "",
  enableSearch = false,
}: Omit<
  ActionProps,
  | "clickable"
  | "loading"
  | "loadingIcon"
  | "animate"
  | "onAction"
  | "variant"
  | "children"
  | "cx"
> &
  DropdownProps) => {
  const [searchValue, setSearchValue] = React.useState('');

  const filteredChildren = React.useMemo(() => {
    if (enableSearch) {
      return React.Children.toArray(children).filter((child: any) => {
        if (typeof child.props.children === 'string') {
          return child.props.children.toLowerCase().includes(searchValue.toLowerCase());
        }
        return false;
      });
    }
    return children;
  }, [children, searchValue, enableSearch]);

  return (
    <div
      className={twMerge(
        classnames(
          "relative",
          variants[variant],
          rounded ? "rounded-full" : "rounded-md"
        ),
        cxLayout
      )}
    >
      <Action
        type={type}
        onAction={() => onAction()}
        size={size}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        rounded={rounded}
        cx={twMerge(
          classnames("relative hover:opacity-100 bg-inherit w-full h-full"),
          cxAction
        )}
      >
        {title}
      </Action>
      {enableSearch && open && (
        <Input
          cxLayout="absolute top-0 left-0 w-full h-full bg-inherit"
          rounded={false}
          type="text"
          variant={variant as any}
          value={searchValue}
          onType={(e) => {
            setSearchValue(e.target.value)
          }}
        />
      )}
      {open && (
        <div
          className={classnames(
            "absolute",
            "z-[9999]",
            "max-h-[300px]",
            "overflow-y-auto",
            "rounded-md",
            width,
            position === "left" ? "left-0" : "right-0",
            enableSearch ? "mt-30px" : "mt-[5px]",
            "bg-inherit"
          )}
        >
          {filteredChildren}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
