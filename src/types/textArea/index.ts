type textareaprops = {
  height: number;
  value: string;
  onType: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  name?: string;
  variant?: "primary" | "secondary" | "light" | "dark";
  placeholder?: string;
  rounded?: boolean;
  onAction?: () => void;
  cx?: string;
  width?: number;
  disableResize?: boolean;
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  textAreaDisabled?: boolean;
};

type textAreaVariantProps = {
  primary: string;
  secondary: string;
  light: string;
  dark: string;
};

export type { textAreaVariantProps, textareaprops };
