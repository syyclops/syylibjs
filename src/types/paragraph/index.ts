type ParagraphProps = {
  children: string;
  clamp?: 1 | 2 | 3 | 4 | 5;
  cx?: string;
};

type LineClampProps = [string, string, string, string, string];

export { ParagraphProps, LineClampProps };
