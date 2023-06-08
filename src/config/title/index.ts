import { AlignProps, ElementsProps } from "../../types/title";

const elements: ElementsProps = {
  h1: "text-white text-3xl font-bold",
  h2: "text-white text-2xl font-bold",
  h3: "text-white text-xl font-bold",
  h4: "text-white text-lg font-bold",
  h5: "text-white text-md font-bold",
  h6: "text-white text-sm font-bold",
};

const alignment: AlignProps = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export { elements, alignment };
