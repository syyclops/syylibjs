type CircleProps = {
  percentage: number;
  variant:
    | "primary"
    | "primary-light"
    | "dark"
    | "darker"
    | "darkest"
    | "light"
    | "lighter"
    | "lightest"
    | "secondary"
    | "success"
    | "error"
    | "warning"
    | "info"
    | "arch"
    | "elec"
    | "mech"
    | "plumb"
    | "energyele"
    | "energygas"
    | "energysolar"
    | "energywater";
};

type PieChartProps = {
  circleSize?: number;
  circles: CircleProps[] | [];
};

export { PieChartProps, CircleProps };
