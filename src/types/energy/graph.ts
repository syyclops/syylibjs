import { ContentBarType, ContentProps } from ".";

export type EnergyGraphProps = {
  content: ContentProps[];
  height?: string;
  bg?: string;
  onAction: (a: ContentBarType) => void;
};
