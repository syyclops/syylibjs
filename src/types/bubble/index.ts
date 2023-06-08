type BubbleProps = {
  text: string;
  tooltip?: boolean;
  variant?: "primary" | "secondary" | "success" | "error" | "warning" | "info";
  size?: "xs" | "sm" | "md" | "lg";
  onAction?: () => void;
  bg?: string;
  fg?: string;
  animate?: boolean;
};

export { BubbleProps };
