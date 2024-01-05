// Author - Varun Bardwaj

import React from "react";
import { memo, useEffect } from "react";
import { IconType } from "react-icons";
import { FiX } from "react-icons/fi";
import { ToastProps } from "../types/toast";
import { icons, variants, placements } from "../config/toast";
import classnames from "classnames";

const Toast = ({
  variant = "success",
  position = "fixed",
  placement = { horizontal: "center", vertical: "bottom" },
  message,
  timeout,
  open,
  onClose,
}: ToastProps) => {
  useEffect(() => {
    let timer: number;
    if (open) {
      if (timeout) {
        timer = window.setTimeout(() => {
          if (onClose) {
            onClose();
          }
        }, timeout * 1000);
      }
    }
    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onClose, open]);

  const handleonClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const Icon: IconType = icons[variant];

  return (
    <>
      {open && (
        <div
          className={classnames(
            position,
            position !== "static" ? placements[placement.horizontal] : "",
            position !== "static" ? placements[placement.vertical] : "",
            variants[variant],
            "w-fit py-3 px-4 rounded-md shadow-lg"
          )}
          data-testid="toast"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Icon className="mr-3" />
              <span
                className="text-sm font-semibold"
                data-testid="toast-message"
              >
                {message}
              </span>
            </div>
            <button
              className="text-white hover:text-gray-100 font-semibold ml-2 bg-transparent border-none cursor-pointer"
              onClick={() => handleonClose()}
              data-testid="close"
            >
              <FiX />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Toast);
