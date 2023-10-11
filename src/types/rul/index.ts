type RULProps = {
  header: string;
  content: ContentProps[];
  footer: JSX.Element | string;
  onAction: (a: RULActionProps) => void;
  highlight?: { yearIndex: number; disciplineIndex: number };
};

type RULActionProps = {
  yearIndex: number;
  disciplineIndex: number;
  discipline: string;
  content: string;
  cost: number | string;
};

type ContentProps = {
  disciplines: DisciplineProps[];
};

type DisciplineProps = {
  discipline: string;
  content: string;
  cost: number | string;
};

export { RULProps, DisciplineProps };
