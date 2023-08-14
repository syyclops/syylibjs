import React from "react";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";
import { FileUploadProps } from "../types/fileUpload";

const FileUpload = ({
  onDragOver,
  onDrop,
  onChange,
  children,
  width = "w-full",
  height = "h-20",
  border = "border-dashed border-[0.094rem] border-primary-light",
  bg = "bg-transparent",
  cx = "",
  include = "",
  id,
}: FileUploadProps) => {
  const fileInputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div
      className={twMerge(
        classnames("rounded-lg py-6", width, height, border, bg),
        cx
      )}
      onDragOver={onDragOver}
      onDrop={onDrop}
      onClick={() => {
        fileInputRef.current!.click();
      }}
    >
      {children}
      <input
        id={id}
        className="hidden"
        ref={fileInputRef}
        title="upload"
        type="file"
        onChange={onChange}
        multiple
        accept={include}
      />
    </div>
  );
};

export default FileUpload;
