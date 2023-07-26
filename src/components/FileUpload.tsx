import React from "react";
import { twMerge } from "tailwind-merge";
import classnames from "classnames";

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
}: {
  onDragOver: (e: React.DragEvent<HTMLDivElement>) => void;
  onDrop: (e: React.DragEvent<HTMLDivElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width?: string;
  height?: string;
  border?: string;
  bg?: string;
  children: JSX.Element | JSX.Element[];
  cx?: string;
  include?: string;
}) => {
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
        fileInputRef.current?.click();
      }}
    >
      {children}
      <input
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
