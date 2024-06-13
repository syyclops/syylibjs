type LineGraphProps = {
    data: any[];
    colors?: string[];
    lineChartMargin?: {
      top: number;
      right: number;
      bottom: number;
      left: number;
    };
    enableGrids?: boolean;
    ref?: React.MutableRefObject<HTMLDivElement | null>;
    // graphWidth?: string;
    axesLeftTickRotate?:number,
    axesBottomTickRotate?:number,
    itemsPerPage?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15,
    cx?: string;
  };
  
  export { LineGraphProps };