type FileUploadProps = {
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
  id: string;
  multiple?: boolean;
};

export { FileUploadProps };
