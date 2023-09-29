export type ContentType = {
  percent: string;
  tooltip?: string | JSX.Element;
  bg: string;
  category?: string;
  usage?: string;
};

export type ContentTypeArray = ContentType[];

export type ContentBarType = { bars: ContentTypeArray; date: string };

export type ContentProps = {
  label: string;
  data: ContentTypeArray | ContentBarType[];
};
