type PMCalendarProps = {
  header: string;
  index: number;
  content: ContentProps[];
  onNav: (n: string) => void;
  footer: JSX.Element;
  onAction: (a: PMActionProps) => void;
  year: number;
  quater: string;
};

type PMActionProps = {
  month: string;
  discipline: string;
  content: string;
};

type ContentProps = {
  month: string;
  disciplines: DisciplineProps[];
};

type DisciplineProps = {
  discipline: string;
  content: string;
};

type VariantProps = {
  architectural: string;
  electrical: string;
  mechanical: string;
  plumbing: string;
};

export {
  VariantProps,
  PMCalendarProps,
  PMActionProps,
  ContentProps,
  DisciplineProps,
};
