export type TabProps = {
  index: number;
  title: string | JSX.Element;
  onAction: (i: number) => void;
  selected: boolean;
  cx?: string;
};
