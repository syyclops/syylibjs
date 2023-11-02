type ContentProps = {
  calendar: Calendar[];
  records: Record[];
};

type Calendar = {
  day: string;
  date: string;
};

type Record = {
  title: string;
  capsules: Array<string[]>;
};

export type ScheduleCalendarProps = {
  content: ContentProps;
  onAction?: (e: { content: Record; index: number }) => void;
};
