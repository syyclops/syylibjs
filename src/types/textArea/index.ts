type textareaprops = {
  name?: string;
  variant?: "primary" | "secondary" | "light" | "dark";
  height: number;
  value: string;
  placeholder?: string;
  rounded?: boolean;
  onAction?: () => void;
  cx?: string;
  width?: number;
  disableResize?: boolean;
  onType: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  textAreaDisbled?: boolean;
};

type textAreaVariantProps = {
  primary: string;
  secondary: string;
  light: string;
  dark: string;
};

export type { textAreaVariantProps, textareaprops };
