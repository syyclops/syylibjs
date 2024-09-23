interface RadialChartTypes {
    data: any[];
    ref?: React.MutableRefObject<HTMLDivElement | null>;
      startAngle?:number;
      endAngle?:number;
      innerRadius?:string | number;
      outerRadius?:string | number;
      barSize?:number;
      accessibilityLayer?:boolean;
      barCategoryGap?: string | number;
      barGap?: string | number;
      margin?:any;  
      maxBarSize?:number;
      radialBarDataKey:string;
      cornerRadius?:string | number;
      barBackground?:RadialBarBackground;
      labelPosition?:LabelListPosition;
      labelDataKey:string;
      labelFontSize?:number;
      labelFontWeight?:string | number;
      labelColor?:string;
      customTooltip?: ({ payload, label, active }: {
          payload?: any;
          label?: any;
          active?: any;
      }) => JSX.Element | null
      tooltipContentStyle?: React.CSSProperties;
      tooltipCursor?:boolean;
      customLegend?: (props: any) => JSX.Element;
      legendLayout?:"vertical" | "horizontal";
      legendVerticalAlign?: "top" | "middle" | "bottom";
      legendWrapperStyle?:React.CSSProperties;
      labelEnable?: boolean,
      legendEnable?: boolean,
      tooltipEnable?: boolean
      cxLayout?: string;
  }

interface RadialBarBackground {
    fill?: string;          
    stroke?: string;        
    strokeWidth?: number;   
  }

  type LabelListPosition = 
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'inside'
  | 'outside'
  | 'insideTop'
  | 'insideBottom'
  | 'insideLeft'
  | 'insideRight';

  export { RadialChartTypes };