type CheckboxProps = {
  variant?: "primary" | "secondary" | "dark" | "darker" | "darkest";
  checked: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  onAction: () => void;
  rounded?: boolean;
  cx?: string;
};

export { CheckboxProps };
