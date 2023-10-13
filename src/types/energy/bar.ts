import { ContentType, ContentProps } from ".";

export type EnergyBarProps = {
  header: JSX.Element | string;
  content: ContentProps[];
  footer: JSX.Element | string;
  onAction: (a: { data: ContentProps; clusterData: ContentType }) => void;
  cx?: string;
};
