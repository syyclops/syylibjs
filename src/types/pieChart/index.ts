type CircleProps = {
  percentage: number;
  variant:
    | "primary"
    | "primary-light"
    | "dark"
    | "darker"
    | "darkest"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info";
};

type PieChartProps = {
  circleSize?: number;
  circles: CircleProps[] | [];
};

export { PieChartProps, CircleProps };
