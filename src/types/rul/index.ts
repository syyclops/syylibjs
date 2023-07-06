type RULProps = {
  header: string;
  content: ContentProps[];
  footer: JSX.Element | string;
  onAction: (a: RULActionProps) => void;
};

type RULActionProps = {
  index: number;
  discipline: string;
  content: string;
  cost: number;
};

type ContentProps = {
  disciplines: DisciplineProps[];
};

type DisciplineProps = {
  discipline: string;
  content: string;
  cost: number;
};

export { RULProps, DisciplineProps };
