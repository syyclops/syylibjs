type TitleProps = {
  element: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  text: string;
  align?: "left" | "center" | "right";
  color?: string;
  cx?: string;
};

type ElementsProps = {
  h1: string;
  h2: string;
  h3: string;
  h4: string;
  h5: string;
  h6: string;
};

type AlignProps = {
  left: string;
  center: string;
  right: string;
};

export { TitleProps, ElementsProps, AlignProps };
