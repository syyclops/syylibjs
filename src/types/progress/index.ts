type PercentRange<
  start extends number,
  end extends number,
  arr extends unknown[] = [],
  acc extends number = never
> = arr["length"] extends end
  ? acc | start | end
  : PercentRange<
      start,
      end,
      [...arr, 1],
      arr[start] extends undefined ? acc : acc | arr["length"]
    >;

type ProgressProps = {
  type: "bar" | "circle";
  percent: PercentRange<0, 100>;
  variant?:
    | "primary"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "dark"
    | "darker"
    | "darkest"
    | "light"
    | "lighter"
    | "lightest";
  barSize?: "xs" | "sm" | "md" | "lg";
  circleSize?: number;
  showPercent?: boolean;
  completedBg?: string;
  remainingBg?: string;
  completedStroke?: string;
  remainingStroke?: string;
  fg?: string;
};

export { ProgressProps };
