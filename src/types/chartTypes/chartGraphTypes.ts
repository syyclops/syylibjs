type ChartGraphType = {
    data: DataPropsPrimitive | DataPropsObject;
    type: "bar" | "line";
    chartId:string,
    options?: any;
    ref?: React.MutableRefObject<HTMLDivElement | null>;
    customLegends?: {enable:boolean, colorRef:"borderColor" | "backgroundColor", closeIcon:boolean};
    customPlugins?: any[];
    onLegendClose?: (e:string) => void;
    cxLegends?: string;
    cxGraph?: string;
    cxLayout?: string;
  }

  type DataPropsPrimitive = {
    labels: any[],
    datasets: any[]
  };
  
  type DataPropsObject = {
    datasets: any[]
  };

  export { ChartGraphType };